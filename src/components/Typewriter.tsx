import { useState, useEffect } from 'react';

const words = ["Welcome To Website TH", "Website Utama Media Global"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const[subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  },[subIndex, index, reverse]);

  // Hapus neonBlue, ganti jadi teks hitam pekat
  return <span className="text-black tracking-wider">{`${words[index].substring(0, subIndex)}|`}</span>;
}