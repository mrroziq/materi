const questionBank = [
    {
        topic: "fondasi-fungsi-bilangan",
        question: "Himpunan penyelesaian dari pertidaksamaan |x| < 3 adalah ...",
        options: [
            "-3 < x < 3",
            "x < -3 atau x > 3",
            "-3 ≤ x ≤ 3",
            "x > 3"
        ],
        answer: 0,
        explanation: "Nilai mutlak |x| < 3 berarti jarak x dari nol kurang dari 3, sehingga -3 < x < 3."
    },
    {
        topic: "fondasi-fungsi-bilangan",
        question: "Domain fungsi f(x) = 1/(x - 2) adalah ...",
        options: [
            "Semua bilangan real",
            "Semua bilangan real kecuali x = 2",
            "x > 2",
            "x < 2"
        ],
        answer: 1,
        explanation: "Penyebut tidak boleh nol. Karena x - 2 ≠ 0, maka x ≠ 2."
    },
    {
        topic: "fondasi-fungsi-bilangan",
        question: "Jika f(x) = 2x + 3, maka f(4) = ...",
        options: [
            "8",
            "10",
            "11",
            "14"
        ],
        answer: 2,
        explanation: "Substitusikan x = 4 ke fungsi: f(4) = 2(4) + 3 = 11."
    },
    {
        topic: "fondasi-fungsi-bilangan",
        question: "Jika f(x) = x + 2 dan g(x) = 3x, maka (f ∘ g)(x) = ...",
        options: [
            "3x + 2",
            "3x + 6",
            "x + 5",
            "3x - 2"
        ],
        answer: 0,
        explanation: "(f ∘ g)(x) = f(g(x)) = f(3x) = 3x + 2."
    },
    {
        topic: "fondasi-fungsi-bilangan",
        question: "Nilai logaritma log₂ 8 adalah ...",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        answer: 1,
        explanation: "Karena 2³ = 8, maka log₂ 8 = 3."
    },
    {
        topic: "limit-fungsi",
        question: "Nilai lim(x→2) (x² + 1) adalah ...",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: 2,
        explanation: "Fungsi polinomial kontinu, sehingga dapat langsung disubstitusikan: 2² + 1 = 5."
    },
    {
        topic: "limit-fungsi",
        question: "Nilai lim(x→3) (x² - 9)/(x - 3) adalah ...",
        options: [
            "3",
            "6",
            "9",
            "Tidak ada"
        ],
        answer: 1,
        explanation: "Faktorkan x² - 9 = (x - 3)(x + 3). Untuk x ≠ 3, bentuknya menjadi x + 3. Limitnya adalah 3 + 3 = 6."
    },
    {
        topic: "limit-fungsi",
        question: "Jika limit kiri dan limit kanan suatu fungsi di x = a sama, maka ...",
        options: [
            "Limit fungsi pasti tidak ada",
            "Limit fungsi ada dan sama dengan nilai kedua limit satu sisi tersebut",
            "Fungsi harus bernilai nol di x = a",
            "Fungsi harus tidak terdefinisi di x = a"
        ],
        answer: 1,
        explanation: "Limit dua sisi ada jika limit kiri dan limit kanan ada serta bernilai sama. Nilai fungsi di titik a tidak harus sama dengan limitnya."
    },
    {
        topic: "limit-fungsi",
        question: "Nilai lim(x→0) (sin x)/x adalah ... dengan x dalam radian.",
        options: [
            "0",
            "1",
            "Tidak terdefinisi",
            "Tak hingga"
        ],
        answer: 1,
        explanation: "Ini adalah limit trigonometri dasar: lim(x→0) sin x/x = 1, dengan x diukur dalam radian."
    },
    {
        topic: "limit-fungsi",
        question: "Nilai lim(x→∞) (3x² + 1)/(x² - 2) adalah ...",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: 3,
        explanation: "Pembilang dan penyebut memiliki derajat tertinggi yang sama, yaitu 2. Limitnya adalah perbandingan koefisien x², yaitu 3/1 = 3."
    }
];