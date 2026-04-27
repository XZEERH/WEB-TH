// Import Firebase dari CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Konfigurasi Firebase lu
const firebaseConfig = {
    apiKey: "AIzaSyAbVVdBEKW--zrAEN8OI71YHRTLOYEnQTU",
    authDomain: "th-media-1bc27.firebaseapp.com",
    projectId: "th-media-1bc27",
    storageBucket: "th-media-1bc27.firebasestorage.app",
    messagingSenderId: "714737128940",
    appId: "1:714737128940:web:a17012b37dc4d514df9cc9"
};

// Inisialisasi Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Kumpulan Gambar Unsplash Tema Sejarah (Piramida, Perang, Peta Kuno, Dokumen Sejarah, Colosseum, dll)
const sejarahUnsplash =[
    "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566367576585-0511ce35d1f8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574768393532-68074d2b2c9a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568668392383-58c369615742?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop"
];

// Fitur Auto Unsplash
document.getElementById('btnUnsplash').addEventListener('click', function() {
    // Milih gambar random dari list sejarahUnsplash
    const randomImg = sejarahUnsplash[Math.floor(Math.random() * sejarahUnsplash.length)];
    document.getElementById('gambar').value = randomImg;
});

// Fitur Load Data buat ditampilkan di List Hapus
async function loadMediaData() {
    const listContainer = document.getElementById('mediaList');
    listContainer.innerHTML = '<p style="color: #6b7280; font-size: 14px;">Memuat data...</p>';

    try {
        const q = query(collection(db, "media_updates"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        if(querySnapshot.empty) {
            listContainer.innerHTML = '<p style="color: #6b7280; font-size: 14px;">Belum ada media yang diupload.</p>';
            return;
        }

        listContainer.innerHTML = '';
        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const id = docSnap.id;

            const itemHTML = `
                <div class="media-item">
                    <div class="media-item-info">
                        <h3>${data.judul}</h3>
                    </div>
                    <button class="delete-btn" data-id="${id}">Hapus</button>
                </div>
            `;
            listContainer.innerHTML += itemHTML;
        });

        // Pasang event listener buat tombol hapus
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', async function() {
                const docId = this.getAttribute('data-id');
                const konfirmasi = confirm("Yakin ingin menghapus media ini karena typo/salah?");
                if(konfirmasi) {
                    try {
                        this.textContent = "Menghapus...";
                        await deleteDoc(doc(db, "media_updates", docId));
                        loadMediaData(); // Refresh list otomatis setelah dihapus
                    } catch (error) {
                        alert("Gagal menghapus! Cek koneksi internet.");
                    }
                }
            });
        });

    } catch (error) {
        console.error("Gagal meload data:", error);
        listContainer.innerHTML = '<p style="color: red; font-size: 14px;">Gagal memuat list data.</p>';
    }
}

// Panggil fungsi loadMediaData pas halaman admin dibuka
loadMediaData();

// Fitur Upload Data
document.getElementById('uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sedang Mengupload... ⏳';
    submitBtn.disabled = true;

    const data = {
        judul: document.getElementById('judul').value,
        gambar: document.getElementById('gambar').value,
        deskripsi: document.getElementById('deskripsi').value,
        link: document.getElementById('link').value,
        createdAt: serverTimestamp()
    };

    try {
        await addDoc(collection(db, "media_updates"), data);
        alert(`Sukses! Informasi "${data.judul}" berhasil diupload!`);
        this.reset();
        loadMediaData(); // Refresh list fitur hapus biar postingan barusan langsung muncul
    } catch (error) {
        console.error("Gagal upload:", error);
        alert('Gagal! Cek koneksi internet lu.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});