const questions = [
  // Track 1s
  "IMPLICIT DEMAND FOR PROOF",   // Twenty One Pilots
  "ODE TO SLEEP",                // Vessel
  "HEAVYDIRTYSOUL",              // Blurryface
  "JUMPSUIT",                    // Trench
  "GOOD DAY",                    // Scaled and Icy
  "OVERCOMPENSATE",              // Clancy

  // Track 2s
  "FALL AWAY",                   // Twenty One Pilots
  "HOLDING ON TO YOU",           // Vessel
  "STRESSED OUT",                // Blurryface
  "LEVITATE",                    // Trench
  "CHOKER",                      // Scaled and Icy
  "NEXT SEMESTER",               // Clancy

  // Track 3s
  "THE PANTALOON",               // Twenty One Pilots
  "MIGRAINE",                    // Vessel
  "RIDE",                        // Blurryface
  "MORPH",                       // Trench
  "SHY AWAY",                    // Scaled and Icy
  "BACKSLIDE",                   // Clancy

  // Track 4s
  "ADDICT WITH A PEN",           // Twenty One Pilots
  "HOUSE OF GOLD",               // Vessel
  "FAIRLY LOCAL",                // Blurryface
  "MY BLOOD",                    // Trench
  "THE OUTSIDE",                 // Scaled and Icy
  "MIDWEST INDIGO",              // Clancy

  // Track 5s
  "FRIEND, PLEASE",              // Twenty One Pilots
  "CAR RADIO",                   // Vessel
  "TEAR IN MY HEART",            // Blurryface
  "CHLORINE",                    // Trench
  "SATURDAY",                    // Scaled and Icy
  "ROUTINES IN THE NIGHT",       // Clancy

  // Track 6s
  "MARCH TO THE SEA",            // Twenty One Pilots
  "SEMI-AUTOMATIC",              // Vessel
  "LANE BOY",                    // Blurryface
  "SMITHEREENS",                 // Trench
  "NEVER TAKE IT",               // Scaled and Icy
  "VIGNETTE",                    // Clancy

  // Track 7s
  "JOHNNY BOY",                  // Twenty One Pilots
  "SCREEN",                      // Vessel
  "THE JUDGE",                   // Blurryface
  "NEON GRAVESTONES",            // Trench
  "MULBERRY STREET",             // Scaled and Icy
  "THE CRAVING (JENNA’S VERSION)", // Clancy

  // Track 8s
  "OH MS BELIEVER",              // Twenty One Pilots
  "THE RUN AND GO",              // Vessel
  "DOUBT",                       // Blurryface
  "THE HYPE",                    // Trench
  "FORMIDABLE",                  // Scaled and Icy
  "LAVISH",                      // Clancy

  // Track 9s
  "AIR CATCHER",                 // Twenty One Pilots
  "FAKE YOU OUT",                // Vessel
  "POLARIZE",                    // Blurryface
  "NICO AND THE NINERS",         // Trench
  "BOUNCE MAN",                  // Scaled and Icy
  "NAVIGATING",                  // Clancy

  // Track 10s
  "TRAPDOOR",                    // Twenty One Pilots
  "GUNS FOR HANDS",              // Vessel
  "WE DON’T BELIEVE WHAT’S ON TV", // Blurryface
  "CUT MY LIP",                  // Trench
  "NO CHANCES",                  // Scaled and Icy
  "SNAP BACK",                   // Clancy

  // Track 11s
  "A CAR, A TORCH, A DEATH",     // Twenty One Pilots
  "TREES",                       // Vessel
  "GONER",                       // Blurryface
  "BANDITO",                     // Trench
  "REDECORATE",                  // Scaled and Icy
  "OLDIES STATION",              // Clancy

  // Track 12s
  "TAXI CAB",                    // Twenty One Pilots
  "TRUCE",                       // Vessel
  // (No Track 12 on Blurryface)
  "PET CHEETAH",                 // Trench
  // (No Track 12 on Scaled and Icy)
  "AT THE RISK OF FEELING DUMB", // Clancy

  // Track 13s
  "BEFORE YOU START YOUR DAY",   // Twenty One Pilots
  // (No Track 13 on Vessel)
  // (No Track 13 on Blurryface)
  "LEAVE THE CITY",              // Trench
  // (No Track 13 on Scaled and Icy)
  "PALADIN STRAIT"               // Clancy
];



