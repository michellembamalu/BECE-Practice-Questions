const subjects = {
  "Mathematics": [
    { year: 2020, q: "Evaluate 3/4 + 2/5.", options: ["1 3/20", "1 1/5", "5/9", "1 7/20"], answer: 0, why: "Use a common denominator of 20: 15/20 + 8/20 = 23/20 = 1 3/20." },
    { year: 2021, q: "A shirt costs ₦4,800. What is its price after a 10% discount?", options: ["₦4,320", "₦4,380", "₦4,680", "₦4,800"], answer: 0, why: "10% of ₦4,800 is ₦480. Subtracting the discount gives ₦4,320." },
    { year: 2022, q: "Solve 3x + 5 = 20.", options: ["3", "5", "7", "15"], answer: 1, why: "Subtract 5 from both sides to get 3x = 15, then divide by 3." },
    { year: 2023, q: "Find the area of a triangle with base 12 cm and height 7 cm.", options: ["19 cm²", "42 cm²", "84 cm²", "38 cm²"], answer: 1, why: "Area = 1/2 × base × height = 1/2 × 12 × 7 = 42 cm²." },
    { year: 2024, q: "Express 0.35 as a fraction in its simplest form.", options: ["7/20", "35/10", "3/5", "7/25"], answer: 0, why: "0.35 = 35/100. Dividing top and bottom by 5 gives 7/20." },
    { year: 2025, q: "The ratio of red to blue beads is 2:3. If there are 25 beads, how many are blue?", options: ["10", "12", "15", "20"], answer: 2, why: "There are 5 equal parts. Each part is 25 ÷ 5 = 5, so blue beads = 3 × 5 = 15." },
    { year: 2026, q: "A bus travels 180 km in 3 hours. What is its average speed?", options: ["30 km/h", "60 km/h", "90 km/h", "540 km/h"], answer: 1, why: "Average speed = distance ÷ time = 180 ÷ 3 = 60 km/h." }
  ],
  "English Language": [
    { year: 2020, q: "Choose the word nearest in meaning to 'brief'.", options: ["Short", "Bright", "Loud", "Careful"], answer: 0, why: "Brief means short in duration or length." },
    { year: 2021, q: "Choose the correct word: Neither Ada nor her friends ____ late.", options: ["is", "was", "are", "be"], answer: 2, why: "With 'neither...nor', the verb agrees with the nearer subject, 'friends', which is plural." },
    { year: 2022, q: "Which sentence is correctly punctuated?", options: ["Where are you going.", "Where are you going?", "where are you going?", "Where are you going,!"], answer: 1, why: "A direct question begins with a capital letter and ends with a question mark." },
    { year: 2023, q: "Choose the opposite of 'ancient'.", options: ["Old", "Historic", "Modern", "Early"], answer: 2, why: "Modern means relating to the present or recent times, the opposite of ancient." },
    { year: 2024, q: "Identify the adjective: 'The diligent pupil completed the task.'", options: ["pupil", "completed", "diligent", "task"], answer: 2, why: "'Diligent' describes the noun 'pupil', so it is an adjective." },
    { year: 2025, q: "Choose the correct pronoun: Musa and ____ went to the library.", options: ["me", "I", "mine", "myself"], answer: 1, why: "The pronoun is part of the subject, so the subject form 'I' is correct." },
    { year: 2026, q: "What is the plural form of 'analysis'?", options: ["analysises", "analysis", "analyses", "analysies"], answer: 2, why: "The plural of analysis is analyses." }
  ],
  "Basic Science": [
    { year: 2020, q: "Which organ pumps blood around the human body?", options: ["Lung", "Heart", "Kidney", "Stomach"], answer: 1, why: "The heart contracts to pump blood through the body's blood vessels." },
    { year: 2021, q: "Which state of matter has a fixed volume but takes the shape of its container?", options: ["Solid", "Liquid", "Gas", "Smoke"], answer: 1, why: "A liquid keeps a fixed volume but flows to take the shape of its container." },
    { year: 2022, q: "Green plants make their food mainly by a process called ____.", options: ["respiration", "digestion", "photosynthesis", "evaporation"], answer: 2, why: "Photosynthesis uses light energy, water and carbon dioxide to make food in green plants." },
    { year: 2023, q: "Which of these is a renewable source of energy?", options: ["Coal", "Petrol", "Sunlight", "Natural gas"], answer: 2, why: "Sunlight is naturally replenished and is a renewable energy source." },
    { year: 2024, q: "The change of liquid water into water vapour is called ____.", options: ["freezing", "condensation", "melting", "evaporation"], answer: 3, why: "Evaporation changes liquid water into water vapour at the surface." },
    { year: 2025, q: "Which nutrient is mainly needed for growth and repair of body tissues?", options: ["Protein", "Water", "Fibre", "Salt"], answer: 0, why: "Proteins supply materials the body uses to build and repair tissues." },
    { year: 2026, q: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: 2, why: "Mercury is the innermost planet in the Solar System." }
  ],
  "Basic Technology": [
    { year: 2020, q: "Which tool is best for measuring a short straight length accurately?", options: ["Try square", "Steel rule", "Pliers", "Screwdriver"], answer: 1, why: "A steel rule is graduated and used to measure short lengths." },
    { year: 2021, q: "Which simple machine is a sloping surface used to raise a load?", options: ["Pulley", "Lever", "Inclined plane", "Wheel and axle"], answer: 2, why: "An inclined plane is a sloping surface that helps raise or lower a load." },
    { year: 2022, q: "Which material is a good electrical conductor?", options: ["Rubber", "Copper", "Dry wood", "Plastic"], answer: 1, why: "Copper allows electric current to flow easily and is used in wires." },
    { year: 2023, q: "What is the main purpose of a fuse in an electrical circuit?", options: ["Increase voltage", "Store current", "Break the circuit when current is too high", "Make a wire longer"], answer: 2, why: "A fuse melts and opens the circuit if excessive current flows, helping prevent damage." },
    { year: 2024, q: "Which drawing instrument is used to draw a circle?", options: ["Compass", "Divider", "Set square", "Protractor"], answer: 0, why: "A compass holds a pencil at a fixed radius and is used to draw circles or arcs." },
    { year: 2025, q: "A structure designed to carry a load without collapsing is described as ____.", options: ["unstable", "strong", "flexible only", "temporary"], answer: 1, why: "A strong structure safely supports the loads placed on it." },
    { year: 2026, q: "Which safety item protects the eyes during workshop work?", options: ["Apron", "Goggles", "Ear plugs", "Gloves"], answer: 1, why: "Safety goggles protect the eyes from dust and flying particles." }
  ],
  "Christian Religious Studies": [
    { year: 2020, q: "According to the Bible, who built an ark before the great flood?", options: ["Moses", "Noah", "Abraham", "Joseph"], answer: 1, why: "The biblical account in Genesis describes Noah building an ark." },
    { year: 2021, q: "Which quality did the Good Samaritan show to the injured traveller?", options: ["Jealousy", "Compassion", "Pride", "Fear"], answer: 1, why: "The Samaritan showed compassion by caring for a stranger in need." },
    { year: 2022, q: "Who led the Israelites out of Egypt?", options: ["David", "Moses", "Solomon", "Elijah"], answer: 1, why: "Moses led the Israelites out of Egypt in the Exodus account." },
    { year: 2023, q: "In the Lord's Prayer, people ask for forgiveness for their ____.", options: ["journeys", "debts", "harvests", "gifts"], answer: 1, why: "The Lord's Prayer includes the request to forgive our debts or trespasses." },
    { year: 2024, q: "Which fruit of the Spirit includes kindness and patience?", options: ["Love", "Anger", "Greed", "Pride"], answer: 0, why: "Love is listed among the fruit of the Spirit in Galatians 5." },
    { year: 2025, q: "Who was thrown into a den of lions but was protected, according to the Bible?", options: ["Daniel", "Jonah", "Peter", "Samuel"], answer: 0, why: "Daniel was placed in the lions' den and remained unharmed in the biblical account." },
    { year: 2026, q: "The Christian celebration of Jesus' resurrection is called ____.", options: ["Christmas", "Pentecost", "Easter", "Lent"], answer: 2, why: "Easter commemorates the resurrection of Jesus in Christian belief." }
  ],
  "Physical and Health Education": [
    { year: 2020, q: "Which activity is most useful for improving cardiovascular endurance?", options: ["Long-distance jogging", "Sitting still", "Reading", "Slow stretching only"], answer: 0, why: "Sustained aerobic exercise such as jogging strengthens the heart and lungs." },
    { year: 2021, q: "How many players from one team are on the court in a standard basketball game?", options: ["5", "6", "7", "11"], answer: 0, why: "A basketball team has five players on the court at a time." },
    { year: 2022, q: "What should a player do before vigorous exercise?", options: ["Skip water all day", "Warm up", "Lie down", "Eat a very large meal"], answer: 1, why: "A warm-up prepares the muscles and body for more vigorous activity." },
    { year: 2023, q: "Which nutrient is the body's main source of energy for everyday activity?", options: ["Carbohydrate", "Vitamin C", "Water", "Mineral salts"], answer: 0, why: "Carbohydrates are an important energy source for the body." },
    { year: 2024, q: "In football, which player is permitted to handle the ball in the penalty area?", options: ["Any defender", "Goalkeeper", "Team captain", "Centre forward"], answer: 1, why: "The goalkeeper may handle the ball inside their own penalty area, subject to the rules." },
    { year: 2025, q: "Which habit helps prevent the spread of many communicable diseases?", options: ["Sharing towels", "Washing hands with soap", "Ignoring clean water", "Leaving food uncovered"], answer: 1, why: "Handwashing with soap removes many germs and helps prevent their spread." },
    { year: 2026, q: "A sprain is an injury to a ____.", options: ["ligament", "tooth", "lung", "blood cell"], answer: 0, why: "A sprain involves stretching or tearing of a ligament around a joint." }
  ],
  "Civic Education": [
    { year: 2020, q: "Which document contains the fundamental laws of a country?", options: ["A diary", "The constitution", "A newspaper", "A timetable"], answer: 1, why: "A constitution sets out the fundamental laws and structure of government." },
    { year: 2021, q: "Which is a responsibility of a good citizen?", options: ["Destroying public property", "Obeying lawful rules", "Avoiding all community work", "Spreading false information"], answer: 1, why: "Citizens are expected to obey the law and contribute responsibly to society." },
    { year: 2022, q: "The right to express an opinion peacefully is an example of a ____.", options: ["civic duty", "fundamental right", "punishment", "tax"], answer: 1, why: "Freedom of expression is a fundamental right, subject to lawful limits." },
    { year: 2023, q: "What is the purpose of voting in an election?", options: ["To choose representatives", "To avoid laws", "To appoint every judge", "To stop public services"], answer: 0, why: "Voting allows eligible citizens to choose people to represent them." },
    { year: 2024, q: "Which action shows respect for national symbols?", options: ["Damaging the flag", "Treating the flag with care", "Using the anthem as a joke", "Ignoring public ceremonies"], answer: 1, why: "Treating national symbols respectfully helps show civic pride and respect." },
    { year: 2025, q: "Bribery is harmful because it ____.", options: ["promotes fairness", "weakens trust and justice", "improves equal treatment", "encourages honesty"], answer: 1, why: "Bribery undermines fairness, public trust and the proper application of rules." },
    { year: 2026, q: "Which group is responsible for making laws in a democracy?", options: ["The legislature", "The national team", "The market union", "The press club"], answer: 0, why: "The legislature debates and makes laws, while other branches have different roles." }
  ],
  "Social Studies": [
    { year: 2020, q: "A family made up of parents and their children is commonly called a ____ family.", options: ["nuclear", "extended", "school", "work"], answer: 0, why: "A nuclear family commonly consists of parent(s) and their children." },
    { year: 2021, q: "Which is a natural feature of the environment?", options: ["Bridge", "Hill", "Railway", "Factory"], answer: 1, why: "A hill is a natural landform; the other options are built by people." },
    { year: 2022, q: "The movement of people from one place to another to live is called ____.", options: ["migration", "irrigation", "recreation", "rotation"], answer: 0, why: "Migration is the movement of people from one place or region to another." },
    { year: 2023, q: "Which action helps keep a community environment clean?", options: ["Dumping refuse in drains", "Sorting and disposing of waste properly", "Burning plastic in the street", "Blocking gutters"], answer: 1, why: "Proper waste disposal reduces pollution and helps prevent blocked drains." },
    { year: 2024, q: "A person who buys goods or services is a ____.", options: ["producer", "consumer", "manufacturer only", "farmer only"], answer: 1, why: "A consumer is someone who uses or buys goods and services." },
    { year: 2025, q: "Which is an example of cooperation in a community?", options: ["Neighbours working together to clean a street", "Hiding shared tools", "Refusing to help during an emergency", "Damaging a public tap"], answer: 0, why: "Working together on a shared task is cooperation." },
    { year: 2026, q: "A map key or legend explains the ____ used on a map.", options: ["symbols", "weather", "stories", "population only"], answer: 0, why: "A map key explains what the map's symbols and colours represent." }
  ],
  "Computer Science": [
    { year: 2020, q: "Which part of a computer is often called its brain?", options: ["Keyboard", "CPU", "Monitor", "Mouse"], answer: 1, why: "The central processing unit (CPU) processes instructions and controls operations." },
    { year: 2021, q: "Which device is used to enter text into a computer?", options: ["Printer", "Keyboard", "Speaker", "Monitor"], answer: 1, why: "A keyboard is an input device used to enter text and commands." },
    { year: 2022, q: "Which of these is an example of an operating system?", options: ["Windows", "Keyboard", "Flash drive", "Web camera"], answer: 0, why: "Windows is system software that manages computer hardware and applications." },
    { year: 2023, q: "What does a web browser help you do?", options: ["Visit and view websites", "Print without a printer", "Power a computer", "Repair a broken screen"], answer: 0, why: "A web browser is software for accessing and viewing websites." },
    { year: 2024, q: "Which password is the safest choice?", options: ["123456", "password", "A long, unique mix of words and characters", "Your first name"], answer: 2, why: "Long, unique passwords are harder to guess. Do not reuse them across important accounts." },
    { year: 2025, q: "In a spreadsheet, the box where a row and column meet is called a ____.", options: ["slide", "cell", "folder", "pixel"], answer: 1, why: "A spreadsheet cell is the intersection of a row and a column." },
    { year: 2026, q: "Which action is safest when an unexpected message asks for your password?", options: ["Reply with the password", "Click every link", "Do not share it and verify the sender", "Forward it to everyone"], answer: 2, why: "Never send a password in response to an unexpected request. Verify through a trusted channel." }
  ]
};

