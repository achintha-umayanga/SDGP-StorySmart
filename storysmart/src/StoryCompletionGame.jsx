/*
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StoryCompletion = () => {
  const storySteps = [
    {
      text: "Alex, an aspiring young explorer, found an old, mysterious map in his grandfather’s attic. It hinted at a hidden treasure deep within the Enchanted Forest. Eager to embark on an adventure, he first needed to...",
      options: ["Pack his backpack.", "Take a nap.", "Call his friend."],
      correct: "Pack his backpack."
    },
    {
      text: "With his bag packed and excitement in his heart, Alex entered the forest. The trees whispered secrets as he followed the trail. Suddenly, he came across a fork in the path. Should he...",
      options: ["Take the left path, where birds are chirping.", "Take the right path, leading into darkness.", "Turn back home."],
      correct: "Take the left path, where birds are chirping."
    },
    {
      text: "Following the path, Alex stumbled upon a rushing river. There was no bridge in sight, but he noticed stepping stones leading across. He decided to...",
      options: ["Carefully step on the stones.", "Jump into the water and swim.", "Wait for someone to help."],
      correct: "Carefully step on the stones."
    },
    {
      text: "Across the river, he encountered an old man sitting beside a campfire. The man offered Alex a riddle: 'The more you take, the more you leave behind. What am I?' Alex thought carefully and answered...",
      options: ["Footsteps.", "Time.", "Gold."],
      correct: "Footsteps."
    },
    {
      text: "Impressed by Alex’s wit, the old man gave him a golden key and whispered, 'It unlocks the hidden chamber beneath the ancient oak tree.' Alex searched for the tree and found it standing tall. He then...",
      options: ["Dug under the tree.", "Used the key on a hidden lock.", "Climbed the tree."],
      correct: "Used the key on a hidden lock."
    },
    {
      text: "With a soft click, a hidden door in the tree trunk creaked open, revealing a staircase leading underground. Alex bravely stepped inside and discovered...",
      options: ["A chest filled with gold.", "A sleeping dragon.", "A mysterious book."],
      correct: "A chest filled with gold."
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === storySteps[currentStep].correct) {
      setFeedback("✅ Correct!");
      setTimeout(() => {
        if (currentStep < storySteps.length - 1) {
          setCurrentStep(currentStep + 1);
          setSelectedOption(null);
          setFeedback("");
          setProgress(((currentStep + 1) / storySteps.length) * 100);
        } else {
          setCompleted(true);
          setProgress(100);
        }
      }, 1000);
    } else {
      setFeedback("❌ Oops! Try again.");
      setWrongAnswer(option);
      setTimeout(() => setWrongAnswer(null), 1000);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: "#121212" }}>
      <div className="w-75 p-4 text-center">
        {!completed ? (
          <>
            <h2 className="mb-4">Complete the Adventure</h2>
            <p className="fs-4">{storySteps[currentStep].text}</p>
            <div className="d-flex flex-column gap-3 mt-3">
              {storySteps[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  className={`btn btn-lg w-100 text-white btn-outline-light`}
                  onClick={() => handleOptionClick(option)}
                  style={{ transition: "background-color 0.3s", backgroundColor: option === wrongAnswer ? "#dc3545" : "" }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#333"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && <p className="mt-4 fw-bold fs-5">{feedback}</p>}
            <div className="progress mt-4 bg-dark">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${progress}%` }}
              >
                {Math.round(progress)}%
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-success fw-bold fs-2">
            <h2>🎉 Congratulations! You have completed Alex&#39;s adventure! 🎉</h2>
            <p className="mt-3 text-warning fs-4"><i className="bi bi-coin"></i> You earned 70 coins!</p>
            <p className="fs-4"><i className="bi bi-controller"></i> You earned a game reward!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCompletion;
*/


import { useState, useEffect } from "react";

