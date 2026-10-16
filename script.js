// Elements
const startButtons = document.querySelectorAll(".start-button");

const addWorkoutButton = document.querySelector(".add-workout-button");
const workoutForm = document.querySelector(".workout-form");

const createWorkoutButton = document.querySelector(".create-workout-button");


const generatedWorkout = document.querySelector(".generated-workout");
const generatedDetails = document.querySelector(".generated-workout-details");

const startGeneratedWorkout = document.querySelector(".start-generated-workout");
const workoutScreen = document.querySelector(".workout-screen");

const exerciseCards = document.querySelectorAll(".exercise-card");
const nextExerciseButton = document.querySelector(".next-exercise-button");

const resetWorkoutButton = document.querySelector(".reset-workout-button");
let currentExercise = 0;
const generatedTitle = document.querySelector(".generated-workout-title");
const reviewScreen = document.querySelector(".review-screen");
const saveFlowButton = document.querySelector(".save-flow-button");
const flowSavedScreen = document.querySelector(".flow-saved-screen");
const savedFlowName = document.querySelector("#saved-flow-name");
const flowNameInput = document.querySelector("#flow-name");
const reviewWorkoutButton = document.querySelector(
  ".review-workout-button"
);

const reviewExerciseList = document.querySelector("#review-exercise-list");
const reviewMoveCount = document.querySelector("#review-move-count");
const reviewRest = document.querySelector("#review-rest");
const reviewTotalTime = document.querySelector("#review-total-time");
const createWorkoutHeader = document.querySelector("main > h3");
const exerciseChoiceButtons = document.querySelectorAll(
  ".exercise-choice"
);
const workoutTitles = {
  Pilates: "Core & control",
  Yoga: "Gentle flow",
  Mobility: "Move & release"
};
const workoutSuggestions = {
  Pilates: {
    Relaxing: ["Cat-cow", "Bridge", "Child's pose"],
    Intense: ["Hundred", "Roll up", "Plank"]
  },

  Yoga: {
    Relaxing: ["Child's pose", "Cat-cow", "Downward dog"],
    Intense: ["Downward dog", "Plank", "Side plank"]
  },

  Mobility: {
    Relaxing: ["Cat-cow", "Child's pose", "Bridge"],
    Intense: ["Roll up", "Downward dog", "Side plank"]
  }
};
const alternativeWorkoutSuggestions = {
  Pilates: {
    Relaxing: ["Cat-cow", "Bridge", "Hundred"],
    Intense: ["Bridge", "Plank", "Side plank"]
  },

  Yoga: {
    Relaxing: ["Child's pose", "Downward dog", "Bridge"],
    Intense: ["Cat-cow", "Plank", "Side plank"]
  },

  Mobility: {
    Relaxing: ["Child's pose", "Downward dog", "Side plank"],
    Intense: ["Hundred", "Plank", "Side plank"]
  }
};
const workoutComplete = document.querySelector(".workout-complete");
const suggestedMovesScreen = document.querySelector(
  ".suggested-moves-screen"
);
const durationScreen = document.querySelector(".duration-screen");
const durationExerciseList = document.querySelector(
  ".duration-exercise-list"
);
const continueToDurationsButton = document.querySelector(
  ".continue-to-durations-button"
);
const suggestDifferentButton = document.querySelector(
  ".suggest-different-button"
);

let showingAlternativeSuggestions = false;
function showScreen(screenToShow) {
  const screens = [
  workoutForm,
  suggestedMovesScreen,
  durationScreen,
  reviewScreen,
  flowSavedScreen,
  generatedWorkout,
  workoutScreen,
  workoutComplete
];

  screens.forEach(function (screen) {
    if (screen) {
screen.style.display = screen === screenToShow
  ? (screen === workoutComplete ? "flex" : "block")
  : "none";    }
  });
  if (createWorkoutHeader) {
  createWorkoutHeader.style.display =
    screenToShow === flowSavedScreen ? "none" : "block";
}
}
// Add or remove suggested exercises
exerciseChoiceButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    const isSelected = button.getAttribute("aria-pressed") === "true";
    const newState = !isSelected;

    button.setAttribute("aria-pressed", String(newState));

    const status = button.querySelector(".exercise-choice-status");

    status.textContent = newState ? "✓ Added" : "+ Add";
  });
});
// Existing workout buttons
startButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    const card = button.closest(".workout-card");
    const message = card.querySelector(".workout-message");

    message.textContent = "Your workout is ready to begin!";
  });
});


// Add new workout
if (addWorkoutButton) {
  addWorkoutButton.addEventListener("click", function () {
    showScreen(workoutForm);
    generatedDetails.textContent = "";
  });
}