const questionBank = window.practiceQuestions;
if (!questionBank) {
  throw new Error("The practice question bank did not load.");
}

Object.keys(subjects).forEach((subject) => {
  const questions = questionBank[subject];
  if (!Array.isArray(questions) || questions.length !== 60) {
    throw new Error(`${subject} must have exactly 60 practice questions.`);
  }
  const hasInvalidQuestion = questions.some((question) =>
    !question ||
    typeof question.q !== "string" ||
    !question.q.trim() ||
    !Array.isArray(question.options) ||
    question.options.length !== 4 ||
    !question.options.every((option) => typeof option === "string" && option.trim()) ||
    !Number.isInteger(question.answer) ||
    question.answer < 0 ||
    question.answer > 3 ||
    typeof question.why !== "string" ||
    !question.why.trim()
  );
  if (hasInvalidQuestion) {
    throw new Error(`${subject} contains an invalid question.`);
  }
  subjects[subject] = questions;
});

const subjectSelect = document.querySelector("#subject-select");
const yearSelect = document.querySelector("#year-select");
const startButton = document.querySelector("#start-button");
const countLabel = document.querySelector("#question-count");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const emptyState = document.querySelector("#empty-state");
const questionArea = document.querySelector("#question-area");
const quizSubject = document.querySelector("#quiz-subject");
const progressText = document.querySelector("#progress-text");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const finishButton = document.querySelector("#finish-button");

