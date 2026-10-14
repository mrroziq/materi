
const $ = id => document.getElementById(id);

let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function startGame() {
    const topic = $("topic").value;

    const available = questionBank.filter(q =>
        topic === "semua" || q.topic === topic
    );

    if (available.length === 0) {
        alert("Belum ada soal. Isi game-data.js terlebih dahulu.");
        return;
    }

    const shuffled = shuffle(available);
    const count = $("jumlah").value;

    questions = count === "semua"
        ? shuffled
        : shuffled.slice(0, Number(count));

    currentIndex = 0;
    score = 0;

    $("setup").classList.add("hidden");
    $("hasil").classList.add("hidden");
    $("quiz").classList.remove("hidden");

    showQuestion();
}

function showQuestion() {
    answered = false;

    const q = questions[currentIndex];

    $("kategori").textContent = q.topic;
    $("nomor").textContent =
        `Soal ${currentIndex + 1} dari ${questions.length}`;

    $("pertanyaan").textContent = q.question;

    $("progress-bar").style.width =
        `${currentIndex / questions.length * 100}%`;

    $("pilihan").innerHTML = "";
    $("feedback").textContent = "";
    $("feedback").className = "feedback hidden";
    $("berikutnya").disabled = true;

    $("berikutnya").textContent =
        currentIndex === questions.length - 1
            ? "Lihat Hasil"
            : "Soal Berikutnya";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option-button";
        button.textContent = option;

        button.addEventListener("click", () => {
            chooseAnswer(index);
        });

        $("pilihan").appendChild(button);
    });
}

function chooseAnswer(index) {
    if (answered) return;

    answered = true;

    const q = questions[currentIndex];
    const buttons = [...$("pilihan").children];
    const correct = index === q.answer;

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === q.answer) {
            button.classList.add("correct");
        }

        if (i === index && !correct) {
            button.classList.add("incorrect");
        }
    });

    if (correct) score++;

    $("feedback").textContent =
        (correct ? "Benar! " : "Belum tepat. ") +
        (q.explanation || "");

    $("feedback").className =
        "feedback " +
        (correct ? "correct-feedback" : "incorrect-feedback");

    $("berikutnya").disabled = false;
}

function showResult() {
    $("quiz").classList.add("hidden");
    $("hasil").classList.remove("hidden");

    $("progress-bar").style.width = "100%";

    const percentage = Math.round(
        score / questions.length * 100
    );

    $("skor").textContent =
        `${score} / ${questions.length} (${percentage}%)`;

    $("pesan").textContent =
        "Kamu dapat mencoba kembali untuk berlatih.";
}

$("mulai").addEventListener("click", startGame);

$("berikutnya").addEventListener("click", () => {
    if (!answered) return;

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

$("ulang").addEventListener("click", () => {
    $("hasil").classList.add("hidden");
    $("setup").classList.remove("hidden");
});