const groupMap = {
  0: "group1",  // Implicit Demand for Proof
  1: "group2",  // Ode to Sleep
  2: "group3",  // Heavydirtysoul
  3: "group4",  // Jumpsuit
  4: "group5",  // Good Day
  5: "group6",  // Overcompensate

  6: "group1",  // Fall Away
  7: "group2",  // Holding on to You
  8: "group3",  // Stressed Out
  9: "group4",  // Levitate
  10: "group5",  // Choker
  11: "group6",  // Next Semester

  12: "group1",  // The Pantaloon
  13: "group2",  // Migraine
  14: "group3",  // Ride
  15: "group4",  // Morph
  16: "group5",  // Shy Away
  17: "group6",  // Backslide

  18: "group1",  // Addict with a Pen
  19: "group2",  // House of Gold
  20: "group3",  // Fairly Local
  21: "group4",  // My Blood
  22: "group5",  // The Outside
  23: "group6",  // Midwest Indigo

  24: "group1",  // Friend, Please
  25: "group2",  // Car Radio
  26: "group3",  // Tear in My Heart
  27: "group4",  // Chlorine
  28: "group5",  // Saturday
  29: "group6",  // Routines in the Night

  30: "group1",  // March to the Sea
  31: "group2",  // Semi-Automatic
  32: "group3",  // Lane Boy
  33: "group4",  // Smithereens
  34: "group5",  // Never Take It
  35: "group6",  // Vignette

  36: "group1",  // Johnny Boy
  37: "group2",  // Screen
  38: "group3",  // The Judge
  39: "group4",  // Neon Gravestones
  40: "group5",  // Mulberry Street
  41: "group6",  // The Craving (Jenna’s Version)

  42: "group1",  // Oh Ms Believer
  43: "group2",  // The Run and Go
  44: "group3",  // Doubt
  45: "group4",  // The Hype
  46: "group5",  // Formidable
  47: "group6",  // Lavish

  48: "group1",  // Air Catcher
  49: "group2",  // Fake You Out
  50: "group3",  // Polarize
  51: "group4",  // Nico and the Niners
  52: "group5",  // Bounce Man
  53: "group6",  // Navigating

  54: "group1",  // Trapdoor
  55: "group2",  // Guns for Hands
  56: "group3",  // We Don’t Believe What’s on TV
  57: "group4",  // Cut My Lip
  58: "group5",  // No Chances
  59: "group6",  // Snap Back

  60: "group1",  // A Car, a Torch, a Death
  61: "group2",  // Trees
  62: "group3",  // Goner
  63: "group4",  // Bandito
  64: "group5",  // Redecorate
  65: "group6",  // Oldies Station

  66: "group1",  // Taxi Cab
  67: "group2",  // Truce
  68: "group4",  // Pet Cheetah
  69: "group6",  // At the Risk of Feeling Dumb

  70: "group1",  // Before You Start Your Day
  71: "group4",  // Leave the City
  72: "group6"   // Paladin Strait
};

const groupTitles = {
  group1: "Twenty One Pilots",
  group2: "Vessel",
  group3: "Blurryface",
  group4: "Trench",
  group5: "Scaled and Icy",
  group6: "Clancy"
};

let currentQuestionIndex = 0;
let scores = [];

function start() {
  document.getElementById("title-screen").style.display = "none";

  currentQuestionIndex = 0;
  scores = [];
  showIntro();
}

function startFromSeed() {
  const seedValue = document.getElementById("seedInput").value;
  scores = seedValue.split(":").map(Number);
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 10 || isNaN(scores[i])) {
      alert("Invalid code");
      return;
    }
  }
  document.getElementById("title-screen").style.display = "none";

  currentQuestionIndex = scores.length;
  showQuestion();
}

function showIntro() {
  document.getElementById("intro-container").style.display = "block";
}

function showQuestion() {
  document.getElementById("intro-container").style.display = "none";

  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const questionText = questions[currentQuestionIndex];

  const questionElem = document.createElement("p");
  questionElem.textContent = questionText;

  const rowDiv = document.createElement("div");
  rowDiv.style.display = "flex";
  rowDiv.style.justifyContent = "center";
  rowDiv.style.gap = "1rem";  // adds spacing between elements

  // Create dropdown for 1–10
  const selectElem = document.createElement("select");
  selectElem.id = "answerInput";

  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectElem.appendChild(option);
  }

// Pre-fill selection if already answered
  if (scores[currentQuestionIndex] !== undefined) {
    selectElem.value = scores[currentQuestionIndex];
  }

  container.appendChild(questionElem);
  container.appendChild(rowDiv);

// Back button
  if (currentQuestionIndex > 0) {
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.onclick = goBack;
    rowDiv.appendChild(backBtn);
  }

  rowDiv.appendChild(selectElem);

// Next/Finish button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
  nextBtn.onclick = saveAndNext;
  rowDiv.appendChild(nextBtn);

  const saveBtn = document.createElement("button");
  saveBtn.id = "save-button";
  saveBtn.textContent = "Save and Quit";
  saveBtn.onclick = generateCode;
  container.appendChild(saveBtn);

}

function saveAndNext() {
  const inputValue = document.getElementById("answerInput").value;
  const intValue = parseInt(inputValue);

  if (isNaN(intValue)) {
    alert("Please select a number.");
    return;
  }

  scores[currentQuestionIndex] = intValue;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function goBack() {
  // Save current selection before going back
  const inputValue = document.getElementById("answerInput").value;
  const intValue = parseInt(inputValue);
  if (!isNaN(intValue)) {
    scores[currentQuestionIndex] = intValue;
  }

  currentQuestionIndex--;
  showQuestion();
}

function generateCode() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "<p id='save-message'>Save this code and enter it next time to resume</p>";

  const code = scores.join(":");
  console.log(code);

  const codeTxt = document.createElement("p");
  codeTxt.id = "save-message";
  codeTxt.textContent = code;
  container.appendChild(codeTxt);
}

function finishQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "<h3>Results:</h3>";

  // 🧠 Group scores
  const groupScores = {}; // { groupName: [scores] }

  scores.forEach((score, index) => {
    const group = groupMap[index];
    if (!groupScores[group]) {
      groupScores[group] = [];
    }
    groupScores[group].push(score);
  });

  const groupAverages = [];

  for (const group in groupScores) {
    const values = groupScores[group];
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const title = groupTitles[group] || group;

    groupAverages.push({ title, average: avg });
  }

// 📊 Step 2: Sort by average descending
  groupAverages.sort((a, b) => b.average - a.average);

// 🖥️ Step 3: Display sorted results
  const groupList = document.createElement("ul");
  groupAverages.forEach(group => {
    const item = document.createElement("li");
    item.textContent = `${group.title}: ${group.average.toFixed(2)}`;
    groupList.appendChild(item);
  });
  container.appendChild(groupList);
}