let questionSet = [];
let currentIndex = 0;
let answers = [];
let submitted = false;

function initializePicker() {
  Object.keys(subjects).forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.append(option);
  });

  for (let year = 2020; year <= 2026; year += 1) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearSelect.append(option);
  }
  updateQuestionCount();
}

function getSelectedQuestions() {
  const subject = subjectSelect.value;
  return subjects[subject] || [];
}

function updateQuestionCount() {
  const amount = getSelectedQuestions().length;
  countLabel.textContent = amount === 1 ? "1 question ready" : `${amount} questions ready`;
  startButton.disabled = amount === 0;
}

function renderQuestion() {
  const question = questionSet[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questionSet.length) * 100);
  quizSubject.textContent = `${subjectSelect.value} · ${yearSelect.value} practice set`;
  progressText.textContent = `Question ${currentIndex + 1} of ${questionSet.length}`;
  progressFill.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(progress));
  questionArea.replaceChildren();

  const number = document.createElement("p");
  number.className = "question-number";
  number.textContent = `QUESTION ${String(currentIndex + 1).padStart(2, "0")}`;
  const prompt = document.createElement("h3");
  prompt.className = "question-text";
  prompt.textContent = question.q;
  const options = document.createElement("div");
  options.className = "options";
  options.setAttribute("role", "group");
  options.setAttribute("aria-label", "Answer choices");

  question.options.forEach((text, optionIndex) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "option";
    option.setAttribute("aria-pressed", String(answers[currentIndex] === optionIndex));
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + optionIndex);
    const label = document.createElement("span");
    label.textContent = text;
    option.append(letter, label);
    if (answers[currentIndex] === optionIndex) option.classList.add("selected");
    if (submitted && optionIndex === question.answer) option.classList.add("correct");
    if (submitted && answers[currentIndex] === optionIndex && optionIndex !== question.answer) option.classList.add("incorrect");
    option.disabled = submitted;
    option.addEventListener("click", () => {
      answers[currentIndex] = optionIndex;
      renderQuestion();
    });
    options.append(option);
  });

  questionArea.append(number, prompt, options);
  if (submitted) {
    const feedback = document.createElement("p");
    const isCorrect = answers[currentIndex] === question.answer;
    feedback.className = `feedback${isCorrect ? "" : " is-wrong"}`;
    feedback.textContent = `${isCorrect ? "Correct." : `Not quite. The answer is ${String.fromCharCode(65 + question.answer)}. `}${question.why}`;
    questionArea.append(feedback);
  }

  previousButton.disabled = currentIndex === 0;
  nextButton.hidden = currentIndex === questionSet.length - 1;
  finishButton.hidden = currentIndex !== questionSet.length - 1 || submitted;
}

