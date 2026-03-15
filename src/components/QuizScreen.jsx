import React, { useState } from 'react';

// Labels for the 4 answer options
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

/**
 * QuizScreen Component
 *
 * Displays the current question, 4 answer options, a progress bar,
 * and the Submit / Next Question button.
 *
 * Props:
 *   subject        - the current subject object { title, icon, iconBg, color, questions }
 *   currentIndex   - index of the current question (0-based)
 *   totalQuestions - total number of questions
 *   onAnswer(isCorrect) - called after user submits an answer
 *   onNext()       - called when user moves to next question
 */
function QuizScreen({ subject, currentIndex, totalQuestions, onAnswer, onNext }) {
  const question = subject.questions[currentIndex];

  // Which option the user has selected (null = none selected yet)
  const [selected, setSelected] = useState(null);

  // Whether the user has submitted the current answer
  const [submitted, setSubmitted] = useState(false);

  // Whether to show the "please select an answer" error
  const [showError, setShowError] = useState(false);

  // Progress percentage for the progress bar
  const progressPercent = ((currentIndex) / totalQuestions) * 100;

  // ── Handle selecting an option ──
  function handleSelect(option) {
    // Can't change selection after submitting
    if (submitted) return;
    setSelected(option);
    setShowError(false);
  }

  // ── Handle submitting the current answer ──
  function handleSubmit() {
    if (selected === null) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
    onAnswer(selected === question.answer);
  }

  // ── Handle moving to the next question ──
  function handleNext() {
    setSelected(null);
    setSubmitted(false);
    setShowError(false);
    onNext();
  }

  // ── Determine the visual state of each option button ──
  function getOptionClass(option) {
    if (!submitted) {
      return selected === option ? 'option-btn selected' : 'option-btn';
    }
    if (option === question.answer) return 'option-btn correct';
    if (option === selected && option !== question.answer) return 'option-btn incorrect';
    return 'option-btn';
  }

  // ── Determine the result icon for each option after submit ──
  function getOptionIcon(option) {
    if (!submitted) return null;
    if (option === question.answer) return '✓';
    if (option === selected && option !== question.answer) return '✕';
    return null;
  }

  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <section className="quiz-screen fade-in" aria-label="Quiz question">
      {/* ── Left Column: Question info ── */}
      <div className="quiz-left">
        <p className="question-meta" aria-live="polite">
          Question {currentIndex + 1} of {totalQuestions}
        </p>

        <h2 className="question-text">{question.question}</h2>

        {/* Spacer to push progress bar down */}
        <div style={{ flex: 1 }} />

        {/* Progress Bar */}
        <div className="progress-bar-wrapper" aria-label={`Progress: question ${currentIndex + 1} of ${totalQuestions}`}>
          <div className="progress-track" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={totalQuestions}>
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Right Column: Options + Submit button ── */}
      <div>
        <ul className="options-list" role="list" aria-label="Answer options">
          {question.options.map((option, i) => (
            <li key={option}>
              <button
                className={getOptionClass(option)}
                onClick={() => handleSelect(option)}
                disabled={submitted}
                aria-pressed={selected === option}
                aria-label={`Option ${OPTION_LABELS[i]}: ${option}`}
              >
                {/* Letter badge */}
                <span className="option-letter" aria-hidden="true">
                  {OPTION_LABELS[i]}
                </span>

                {/* Option text */}
                <span className="option-text">{option}</span>

                {/* Result icon (only shown after submitting) */}
                {getOptionIcon(option) && (
                  <span className="option-icon" aria-hidden="true">
                    {getOptionIcon(option) === '✓' ? '✅' : '❌'}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Submit / Next button */}
        {!submitted ? (
          <div style={{ marginTop: '24px' }}>
            <button
              className="btn-primary"
              onClick={handleSubmit}
              aria-label="Submit answer"
            >
              Submit Answer
            </button>

            {/* Error message — shown when user tries to submit without selecting */}
            {showError && (
              <p className="error-msg" role="alert" aria-live="assertive">
                <span aria-hidden="true">⚠️</span>
                Please select an answer
              </p>
            )}
          </div>
        ) : (
          <div style={{ marginTop: '24px' }}>
            <button
              className="btn-primary"
              onClick={handleNext}
              aria-label={isLastQuestion ? 'See your results' : 'Next question'}
            >
              {isLastQuestion ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuizScreen;
