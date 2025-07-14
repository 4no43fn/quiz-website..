const questions = [
    {
        question: "1. Wer hat das Stolpersteine-Projekt ins Leben gerufen?",
        answers: ["a) Walter Bacher", "b) Gunter Demnig"],
        correct: 1
    },
    {
        question: "2. Was ist das Ziel des Stolpersteine-Projekts?",
        answers: ["a) Die Städte zu verschönern.", "b) Die Erinnerung an die Geschichte des Ersten Weltkriegs zu bewahren.", "c) Die Erinnerung an die Opfer des Nationalsozialismus bewahren."],
        correct: 2
    },
    {
        question: "3. Wie viele Städte in Deutschland und andere europäische Länder sind mittlerweile an dem Stolpersteine-Projekt beteiligt?",
        answers: ["a) 1265 Städte in Deutschland und 21 Länder.", "b) 1000 Städte in Deutschland und 10 Länder.", "c) 500 Städte in Deutschland und 5 Länder.", "d) 1500 Städte in Deutschland und 30 Länder."],
        correct: 0
    }
    ,
    {
        question: "4. Was trägt jeder Stolperstein?",
        answers: ["a) Nur den Namen.", "b) Nur das Geburtsdatum.", "c) Nur das Todesdatum.", "d) Den Namen, die Lebensgeschichte und deren Schicksal."],
        correct: 3
    }
    ,
    {
        question: "5. Wie viel kostet ein Stolperstein?",
        answers: ["a) 70$", "b) 120 Euro", "c) 100 Euro"],
        correct: 1
    }
    ,
    {
        question: "6. Was bewirkt eine Patenschaft?",
        answers: ["a) Eine Person kann sich ein Stolperstein kaufen und ihn an ihren Wohnort verlegen.", "b) Man kann einen Stolperstein finanzieren und so das Erinnern an die Opfer der NS-Zeit unterstützen.", "c) Man kann einen Stolperstein mit einem Bild des Opfers versehen."],
        correct: 1
    }
    ,
    {
        question: "7. Wie viele jüdische Menschen lebten in Duisburg während des Nationalsozialismus?",
        answers: ["a) Etwa 1300 jüdische Menschen.", "b) Etwa 600 jüdische Menschen.", "c) Etwa 3000 jüdische Menschen.", "d) Etwa 5000 jüdische Menschen."],
        correct: 0
    }
    ,
    {
        question: "8. Warum habe ich die Stolpersteine in Duisburg nach Stadtbezirke sortiert?",
        answers: ["a) Um zu zeigen in welchem Stadtteil die meisten Opfer lebten.", "b) Um Einblicke in das ehemalige Leben der Juden in Duisburg und des Nationalsozialismus zu geben."],
        correct: 1
    }
    

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
        alert("Richtig!");
    } else {
        alert("Falsch!");
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = `Quiz beendet! Dein Punktestand: ${score}/${questions.length}`;
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
    }
    nextButton.disabled = true;
});

showQuestion();
nextButton.disabled = true;








.//const answers = ["Antwort A", "Antwort B", "Antwort C", "Antwort D"];
const answersContainer = document.getElementById("answers");

answers.forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    answersContainer.appendChild(btn);
});