function startPractice() {
  questionSet = getSelectedQuestions();
  if (!questionSet.length) return;
  currentIndex = 0;
  answers = new Array(questionSet.length).fill(null);
  submitted = false;
  resultPanel.hidden = true;
  emptyState.hidden = true;
  quizPanel.hidden = false;
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function finishPractice() {
  if (answers.some((answer) => answer === null)) {
    const firstUnanswered = answers.indexOf(null);
    currentIndex = firstUnanswered;
    renderQuestion();
    progressText.textContent = `Answer every question first · ${firstUnanswered + 1} of ${questionSet.length}`;
    return;
  }
  submitted = true;
  const score = answers.reduce((total, answer, index) => total + (answer === questionSet[index].answer ? 1 : 0), 0);
  renderQuestion();
  resultPanel.innerHTML = `<span class="result-score">${score}/${questionSet.length}</span><h3>Practice complete</h3><p>Review your answers above and notice what you know well.</p><button class="button button-primary" id="try-again-button" type="button">Try this set again</button>`;
  resultPanel.hidden = false;
  finishButton.hidden = true;
  resultPanel.querySelector("#try-again-button").addEventListener("click", startPractice);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

subjectSelect.addEventListener("change", updateQuestionCount);
yearSelect.addEventListener("change", updateQuestionCount);
startButton.addEventListener("click", startPractice);
previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener("click", () => {
  if (currentIndex < questionSet.length - 1) {
    currentIndex += 1;
    renderQuestion();
  }
});
finishButton.addEventListener("click", finishPractice);

initializePicker();
