const quizData = [
  {
    question: "1.	Isa sa mga sumusunod na salita ay hindi kabilang sa limang makrong kasanayan, ano ito?",
    options: ["Pakikinig", "Pagsasalita", "Panonood", "Pagmamasid"],
    answer: "Pagmamasid"
  },
  {
    question: "2.	Ayon kay ______ , ang pagsusulat ay isang pagpapahayag ng kaalamang kailanman ay hindi maglalaho.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Edwin Mabilin"
    
  },
  {
    question: "3.	Isa itong uri ng Pagsulat na nagpapakilala sa mga pinagkunang kaalaman sa paggawa ng konsepto ng papel.",
    options: ["Reperensiyal na Pagsulat", "Teknikal na Pagpsulat", "Dyornalistik na Pagsulat", "Propesyunal na Pagsulat"],
    answer: "Reperensiyal na Pagsulat"
    
  },
  {
    question: "4. Ito ang pinasimple at pinaikling bersyon ng sulatin o akda.",
    options: ["Abstrak", "Kongklusyon", "Buod", "Lagom"],
    answer: "Lagom"
    
  },
  {
    question: "5.	Ito ay isang uri ng lagom na karaniwang ginagamit sa akademikong papel.",
    options: ["Bionote", "Buod", "Abstrak", "Akademikang Pagsulat"],
    answer: "Abstrak"
    
  },
  {
    question: "6.	Ito ay isang uri ng lagom na ginagamit sa tekstong naratibo tulad ng kwento, parabula , at iba pang panitikan.",
    options: ["Buod", "Kongklusyon", "Bionote", "Lagum"],
    answer: "Buod"
    
  },
  {
    question: "7.	Ito ay isang uri ng lagom  sa pagsulat ng personal profile.",
    options: ["Bionote", "Lagom", "Abstrak", "Memorandum"],
    answer: "Bionote"
    
  },
  {
    question: "8.	Ayon kay Sudprasert(2014), ito ay ang paksang tatalakayin sa pulong.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Adyenda"
    
  },
  {
    question: "9.	Ayon kay Sudprasert(2014), ito ay isang kasulatang nagbibigay ng kabatiran tungkol sa gagawaing pulong o paalala tungkol sa isang mahalagang impormasyon, gawain, tungkulin, o utos.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Memorandum"
    
  },
  {
    question: "10.	Ayon kay ____, may tatlong uri ng memorandum ayon sa layunin nito.",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Bargo"
    
  },
  {
    question: "11.	Traditional dances throughout the Philippines with common basic movement but with light variation.",
    options: ["Local or Regional Dances", "Folkdances", "National Dances", "Occupational Dances"],
    answer: "National Dances"
    
  },
  {
    question: "12.	It is an integral part of the educational program designed to promote the optimum development of an individual.",
    options: ["Folkdance", "Dance", "Physical Education", "Philippines Folk Dance"],
    answer: "Physical Education"
    
  },
  {
    question: "13.	It is the oldest form of dance, the earliest forms of communication.",
    options: ["Folkdance", "Dance", "Physical Education", "Philippines Folk Dance"],
    answer: "Folkdance"
    
  },
  {
    question: "14.	In the five fundamental positions of the arms, the one arm is raised above your head, while other arm maintains its position. The arm that was raised should be slightly curved.",
    options: ["1st position", "2nd position", "3rd position", "4th position"],
    answer: "3rd position"
    
  },
  {
    question: "15.	In the five fundamental positions of the feet, move 1 foot sideward, parallel to each other with distance of 12 inches.",
    options: ["1st position", "2nd position", "3rd position", "4th position"],
    answer: "2nd position"
    
  },
  {
    question: "16.	It is performed in connection with the religious vows and ceremonies.",
    options: ["National Dances", "Local or Regional Dances", "Religious or ceremonial Dances", "Courtship Dances"],
    answer: "Local or Regional Dances"
    
  },
  {
    question: "17.	It is a genre of music with fast movement that originated in Spain.",
    options: ["Philippines folk dance", "Jota", "Dances", "Folkdance"],
    answer: "Jota"
    
  },
  {
    question: "18.	It is a Spanish courtship dance with emotional steps and moderately fast tempo.",
    options: ["Jota Batangueña", "Folkdance", "National Dances", "Geography Dances"],
    answer: "Jota Batangueña"
    
  },
  {
    question: "19.	Form a V-shape with your feet by bringing your heels together to touch.",
    options: ["1st position", "2nd position", "3rd position", "4th position"],
    answer: "1st position"
    
  },
  {
    question: "20. Raise your arms into a circle in front of your chest. Your hands should be aligned in front of your chest with both arms slightly curved, and your fingertips should be atleast 1inch apart.",
    options: ["1st position", "2nd position", "3rd position", "4th position"],
    answer: "1st position"
    
  },
  {
    question: "21.	It is the collection of organized data.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Database Systems"
    
  },
  {
    question: "22.	It is the systematic collection of data.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Database"
    
  },
  {
    question: "23.	It is the facts related to any object inconsideration like name, age, and pdf.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Data"
    
  },
  {
    question: "24.	All of the choices are parts of the five major parts of a database system, except for one.",
    options: ["People", "Procedures", "Data", "System"],
    answer: "System"
    
  },
  {
    question: "25.	It is the set of instruction of a computer.",
    options: ["Program", "Programming", "Software", "Command"],
    answer: "Program"
    
  },
  {
    question: "26.	It is the machine language representation of the source code.",
    options: ["Support Module", "Data Module", "Object Code", "Linker"],
    answer: "Object Code"
    
  },
  {
    question: "27.	A formal language that will be used to direct instructions to the computer.",
    options: ["Java", "Programming Language", "SDLC", "Bytecode"],
    answer: "Programming Language"
    
  },
  {
    question: "28.	It is the process of performing particular computations.",
    options: ["Computer programming", "Programming Language", "Java", "bytecode"],
    answer: "Computer programming"
    
  },
  {
    question: "29.	It is the concept of hiding internal implementation details and exposing only the required functionalities to the end user.",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: "Abstraction"
    
  },
  {
    question: "30.	Stand- alone program that does not need a browser to run.",
    options: ["Java Virtual Machine", "Applet", "Application", "Robust Language"],
    answer: "Application"
    
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 180;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerHTML = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/30</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="">Back</a>`;
}

function countdown() {
  const timerElement = document.getElementById("time");
  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    } else {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
    }
  }, 1000);
}

displayQuestion();
countdown();