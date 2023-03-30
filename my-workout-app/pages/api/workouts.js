const { addWorkoutEntry, getWorkoutHistory } = require('./db');

// Example usage:
const entry = {
  type: 'cardio',
  activity: 'running',
  duration: '30 minutes',
  date: '2023-03-30',
  xp: 10
};

addWorkoutEntry(entry)
  .then(response => console.log('Workout entry added', response))
  .catch(err => console.log('Error adding workout entry', err));

getWorkoutHistory()
  .then(history => console.log('Workout history:', history))
  .catch(err => console.log('Error getting workout history', err));