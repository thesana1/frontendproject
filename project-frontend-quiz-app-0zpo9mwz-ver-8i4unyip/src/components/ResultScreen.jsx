import React from 'react';

/**
 * ResultScreen Component
 *
 * Displays the final quiz score and options to play again or restart.
 *
 * Props:
 *   subject        - the subject object that was just completed
 *   score          - number of correct answers
 *   totalQuestions - total questions in the quiz
 *   onPlayAgain()  - resets the quiz for the same subject
 *   onRestart()    - goes back to the start screen to pick a new subject
 */
function ResultScreen({ subject, score, totalQuestions, onPlayAgain, onRestart }) {
  return (
    <section className="result-screen fade-in" aria-label="Quiz results">
      {/* ── Left Column: Congratulations text ── */}
      <div className="result-intro">
        <h1>
          Quiz completed<br />
          <strong>You scored...</strong>
        </h1>
        <p>
          You answered {score} out of {totalQuestions} questions correctly.
        </p>
      </div>

      {/* ── Right Column: Score card + action buttons ── */}
      <div>
        {/* Score card */}
        <div className="result-card" role="status" aria-label={`Your score: ${score} out of ${totalQuestions}`}>
          {/* Subject name with icon */}
          <div className="result-subject-icon">
            <span
              className="subject-icon"
              style={{ backgroundColor: subject.iconBg }}
              aria-hidden="true"
            >
              {subject.icon}
            </span>
            <span>{subject.title}</span>
          </div>

          {/* Big score number */}
          <p className="result-score" aria-hidden="true">
            {score}
          </p>

          {/* Out of total */}
          <p className="result-out-of">
            out of {totalQuestions}
          </p>
        </div>

        {/* Action buttons */}
        <div className="result-actions">
          {/* Play again — same subject */}
          <button
            className="btn-primary"
            onClick={onPlayAgain}
            aria-label={`Play ${subject.title} quiz again`}
          >
            Play Again
          </button>

          {/* Pick a different subject */}
          <button
            className="btn-primary"
            onClick={onRestart}
            style={{ background: 'var(--card-bg)', color: 'var(--text-primary)' }}
            aria-label="Return to subject selection"
          >
            Return to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultScreen;
