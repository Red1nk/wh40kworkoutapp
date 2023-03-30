// Import required modules
const nano = require('nano')('http://localhost:5984');
const dbName = 'workout_history';
const db = nano.db.use(dbName);

// Function to get all workout history entries
const getAllWorkoutHistory = async (user) => {
  try {
    const result = await db.view('workout_history', 'by_user', { key: user });
    return result.rows.map(row => row.value);
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to add or update a workout history entry
const addOrUpdateWorkoutHistory = async (entry) => {
  try {
    const result = await db.insert(entry);
    console.log(`Added/updated workout history entry with ID ${result.id}`);
    return result.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};