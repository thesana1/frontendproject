import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import quizData from './data/quizData';
import './styles/main.css';

/**
 * App Component — Root of the Frontend Quiz Application
 *
 * Manages the 3 main screens and all top-level state:
 *   - "start"  → StartScreen   (pick a subject)
 *   - "quiz"   → QuizScreen    (answer questions)
 *   - "result" → ResultScreen  (see your score)
 *
 * Also handles the light / dark theme toggle.
 */
function App() {
  // ── Screen state ──
  // Possible values: 'start' | 'quiz' | 'result'
  const [screen, setScreen] = useState('start');

  // ── Selected subject index (points into quizData array) ──
  const [subjectIndex, setSubjectIndex] = useState(null);

  // ── Current question index within the selected subject ──
  const [questionIndex, setQuestionIndex] = useState(0);

  // ── Number of correct answers so far ──
  const [score, setScore] = useState(0);

  // ── Dark mode flag ──
  const [darkMode, setDarkMode] = useState(false);

  // Current subject object (or null on start screen)
  const subject = subjectIndex !== null ? quizData[subjectIndex] : null;
  const totalQuestions = subject ? subject.questions.length : 0;

  // ── Theme toggle handler ──
  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  // ── Start quiz for a given subject ──
  function handleSelectSubject(index) {
    setSubjectIndex(index);
    setQuestionIndex(0);
    setScore(0);
    setScreen('quiz');
  }

  // ── Record the result of a submitted answer ──
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  }

  // ── Move to the next question (or results if done) ──
  function handleNext() {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= totalQuestions) {
      setScreen('result');
    } else {
      setQuestionIndex(nextIndex);
    }
  }

  // ── Restart the same subject quiz from question 1 ──
  function handlePlayAgain() {
    setQuestionIndex(0);
    setScore(0);
    setScreen('quiz');
  }

  // ── Go back to subject selection ──
  function handleRestart() {
    setSubjectIndex(null);
    setQuestionIndex(0);
    setScore(0);
    setScreen('start');
  }

  return (
    <div
      className="app"
      data-theme={darkMode ? 'dark' : 'light'}
      role="main"
    >
      {/* ── Header ── */}
      <header className="header">
        {/* Subject name shown during quiz & result */}
        {subject ? (
          <div className="header-subject" aria-live="polite">
            <span
              className="subject-icon"
              style={{ backgroundColor: subject.iconBg }}
              aria-hidden="true"
            >
              {subject.icon}
            </span>
            {subject.title}
          </div>
        ) : (
          <div aria-hidden="true" />
        )}

        {/* Theme toggle button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={darkMode}
        >
          {/* Sun icon */}
          <span className="theme-icon" aria-hidden="true">☀️</span>

          {/* Toggle track + thumb */}
          <span className="toggle-track" aria-hidden="true">
            <span className="toggle-thumb" />
          </span>

          {/* Moon icon */}
          <span className="theme-icon" aria-hidden="true">🌙</span>
        </button>
      </header>

      {/* ── Main Content Area ── */}
      <main className="main-content">
        {screen === 'start' && (
          <StartScreen
            subjects={quizData}
            onSelectSubject={handleSelectSubject}
          />
        )}

        {screen === 'quiz' && subject && (
          <QuizScreen
            key={questionIndex} /* re-mount on each new question for clean state */
            subject={subject}
            currentIndex={questionIndex}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {screen === 'result' && subject && (
          <ResultScreen
            subject={subject}
            score={score}
            totalQuestions={totalQuestions}
            onPlayAgain={handlePlayAgain}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
}

export default App;
