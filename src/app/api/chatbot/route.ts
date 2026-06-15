import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
//  Prima AI — Smart Health Assistant (Offline-capable)
//  Tidak memerlukan API key eksternal
// ─────────────────────────────────────────────────────────────

interface HealthRule {
  keywords: string[];
  reply: string;
}

const HEALTH_RULES: HealthRule[] = [
  // ── DEMAM ─────────────────────────────────────────────────
  {
    keywords: ["demam", "panas", "suhu tinggi", "suhu badan", "meriang", "febris"],
    reply: `Aku mengerti kamu sedang mengalami demam. Ini hal yang cukup umum terjadi, dan ada beberapa hal yang perlu kamu perhatikan.

Saran awal untuk demam:
- 🌡️ Ukur suhu tubuhmu — demam ringan: 37.5–38°C, sedang: 38–39°C, tinggi: >39°C
- 💧 Minum air putih yang banyak (minimal 8 gelas/hari) agar tidak dehidrasi
- 🛏️ Istirahat yang cukup, hindari aktivitas berat
- 🧴 Kompres dahi dengan kain yang dibasahi air hangat (bukan dingin)
- 💊 Boleh minum paracetamol (sesuai dosis) untuk menurunkan demam

Segera ke dokter jika:
- Demam di atas 39.5°C atau berlangsung lebih dari 3 hari
- Disertai kejang, sesak napas, atau ruam kulit
- Anak balita dengan demam tinggi perlu penanganan segera

Apakah ada gejala lain yang menyertai demammu? 😊`,
  },
  // ── KEPALA / PUSING ───────────────────────────────────────
  {
    keywords: ["pusing", "kepala", "sakit kepala", "migrain", "vertigo", "kliyengan", "berputar"],
    reply: `Sakit kepala atau pusing memang tidak nyaman. Ada beberapa kemungkinan penyebabnya.

Penyebab umum pusing/sakit kepala:
- 💧 Kurang minum air (dehidrasi) — paling sering terjadi!
- 😴 Kurang tidur atau terlalu lelah
- 📱 Terlalu lama menatap layar (digital eye strain)
- 😤 Stres atau tekanan pikiran
- 🍽️ Terlambat makan / gula darah rendah
- 🌪️ Vertigo — biasanya disertai rasa berputar

Yang bisa kamu lakukan sekarang:
1. Minum 1–2 gelas air putih
2. Berbaring di ruangan yang tenang dan gelap
3. Pijat ringan area pelipis selama 5 menit
4. Makan makanan ringan jika belum makan
5. Hindari layar HP/laptop sementara

Ke dokter jika:
- Sakit kepala sangat parah dan tiba-tiba ("thunderclap headache")
- Disertai mual/muntah, penglihatan ganda, atau kelemahan tubuh
- Berulang lebih dari 2x seminggu

Apakah pusingmu disertai gejala lain? 🤔`,
  },
  // ── BATUK ─────────────────────────────────────────────────
  {
    keywords: ["batuk", "berdahak", "batuk kering", "tenggorokan", "gatal tenggorokan"],
    reply: `Batuk adalah mekanisme alami tubuh untuk membersihkan saluran pernapasan. Mari aku bantu analisis.

Jenis batuk dan penanganannya:

🟡 Batuk kering (tidak berdahak):
- Minum air hangat dengan madu + lemon
- Hisap permen pelega tenggorokan
- Hindari udara dingin dan AC langsung

🟠 Batuk berdahak:
- Banyak minum air agar dahak encer dan mudah keluar
- Uap air panas (inhalasi) 2x sehari
- Hindari makanan berminyak dan minuman dingin

Saran umum:
- 🚭 Jauhi asap rokok dan polusi
- 💦 Minum air hangat sepanjang hari
- 🍯 Madu terbukti efektif meredakan batuk ringan
- 😷 Gunakan masker di tempat berdebu

Segera periksa ke dokter jika:
- Batuk lebih dari 2 minggu
- Disertai darah dalam dahak
- Demam tinggi dan sesak napas
- Berat badan turun drastis

Sudah berapa lama kamu batuk? 🗓️`,
  },
  // ── PILEK / FLU ───────────────────────────────────────────
  {
    keywords: ["pilek", "flu", "hidung", "meler", "bersin", "mampet", "tersumbat", "hidung mampet"],
    reply: `Pilek/flu biasanya disebabkan virus dan bisa sembuh sendiri dalam 7–10 hari. Tapi ada yang bisa kamu lakukan untuk mempercepat penyembuhan!

Cara mengatasi pilek:
- 💧 Minum air putih hangat yang banyak
- 🍜 Konsumsi sup ayam hangat (terbukti ilmiah membantu!)
- 🌿 Uap air panas dengan minyak kayu putih untuk melegakan hidung
- 🧂 Cuci hidung dengan larutan garam (nasal rinse)
- 😴 Tidur dengan bantal lebih tinggi agar lebih mudah bernapas
- 🍋 Vitamin C dosis tinggi (jeruk, jambu biji)

Obat tanpa resep yang bisa membantu:
- Dekongestan untuk hidung tersumbat
- Antihistamin untuk bersin-bersin
- Paracetamol jika disertai demam/nyeri

Ke dokter jika:
- Demam di atas 38.5°C lebih dari 3 hari
- Dahak berwarna hijau/kuning pekat
- Nyeri wajah hebat (sinusitis)
- Sesak napas atau nyeri dada

Mau tahu cara membuat minuman herbal untuk pilek? 🌿`,
  },
  // ── SAKIT PERUT ───────────────────────────────────────────
  {
    keywords: ["sakit perut", "perut", "mules", "kembung", "diare", "mencret", "maag", "lambung", "mual perut"],
    reply: `Sakit perut bisa disebabkan banyak hal. Mari aku bantu identifikasi dan berikan saran.

Berdasarkan lokasi nyeri:

🔴 Perut atas (ulu hati) — kemungkinan Maag/GERD:
- Makan tepat waktu, jangan telat
- Hindari makanan pedas, asam, berminyak
- Kurangi kopi dan minuman berkarbonasi
- Minum antasida jika perlu

🟠 Seluruh perut + diare — kemungkinan Gastroenteritis:
- Perbanyak minum air/oralit agar tidak dehidrasi
- Makan makanan hambar (nasi, pisang, roti tawar)
- Hindari susu dan produk olahannya sementara waktu

🟡 Perut kembung:
- Hindari minuman berkarbonasi
- Makan lebih lambat dan kunyah sempurna
- Coba teh jahe atau peppermint

Segera ke UGD jika:
- Nyeri perut sangat parah dan tiba-tiba
- Perut terasa kaku/keras saat disentuh
- Disertai demam tinggi dan muntah terus-menerus
- BAB berdarah

Sudah berapa lama perut sakitnya? Dan di bagian mana? 📍`,
  },
  // ── MUAL / MUNTAH ─────────────────────────────────────────
  {
    keywords: ["mual", "muntah", "ingin muntah", "enek", "ingin mual"],
    reply: `Mual adalah respons tubuh yang bisa disebabkan banyak hal. Ini yang bisa kamu lakukan.

Pertolongan pertama untuk mual:
- 🫚 Hirup aroma jahe segar atau minum teh jahe hangat
- 🍋 Isap irisan lemon atau minum air lemon hangat
- 🌬️ Duduk tegak atau berbaring miring, jangan terlentang
- 💧 Minum air sedikit-sedikit tapi sering (jangan langsung banyak)
- 🍘 Makan crackers/biskuit tawar sebelum bangun dari tempat tidur
- 🌿 Minyak peppermint: hirup atau oleskan di bawah hidung

Hindari saat mual:
- Makanan berlemak, pedas, atau berbau menyengat
- Gerakan tiba-tiba
- Berbaring telentang langsung setelah makan

Mual setelah makan obat?
- Minum obat dengan makanan, bukan perut kosong

Ke dokter jika:
- Muntah lebih dari 24 jam terus-menerus
- Ada darah dalam muntahan
- Disertai nyeri dada atau sakit kepala parah
- Tanda dehidrasi: mulut kering, tidak kencing

Apakah mualnya disertai gejala lain? 🤔`,
  },
  // ── SESAK NAPAS ───────────────────────────────────────────
  {
    keywords: ["sesak", "napas", "susah napas", "nafas", "asma", "dada sesak", "berat dada"],
    reply: `⚠️ Sesak napas adalah kondisi yang perlu perhatian serius.

Pertolongan segera:
1. 🪑 Duduk tegak atau condong ke depan dengan tangan di lutut
2. 🌬️ Bernapas perlahan dan dalam melalui hidung, keluarkan lewat mulut
3. ❄️ Cari udara segar atau ruangan ber-AC yang bersih
4. 💊 Jika punya obat asma/inhaler, gunakan sesuai petunjuk dokter

🚨 SEGERA KE IGD / HUBUNGI 119 jika:
- Sesak napas parah dan tiba-tiba
- Bibir/ujung jari membiru
- Tidak bisa berbicara karena sesak
- Disertai nyeri dada yang menjalar ke lengan/rahang
- Kehilangan kesadaran

Sesak ringan yang baru pertama kali?
Tetap periksakan ke dokter untuk memastikan penyebabnya — bisa asma, alergi, anemia, atau kondisi lain.

Apakah sesaknya terjadi tiba-tiba atau sudah berlangsung lama? ⏱️`,
  },
  // ── BMI ───────────────────────────────────────────────────
  {
    keywords: ["bmi", "berat badan", "berat ideal", "obesitas", "gemuk", "kurus", "indeks massa"],
    reply: `Kamu ingin menghitung BMI (Body Mass Index)? Aku bantu!

Rumus BMI:
> BMI = Berat Badan (kg) ÷ (Tinggi Badan dalam meter)²

Contoh:
- Berat: 60 kg, Tinggi: 165 cm (1.65 m)
- BMI = 60 ÷ (1.65 × 1.65) = 60 ÷ 2.7225 = 22.0

Kategori BMI (WHO untuk Asia):

| BMI | Kategori |
|-----|----------|
| < 18.5 | 🔵 Berat badan kurang |
| 18.5 – 22.9 | 🟢 Normal / Ideal |
| 23.0 – 24.9 | 🟡 Kelebihan berat badan |
| 25.0 – 29.9 | 🟠 Obesitas I |
| ≥ 30.0 | 🔴 Obesitas II |

Tips menjaga berat badan ideal:
- 🥗 Perbanyak sayur, buah, dan protein lean
- 🚶 Minimal 30 menit aktivitas fisik per hari
- 💧 Minum air sebelum makan untuk mengurangi porsi
- 😴 Tidur cukup (kurang tidur = mudah gemuk)

Coba hitung BMI-mu sekarang! Beritahu aku berat dan tinggi badanmu, aku bantu hitung 📊`,
  },
  // ── TIDUR / INSOMNIA ──────────────────────────────────────
  {
    keywords: ["susah tidur", "insomnia", "tidak bisa tidur", "tidur", "begadang", "kurang tidur"],
    reply: `Susah tidur atau insomnia sangat mengganggu produktivitas dan kesehatan. Ini tipsnya!

Teknik tidur yang terbukti efektif:
- 📵 Jauhkan HP/layar 1 jam sebelum tidur (blue light menghambat melatonin)
- 🌡️ Atur suhu kamar sejuk (18–22°C adalah suhu ideal tidur)
- 🕯️ Matikan lampu atau gunakan lampu redup
- ⏰ Tidur dan bangun di jam yang SAMA setiap hari (termasuk weekend)
- 🧘 Coba teknik napas 4-7-8: hirup 4 detik, tahan 7, hembuskan 8

Yang harus dihindari:
- ☕ Kopi/kafein setelah jam 2 siang
- 🍺 Alkohol (merusak kualitas tidur meski mudah tertidur)
- 🏃 Olahraga berat 3 jam sebelum tidur

Rutinitas malam yang membantu:
1. Mandi air hangat sebelum tidur
2. Minum segelas susu hangat atau teh chamomile
3. Baca buku fisik (bukan layar)
4. Tulis jurnal/pikiran yang mengganggu agar benak lebih tenang

Sudah berapa lama kamu mengalami kesulitan tidur? 🌙`,
  },
  // ── STRES / MENTAL HEALTH ─────────────────────────────────
  {
    keywords: ["stres", "stress", "anxiety", "cemas", "khawatir", "depresi", "sedih", "mental", "panik", "overthinking"],
    reply: `Terima kasih sudah mau berbagi. Kesehatan mental sama pentingnya dengan kesehatan fisik. 💙

Teknik cepat meredakan stres/cemas:

🌬️ Teknik napas kotak (Box Breathing):
1. Hirup napas 4 detik
2. Tahan 4 detik
3. Hembuskan 4 detik
4. Tahan lagi 4 detik
5. Ulangi 4–5 kali

🌿 Grounding technique (5-4-3-2-1):
- Sebutkan 5 hal yang kamu lihat
- 4 hal yang bisa kamu sentuh
- 3 hal yang bisa kamu dengar
- 2 hal yang bisa kamu cium
- 1 hal yang bisa kamu rasakan

Kebiasaan jangka panjang:
- 🏃 Olahraga rutin (terbukti sama efektifnya dengan antidepresan ringan)
- 📓 Journaling setiap hari
- 🤝 Cerita ke orang yang dipercaya
- 🎯 Batasi konsumsi berita dan media sosial

Kapan perlu bantuan profesional?
- Rasa sedih/cemas berlangsung lebih dari 2 minggu
- Mengganggu pekerjaan dan kehidupan sehari-hari
- Muncul pikiran untuk menyakiti diri sendiri

Hubungi Into The Light Indonesia: 119 ext 8 untuk konseling gratis 🆘

Kamu tidak sendirian. Apa yang sedang kamu rasakan? 💬`,
  },
  // ── ALERGI ────────────────────────────────────────────────
  {
    keywords: ["alergi", "gatal", "bentol", "ruam", "biduran", "urtikaria", "kulit gatal"],
    reply: `Reaksi alergi bisa ringan hingga serius. Mari aku bantu!

Pertolongan pertama alergi kulit:
- 🧴 Kompres dingin area yang gatal/bentol
- 🚿 Mandi air dingin untuk meredakan gatal
- 💊 Antihistamin (cetirizine/loratadine) bisa dibeli bebas di apotek
- 🚫 Jangan digaruk — bisa infeksi dan memperparah

Identifikasi pemicunya:
- 🍤 Makanan (seafood, kacang, telur, susu)
- 🌸 Serbuk bunga/debu
- 🧴 Produk perawatan kulit/deterjen baru
- 🐱 Bulu hewan
- 💊 Obat-obatan

Catat dan hindari pemicunya untuk mencegah reaksi berulang!

🚨 SEGERA KE IGD jika:
- Tenggorokan bengkak / sulit menelan
- Sesak napas atau napas berbunyi
- Wajah dan bibir membengkak
- Pusing hebat / pingsan
*(Ini tanda anafilaksis — kondisi darurat!)*

Apa yang kamu makan/sentuh sebelum gejala muncul? 🤔`,
  },
  // ── NYERI OTOT / SENDI ────────────────────────────────────
  {
    keywords: ["nyeri otot", "pegal", "nyeri sendi", "sakit punggung", "sakit pinggang", "kram", "otot", "sendi", "rematik"],
    reply: `Nyeri otot atau sendi sangat mengganggu aktivitas sehari-hari. Ini yang bisa kamu lakukan!

Pertolongan pertama (metode RICE):
- 🛑 Rest — Istirahatkan bagian yang sakit
- 🧊 Ice — Kompres es 15–20 menit (dalam 48 jam pertama)
- 🔵 Compression — Balut dengan perban elastis jika perlu
- ⬆️ Elevation — Angkat bagian yang sakit lebih tinggi dari jantung

Setelah 48 jam:
- Ganti kompres es → kompres hangat untuk melancarkan aliran darah
- Stretching ringan dan gerakan perlahan

Untuk nyeri punggung/pinggang:
- Hindari duduk terlalu lama tanpa bergerak
- Perbaiki postur duduk (punggung tegak, layar sejajar mata)
- Latihan penguatan core/perut

Obat yang bisa membantu:
- Paracetamol untuk nyeri ringan
- Balsem/gel analgesik topikal
- Konsultasikan ke dokter jika perlu NSAID

Ke dokter jika:
- Nyeri berlangsung lebih dari 1 minggu
- Sendi bengkak, merah, dan terasa panas
- Nyeri disertai demam atau kelemahan

Nyeri di bagian mana? Sudah berapa lama? 📍`,
  },
];