const StoryCompletionGame = () => {
  const storySteps = [
    {
      text: "Alex, an aspiring young explorer, found an old, mysterious map in his grandfather's attic. It hinted at a hidden treasure deep within the Enchanted Forest. Eager to embark on an adventure, he first needed to...",
      options: [
        { text: "Pack his backpack.", correct: true, points: 20 },
        { text: "Take a nap.", correct: false, points: 0 },
        { text: "Call his friend.", correct: false, points: 0 }
      ]
    },
    {
      text: "With his bag packed and excitement in his heart, Alex entered the forest. The trees whispered secrets as he followed the trail. Suddenly, he came across a fork in the path. Should he...",
      options: [
        { text: "Take the left path, where birds are chirping.", correct: true, points: 20 },
        { text: "Take the right path, leading into darkness.", correct: false, points: 0 },
        { text: "Turn back home.", correct: false, points: 0 }
      ]
    },
    {
      text: "Following the path, Alex stumbled upon a rushing river. There was no bridge in sight, but he noticed stepping stones leading across. He decided to...",
      options: [
        { text: "Carefully step on the stones.", correct: true, points: 20 },
        { text: "Jump into the water and swim.", correct: false, points: 0 },
        { text: "Wait for someone to help.", correct: false, points: 0 }
      ]
    },
    {
      text: "Across the river, he encountered an old man sitting beside a campfire. The man offered Alex a riddle: 'The more you take, the more you leave behind. What am I?' Alex thought carefully and answered...",
      options: [
        { text: "Footsteps.", correct: true, points: 20 },
        { text: "Time.", correct: false, points: 0 },
        { text: "Gold.", correct: false, points: 0 }
      ]
    },
    {
      text: "Impressed by Alex's wit, the old man gave him a golden key and whispered, 'It unlocks the hidden chamber beneath the ancient oak tree.' Alex searched for the tree and found it standing tall. He then...",
      options: [
        { text: "Used the key on a hidden lock.", correct: true, points: 20 },
        { text: "Dug under the tree.", correct: false, points: 0 },
        { text: "Climbed the tree.", correct: false, points: 0 }
      ]
    },
    {
      text: "With a soft click, a hidden door in the tree trunk creaked open, revealing a staircase leading underground. Alex bravely stepped inside and discovered...",
      options: [
        { text: "A chest filled with gold.", correct: true, points: 20 },
        { text: "A sleeping dragon.", correct: false, points: 0 },
        { text: "A mysterious book.", correct: false, points: 0 }
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [progress, setProgress] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      handleTimeout();
    }
  }, [timeLeft, gameOver]);

  const handleTimeout = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setFeedback("");
      setProgress(((currentStep + 1) / storySteps.length) * 100);
      setTimeLeft(20);
    } else {
      setGameOver(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.text);
    if (option.correct) {
      setScore(score + option.points);
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("✨ A brave choice, adventurer!");
      setTimeout(() => {
        if (currentStep < storySteps.length - 1) {
          setCurrentStep(currentStep + 1);
          setSelectedOption(null);
          setFeedback("");
          setProgress(((currentStep + 1) / storySteps.length) * 100);
          setTimeLeft(20);
        } else {
          setProgress(100);
          setGameOver(true);
        }
      }, 1000);
    } else {
      setFeedback("🌲 The forest guides you to try again!");
      setWrongAnswer(option.text);
      setTimeout(() => setWrongAnswer(null), 1000);
    }
  };

  const percentageCorrect = Math.round((correctAnswers / storySteps.length) * 100);

  const styles = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }

    .option-btn {
      transition: all 0.2s ease;
      border: 2px solid #4a90e2;
      background: rgba(74, 144, 226, 0.15);
      color: #ffffff !important;
    }

    .option-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      background: rgba(74, 144, 226, 0.25) !important;
      box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    }

    .option-btn.shake {
      animation: shake 0.5s ease-in-out;
      background: rgba(220, 53, 69, 0.25) !important;
      border-color: #dc3545;
    }

    .game-container {
      background: #2C2C2C;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .story-text {
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .badge {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5"
         style={{ background: "#1a2238" }}>
      <style>{styles}</style>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="game-container rounded-4 p-4 p-md-5" style={{background: '#2a3b63'}}>
              <h1 className="text-white text-center mb-5 fw-bold">Mystery Word Builder</h1>
              {!gameOver ? (
                  <div className="text-center">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="badge p-3 fs-6" style={{background: '#3498db'}}>
                        ⏱️ Time: {timeLeft}s
                      </div>
                      <div className="badge p-3 fs-6" style={{background: '#2ecc71'}}>
                        💫 Score: {score}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="story-text fs-5 mb-4">{storySteps[currentStep].text}</p>
                    </div>

                    <div className="d-flex flex-column gap-3">
                      {storySteps[currentStep].options.map((option, index) => (
                          <button
                              key={index}
                              className={`option-btn btn btn-lg ${
                                  option.text === wrongAnswer ? 'shake' : ''
                              }`}
                              onClick={() => handleOptionClick(option)}
                          >
                            {option.text}
                          </button>
                      ))}
                    </div>

                    {feedback && (
                        <p className="mt-4 fw-bold fs-5 text-white">{feedback}</p>
                    )}

                    <div className="progress mt-4" style={{height: "8px", backgroundColor: "#404040"}}>
                      <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: `${progress}%`, background: '#3498db'}}
                      />
                    </div>
                  </div>
              ) : (
                  <div className="text-center text-white">
                    <h2 className="mb-4">Adventure Complete!</h2>

                    <div className="p-4 mb-4 rounded-4" style={{background: "rgba(255,255,255,0.05)"}}>
                      <p className="fs-4 mb-3">Final Score: {score}</p>
                      <p className="fs-4 mb-4">Explorer Rating: {percentageCorrect}%</p>

                      <div className="progress mb-3" style={{height: "12px", backgroundColor: "#404040"}}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{width: `${percentageCorrect}%`, background: '#3498db'}}
                        />
                      </div>

                      <div className="mt-4">
                        {percentageCorrect === 100 && (
                            <p style={{color: '#2ecc71'}} className="fs-5">🏆 Legendary Explorer!</p>
                        )}
                        {percentageCorrect >= 70 && percentageCorrect < 100 && (
                            <p style={{color: '#3498db'}} className="fs-5">⭐ Seasoned Adventurer!</p>
                        )}
                        {percentageCorrect < 70 && (
                            <p style={{color: '#f1c40f'}} className="fs-5">📚 The journey continues...</p>
                        )}
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCompletionGame;