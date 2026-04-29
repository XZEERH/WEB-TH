import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// GANTI DENGAN KODE FIREBASE LU!
const firebaseConfig = {
    apiKey: "AIzaSyAbVVdBEKW--zrAEN8OI71YHRTLOYEnQTU",
    authDomain: "th-media-1bc27.firebaseapp.com",
    projectId: "th-media-1bc27",
    storageBucket: "th-media-1bc27.firebasestorage.app",
    messagingSenderId: "714737128940",
    appId: "1:714737128940:web:a17012b37dc4d514df9cc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Mengaktifkan fitur Keamanan Auth

// Elemen UI
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');

// CEK STATUS LOGIN (Apakah user sudah masuk atau belum?)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Kalau berhasil login, sembunyikan form login, buka dashboard
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        loadMediaData(); // Load daftar hapus media
    } else {
        // Kalau belum login / ditendang keluar
        loginSection.style.display = 'block';
        dashboardSection.style.display = 'none';
    }
});

// FITUR LOGIN ADMIN
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Sukses! Selamat datang Admin.");
    } catch (error) {
        alert("Akses Ditolak! Email atau Password salah.");
    }
});

// FITUR LOGOUT
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth);
    alert("Berhasil keluar.");
});

// FITUR AUTO UNSPLASH
const sejarahUnsplash =[
    "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop"
];
document.getElementById('btnUnsplash').addEventListener('click', function() {
    document.getElementById('gambar').value = sejarahUnsplash[Math.floor(Math.random() * sejarahUnsplash.length)];
});

// FITUR LOAD & HAPUS MEDIA
async function loadMediaData() {
    const listContainer = document.getElementById('mediaList');
    listContainer.innerHTML = '<p style="color: #6b7280; font-size: 14px;">Memuat data...</p>';

    try {
        const q = query(collection(db, "media_updates"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        listContainer.innerHTML = querySnapshot.empty ? '<p style="color: #6b7280; font-size: 14px;">Belum ada media.</p>' : '';
        
        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            listContainer.innerHTML += `
                <div class="media-item">
                    <div class="media-item-info"><h3>${data.judul}</h3></div>
                    <button class="delete-btn" data-id="${docSnap.id}">Hapus</button>
                </div>
            `;
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                if(confirm("Yakin hapus media ini?")) {
                    this.textContent = "Menghapus...";
                    await deleteDoc(doc(db, "media_updates", this.getAttribute('data-id')));
                    loadMediaData(); 
                }
            });
        });
    } catch (error) {
        listContainer.innerHTML = '<p style="color: red; font-size: 14px;">Gagal memuat list data.</p>';
    }
}

// FITUR UPLOAD MEDIA
document.getElementById('uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = 'Mengupload... ⏳';
    submitBtn.disabled = true;

    try {
        await addDoc(collection(db, "media_updates"), {
            judul: document.getElementById('judul').value,
            gambar: document.getElementById('gambar').value,
            deskripsi: document.getElementById('deskripsi').value,
            link: document.getElementById('link').value,
            createdAt: serverTimestamp()
        });
        alert(`Informasi berhasil dipublikasikan!`);
        this.reset();
        loadMediaData(); 
    } catch (error) {
        alert('Gagal! Cek koneksi atau sesi login lu.');
    } finally {
        submitBtn.textContent = 'Upload Informasi';
        submitBtn.disabled = false;
    }
});