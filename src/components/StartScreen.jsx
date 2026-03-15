import React from 'react';

/**
 * StartScreen Component
 * 
 * Displays the welcome/intro screen with the 4 quiz subject options.
 * User selects a subject to begin the quiz.
 * 
 * Props:
 *   onSelectSubject(index) - called when user picks a subject
 *   subjects - array of subject objects from quizData
 */
function StartScreen({ onSelectSubject, subjects }) {
  return (
    <section className="start-screen fade-in" aria-label="Quiz subject selection">
      {/* Left: Intro text */}
      <div className="start-intro">
        <h1>
          Welcome to the<br />
          <strong>Frontend Quiz!</strong>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>

      {/* Right: Subject buttons */}
      <nav aria-label="Quiz subjects">
        <ul className="subjects-grid" role="list">
          {subjects.map((subject, index) => (
            <li key={subject.title} className="slide-in">
              <button
                className="subject-btn"
                onClick={() => onSelectSubject(index)}
                aria-label={`Start ${subject.title} quiz`}
              >
                {/* Subject Icon */}
                <span
                  className="subject-icon"
                  style={{ backgroundColor: subject.iconBg }}
                  aria-hidden="true"
                >
                  {subject.icon}
                </span>

                {/* Subject Name */}
                <span>{subject.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default StartScreen;
