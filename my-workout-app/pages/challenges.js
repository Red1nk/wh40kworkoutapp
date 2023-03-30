import { useState } from 'react';

function ChallengesPage() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: '30-Day Push-Up Challenge', description: 'Complete 100 push-ups a day for 30 days', difficulty: 'Advanced' },
    { id: 2, title: '60-Day Plank Challenge', description: 'Hold a plank for 5 minutes a day for 60 days', difficulty: 'Intermediate' },
    { id: 3, title: '90-Day Cardio Challenge', description: 'Run 3 miles a day for 90 days', difficulty: 'Expert' },
  ]);

  const handleAddChallenge = () => {
    const newChallenge = { id: challenges.length + 1, title: 'New Challenge', description: '', difficulty: 'Intermediate' };
    setChallenges([...challenges, newChallenge]);
  };

  const handleChallengeChange = (index, field, value) => {
    const updatedChallenges = [...challenges];
    updatedChallenges[index][field] = value;
    setChallenges(updatedChallenges);
  };

  const handleChallengeDelete = (index) => {
    const updatedChallenges = [...challenges];
    updatedChallenges.splice(index, 1);
    setChallenges(updatedChallenges);
  };

  return (
    <div>
      <h1>Challenges</h1>
      <button onClick={handleAddChallenge}>Add Challenge</button>
      {challenges.map((challenge, index) => (
        <div key={challenge.id}>
          <h2>
            <input
              type="text"
              value={challenge.title}
              onChange={(e) => handleChallengeChange(index, 'title', e.target.value)}
            />
            <button onClick={() => handleChallengeDelete(index)}>Delete</button>
          </h2>
          <div>
            <label htmlFor={`challenge-description-${challenge.id}`}>Description</label>
            <textarea
              id={`challenge-description-${challenge.id}`}
              value={challenge.description}
              onChange={(e) => handleChallengeChange(index, 'description', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`challenge-difficulty-${challenge.id}`}>Difficulty</label>
            <select
              id={`challenge-difficulty-${challenge.id}`}
              value={challenge.difficulty}
              onChange={(e) => handleChallengeChange(index, 'difficulty', e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}