// Create workout
// Suggest moves
if (createWorkoutButton) {
  createWorkoutButton.addEventListener("click", function () {

    const selectedFocus = document.querySelector(
      'input[name="focus"]:checked'
    );

    const selectedIntensity = document.querySelector(
      'input[name="intensity"]:checked'
    );

    const focus = selectedFocus ? selectedFocus.value : "Pilates";
    const intensity = selectedIntensity
      ? selectedIntensity.value
      : "Relaxing";

    generatedTitle.textContent =
      workoutTitles[focus] || "Your workout is ready";
      showingAlternativeSuggestions = false;
// Get the suggested exercises for this combination
const suggestedExercises = workoutSuggestions[focus][intensity];

// Update the selected state of every exercise card
exerciseChoiceButtons.forEach(function (button) {
  const exerciseName = button.querySelector("span").textContent.trim();
  const isSuggested = suggestedExercises.includes(exerciseName);

  button.setAttribute("aria-pressed", String(isSuggested));

  const status = button.querySelector(".exercise-choice-status");
  status.textContent = isSuggested ? "✓ Added" : "+ Add";
});
    showScreen(suggestedMovesScreen);

    generatedDetails.textContent = `${focus} · ${intensity}`;
  });
}
// Suggest a different set of moves
if (suggestDifferentButton) {
  suggestDifferentButton.addEventListener("click", function () {

    const selectedFocus = document.querySelector(
      'input[name="focus"]:checked'
    );

    const selectedIntensity = document.querySelector(
      'input[name="intensity"]:checked'
    );

    const focus = selectedFocus ? selectedFocus.value : "Pilates";
    const intensity = selectedIntensity
      ? selectedIntensity.value
      : "Relaxing";

    showingAlternativeSuggestions = !showingAlternativeSuggestions;

    const suggestedExercises = showingAlternativeSuggestions
      ? alternativeWorkoutSuggestions[focus][intensity]
      : workoutSuggestions[focus][intensity];

    exerciseChoiceButtons.forEach(function (button) {
      const exerciseName = button.querySelector("span").textContent.trim();
      const isSuggested = suggestedExercises.includes(exerciseName);

      button.setAttribute("aria-pressed", String(isSuggested));

      const status = button.querySelector(".exercise-choice-status");
      status.textContent = isSuggested ? "✓ Added" : "+ Add";
    });

  });
}
// Continue to customise your flow
if (continueToDurationsButton) {
  continueToDurationsButton.addEventListener("click", function () {

    // Find the exercises the user has selected
    const selectedExercises = Array.from(exerciseChoiceButtons).filter(
      function (button) {
        return button.getAttribute("aria-pressed") === "true";
      }
    );

    // Clear the list before adding the selected exercises
    durationExerciseList.innerHTML = "";

    selectedExercises.forEach(function (button) {
      const exerciseName = button.querySelector("span").textContent.trim();

      const exerciseRow = document.createElement("div");
      exerciseRow.className = "duration-exercise";

      const exerciseLabel = document.createElement("label");
      exerciseLabel.textContent = exerciseName;

      const durationSelect = document.createElement("select");
      durationSelect.className = "exercise-duration";
      durationSelect.setAttribute(
        "aria-label",
        `${exerciseName} duration`
      );

      ["30", "40", "60"].forEach(function (seconds) {
        const option = document.createElement("option");
        option.value = seconds;
        option.textContent = `${seconds} seconds`;

        if (seconds === "40") {
          option.selected = true;
        }

        durationSelect.appendChild(option);
      });

      exerciseRow.appendChild(exerciseLabel);
      exerciseRow.appendChild(durationSelect);

      durationExerciseList.appendChild(exerciseRow);
    });

    showScreen(durationScreen);
  });
}
// Review the customised workout
if (reviewWorkoutButton) {
  reviewWorkoutButton.addEventListener("click", function () {

    const durationRows = Array.from(
      durationExerciseList.querySelectorAll(".duration-exercise")
    );

    const restDurationSelect = document.querySelector("#rest-duration");
    const restSeconds = Number(restDurationSelect.value);

    // Clear any previous summary
    reviewExerciseList.innerHTML = "";

    let exerciseSeconds = 0;

    // Add each selected exercise to the review
    durationRows.forEach(function (row, index) {
      const exerciseName = row.querySelector("label").textContent;
      const duration = Number(
        row.querySelector(".exercise-duration").value
      );

      exerciseSeconds += duration;

      const reviewRow = document.createElement("p");
      reviewRow.textContent =
        `${index + 1}. ${exerciseName} · ${duration} seconds`;

      reviewExerciseList.appendChild(reviewRow);
    });

    // Calculate the number of moves and total time
    reviewMoveCount.textContent = String(durationRows.length);
    reviewRest.textContent = `${restSeconds} seconds`;

    const totalSeconds =
      exerciseSeconds + restSeconds * Math.max(0, durationRows.length - 1);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes === 0) {
      reviewTotalTime.textContent = `${seconds} sec`;
    } else if (seconds === 0) {
      reviewTotalTime.textContent = `${minutes} min`;
    } else {
      reviewTotalTime.textContent = `${minutes} min ${seconds} sec`;
    }

    showScreen(reviewScreen);
  });
}
// Save the customised flow
if (saveFlowButton) {
  saveFlowButton.addEventListener("click", function () {
    const name = flowNameInput.value.trim() || "Your flow";

    savedFlowName.textContent = name;

    showScreen(flowSavedScreen);
  });
}
// Next exercise / Finish workout
if (nextExerciseButton) {
  nextExerciseButton.addEventListener("click", function () {

    if (currentExercise === 0) {
      exerciseCards[0].style.display = "none";
      exerciseCards[1].style.display = "block";

      nextExerciseButton.textContent = "Finish workout";

      currentExercise = 1;

    } else {
     showScreen(workoutComplete);

      exerciseCards[0].style.display = "block";
      exerciseCards[1].style.display = "none";

      nextExerciseButton.textContent = "Next exercise";

      currentExercise = 0;
    }
  });
}

// End workout / reset
if (resetWorkoutButton) {
  resetWorkoutButton.addEventListener("click", function () {

    showScreen(workoutForm);

    exerciseCards[0].style.display = "block";
    exerciseCards[1].style.display = "none";
  });
}