// ── Fallback general response ─────────────────────────────────
const GENERAL_FALLBACK = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  // Sapaan
  if (lowerMsg.match(/^(halo|hai|hi|hello|hei|hey|selamat|apa kabar|gimana kabar)/)) {
    return `Halo! Senang bertemu denganmu! 😊

Aku Prima AI, asisten kesehatan virtualmu. Aku siap membantu memberikan panduan kesehatan awal.

Beberapa hal yang bisa aku bantu:
- 🤒 Keluhan demam, batuk, pilek
- 🤕 Sakit kepala atau pusing  
- 🤢 Mual, sakit perut
- 💪 Nyeri otot dan sendi
- 😴 Masalah tidur
- 🧠 Stres dan kesehatan mental
- ⚖️ Hitung BMI dan berat badan ideal

Ceritakan keluhanmu dan aku akan bantu memberikan saran! 🏥`;
  }

  // Terima kasih
  if (lowerMsg.match(/(terima kasih|makasih|thank|thanks)/)) {
    return `Sama-sama! Senang bisa membantu 😊

Ingat, saran dari aku hanya panduan awal. Jika keluhanmu berlanjut atau terasa parah, jangan ragu untuk langsung konsultasi ke dokter melalui fitur Cari Dokter di Prima Health.

Ada hal lain yang ingin kamu tanyakan? 💙`;
  }

  // Default
  return `Terima kasih sudah berbagi! Aku mencatat keluhanmu: "${message}".

Untuk bisa memberikan saran yang lebih tepat, bisa kamu ceritakan lebih detail?

Beberapa pertanyaan yang mungkin membantu:
- 📅 Sudah berapa lama gejala ini kamu rasakan?
- 📍 Di bagian mana yang terasa tidak nyaman?
- 🌡️ Apakah ada demam atau gejala lain yang menyertai?
- 💊 Apakah sudah mencoba obat atau penanganan tertentu?

Atau kamu bisa memilih topik spesifik:
demam | pusing | batuk | pilek | sakit perut | BMI | stres

Aku siap membantu! 😊`;
};

function getHealthReply(message: string): string {
  const lowerMsg = message.toLowerCase();

  // Cek setiap rule
  for (const rule of HEALTH_RULES) {
    const matched = rule.keywords.some((keyword) =>
      lowerMsg.includes(keyword.toLowerCase())
    );
    if (matched) {
      return rule.reply;
    }
  }

  // Fallback
  return GENERAL_FALLBACK(message);
}

// ── Simulasi delay agar terasa natural ───────────────────────
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { reply: "Pesan tidak boleh kosong." },
        { status: 400 }
      );
    }

    // Simulasi "thinking" delay (0.5–1.5 detik agar terasa alami)
    const thinkingTime = 500 + Math.random() * 1000;
    await sleep(thinkingTime);

    const reply = getHealthReply(message.trim());

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("[Chatbot Error]:", errMsg);
    return NextResponse.json(
      { reply: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
