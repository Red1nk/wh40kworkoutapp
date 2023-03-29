import React, { useState, useEffect } from 'react';
import { useParse } from '@parse/react';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  const { Parse } = useParse();

  useEffect(() => {
    const query = new Parse.Query('Workout');
    query.find().then(results => {
      setWorkouts(results);
    });
  }, [Parse]);

  return (
    <div>
      <h1>Workout List</h1>
      {workouts.map(workout => (
        <div key={workout.id}>
          <h2>{workout.get('name')}</h2>
          <p>{workout.get('description')}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
