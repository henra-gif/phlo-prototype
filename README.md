Phlo — Wellness Workout Builder

Phlo is a Pilates, yoga and mobility app concept that I designed and developed into an interactive web prototype. The project explores how someone could create a workout that suits their chosen movement style and energy level, then personalise it before saving.

Live prototype: (https://vercel.com/hendrikerahtz-2911/phlo-prototype)

About the project

Phlo began as a design concept in Figma. I used the existing visual direction as a starting point and built the workout-building experience with HTML, CSS and JavaScript. I also used Claude as a coding partner to help me understand code, explore implementation options and troubleshoot issues while making the final decisions and testing the changes myself.

What you can try

Choose a workout type: Pilates, Yoga or Mobility.

Choose an intensity: Relaxing or Intense.

See a set of suggested exercises based on those choices.

Add or remove individual exercises from the suggestion.

Request an alternative set of suggested exercises.

Set a duration for each selected exercise and choose a rest period.

Review the selected moves, move count, rest time and calculated total duration.

Name the flow and view a confirmation screen.

How the recommendation experience works

The recommendations are simulated using predefined rules and exercise lists. The prototype does not call a real AI model or use an AI backend. This made it possible to explore the user experience around recommendations, customisation and user control without building a production AI service.

The confirmation screen is also part of the prototype experience: the current version displays the confirmation but does not permanently store the custom workout or add it to a persistent “My Phlos” list.

Built with

HTML for page structure

CSS for styling and responsive layouts

JavaScript for screen changes, selections, recommendation rules, duration controls and review calculations

Figma for design and prototyping

Claude as an AI-assisted coding and debugging partner

GitHub for source-code hosting and version history

Vercel for deployment

Run locally

This is a static HTML, CSS and JavaScript project; no package installation or build step is required.

Download or clone this repository.

Open the project folder in Visual Studio Code.

Open index.html with the Live Server extension, or serve the folder using another local web server.

Use Create new workout to open the workout-building flow.

Opening the files through a local server is recommended for testing the experience consistently in a browser.

Project structure

phlo-prototype/
├── index.html
├── create-workout.html
├── styles.css
├── script.js
└── images/

What I explored

Translating a Figma concept into a working web prototype

Building interactive UI states with JavaScript

Using reusable functions to reduce repeated screen-switching logic

Creating responsive layouts and refining spacing for mobile

Using AI tools to support coding and debugging while reviewing and testing the suggested solutions

Designing a recommendation experience that keeps the user in control

Status

Phlo is a learning and portfolio prototype and is still a work in progress. Recommendations are predefined, and workout saving is currently simulated rather than persistent.
