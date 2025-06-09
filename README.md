# 🏢 SuperOffice Next.js

Ini adalah proyek **SuperOffice** yang dibangun menggunakan [Next.js](https://nextjs.org). Aplikasi ini berfungsi sebagai platform modern berbasis React untuk kebutuhan kantor.

---

## 🔗 Preview Production

🌍 **[Lihat versi live di sini](https://wildanoffice.vercel.app/)**  
Deploy otomatis oleh [Vercel](https://vercel.com).

---

## 🚀 Cara Menjalankan Proyek di Lokal

### 1. Clone Repository
```bash
git clone https://github.com/IzzaWildanRidhoni/superoffice-nextjs.git
cd superoffice-nextjs
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

### 3. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```

Akses aplikasi di:
```
http://localhost:3000
```

---

## 📦 Script Penting

| Script          | Keterangan                        |
|------------------|-----------------------------------|
| `npm run dev`    | Menjalankan development server    |
| `npm run build`  | Build untuk produksi              |
| `npm run start`  | Menjalankan hasil build           |

---

## 📁 Struktur Direktori (Umum)

```
/app         # Routing App Router Next.js (jika digunakan)
/pages       # Routing Page Router (jika masih digunakan)
/public      # File statis (gambar, favicon, dll)
/styles      # CSS / Tailwind / global styles
```

---

## 📌 Catatan

- Pastikan Node.js versi 18 atau lebih baru sudah terinstall.
- Gunakan environment variable di file `.env.local` jika dibutuhkan:
  ```env
  DATABASE_URL=mysql://root@localhost:3306/db_nextjs_api
  ```

---

## 🙋‍♂️ Kontribusi

Pull Request sangat diterima jika ingin berkontribusi. Jangan lupa untuk membuat branch baru sebelum mengajukan perubahan.

---

## 📞 Kontak

Dibuat oleh **Izza Wildan Ridhoni**  
📬 [Kunjungi GitHub Saya](https://github.com/IzzaWildanRidhoni)
