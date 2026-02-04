# Trivia Game

Trivia game application built with React and TypeScript.

The app allows users to configure the quiz (category and difficulty), answer timed questions, track their score in real time, and see the final result at the end of the game.

Questions are fetched from a public trivia API and the game includes a countdown timer for each question.

---

## Features

- Select quiz category and difficulty
- Fetch trivia questions from an external API
- Multiple-choice questions with instant feedback
- Countdown timer per question
- Score tracking
- Final results screen
- Loading and error states
- Clean and modular component structure
- Responsive layout

---

## Tech Stack

- React + TypeScript
- useState, useEffect
- Custom async data fetching
- Conditional rendering
- CSS3 (Flexbox)
- External REST API

---

## Quick Start

```bash
git clone https://github.com/your-username/trivia-game
cd trivia-game
npm install
npm run dev
Live Demo
👉 https://your-trivia-game.netlify.app

Preview


Project Structure
src/
├─ components/
│  ├─ QuestionCard.tsx
│  ├─ FormOptions.tsx
│  └─ Finished.tsx
├─ hooks/
│  └─ fetchTrivia.ts
├─ types/
│  ├─ Question.ts
│  └─ UserAnswer.ts
├─ App.tsx
└─ main.tsx
```
