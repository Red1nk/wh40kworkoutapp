import React, { useState, useEffect } from "react";

const MAX_LEVEL = 10;
const EXPERIENCE_PER_LEVEL = 100;

function ProgressPage({ username, totalExperience }) {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(totalExperience);

  useEffect(() => {
    // Calculate the level based on the total experience
    const newLevel = Math.min(MAX_LEVEL, Math.floor(experience / EXPERIENCE_PER_LEVEL) + 1);
    setLevel(newLevel);
  }, [experience]);

  const experiencePercent = (experience / (level * EXPERIENCE_PER_LEVEL)) * 100;

  return (
    <div>
      <h1>{username}'s Progress</h1>
      <h2>Level {level}</h2>
      <div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${experiencePercent}%` }}></div>
        </div>
        <p>{experience} / {level * EXPERIENCE_PER_LEVEL} experience</p>
      </div>
    </div>
  );
}

export default ProgressPage;