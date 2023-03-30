import { useState } from 'react';

function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Bench Press', date: '2022-02-01', xp: 50 },
    { id: 2, name: 'Squats', date: '2022-02-03', xp: 75 },
    { id: 3, name: 'Deadlifts', date: '2022-02-05', xp: 100 },
  ]);

  return (
    <div>
      <h1>Workout History</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Workout Name</th>
            <th>Date</th>
            <th>XP Gained</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{workout.date}</td>
              <td>{workout.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutHistory;