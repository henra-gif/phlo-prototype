// Find the My Phlos card container
const workoutContainer = document.querySelector(".workout-container");

// Get the workouts saved in the browser
const savedFlows = JSON.parse(
  localStorage.getItem("phloSavedFlows") || "[]"
);

// Display each saved workout
if (workoutContainer) {
  savedFlows.forEach(function (flow) {

    // Create a card
    const card = document.createElement("section");
    card.className = "workout-card saved-workout-card";
// Add the workout thumbnail
const image = document.createElement("img");
image.src = "images/workout-am.png";
image.alt = "";
card.appendChild(image);
    // Add the workout name
    const title = document.createElement("h3");
    title.textContent = flow.name || "Your flow";

    // Calculate the total duration
    const exercises = flow.exercises || [];

    const exerciseSeconds = exercises.reduce(function (total, exercise) {
      return total + exercise.duration;
    }, 0);

    const restSeconds =
      (flow.restSeconds || 0) * Math.max(0, exercises.length - 1);

    const totalSeconds = exerciseSeconds + restSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let durationText;

    if (minutes === 0) {
      durationText = `${seconds} sec`;
    } else if (seconds === 0) {
      durationText = `${minutes} min`;
    } else {
      durationText = `${minutes} min ${seconds} sec`;
    }

    const summary = document.createElement("p");
summary.textContent =
  `${durationText} · ${exercises.length} exercises`;

   // Add the content to the card
card.appendChild(title);
card.appendChild(summary);

// Group the action buttons
const actions = document.createElement("div");
actions.className = "workout-actions";

// Start workout button
const startButton = document.createElement("button");
startButton.type = "button";
startButton.className = "start-button saved-flow-start";
startButton.textContent = "Start workout";

startButton.addEventListener("click", function () {
  localStorage.setItem("phloWorkoutToStart", JSON.stringify(flow));
  window.location.href = "create-workout.html?startSavedFlow=1";
});

actions.appendChild(startButton);

// Edit button
const editButton = document.createElement("button");
editButton.type = "button";
editButton.className = "edit-button";
editButton.textContent = "✎";
editButton.setAttribute("aria-label", `Edit ${flow.name}`);

actions.appendChild(editButton);

card.appendChild(actions);

// Add the saved workout to My Phlos
workoutContainer.appendChild(card);
  });
}