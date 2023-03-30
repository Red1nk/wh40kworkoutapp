import { useState } from "react";

export default function AddWorkout() {
  const [workoutName, setWorkoutName] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [workoutXp, setWorkoutXp] = useState("");

  const workoutOptions = [
    "Squat",
    "Bench Press",
    "Deadlift",
    "Military Press",
    "Dumbbell Curl",
    "Cable Fly",
    "Seated Row",
    "Leg Press",
    "Hammer Strength Machine",
    "Lat Pulldown",
  ];

  const handleAddWorkout = (e) => {
    e.preventDefault();
    // Add the workout data to the user's profile here
  };

  return (
    <div>
      <h2>Add a Workout</h2>
      <form onSubmit={handleAddWorkout}>
        <div>
          <label htmlFor="workoutName">Workout Name:</label>
          <input
            type="text"
            id="workoutName"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="selectedWorkout">Select a Workout:</label>
          <select
            id="selectedWorkout"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
          >
            <option value="">Select a workout</option>
            {workoutOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="workoutXp">XP for one set of 10 reps:</label>
          <input
            type="number"
            id="workoutXp"
            value={workoutXp}
            onChange={(e) => setWorkoutXp(e.target.value)}
          />
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}