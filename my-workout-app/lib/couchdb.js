const nano = require('nano')('http://localhost:5984'); // Replace the URL with your CouchDB server URL
const leaderboardDb = nano.db.use('leaderboard'); // Replace 'leaderboard' with your database name

// Function to add a new score to the leaderboard
const addScoreToLeaderboard = async (username, score) => {
  try {
    const leaderboardEntry = await leaderboardDb.get(username);
    leaderboardEntry.score += score;
    await leaderboardDb.insert(leaderboardEntry);
  } catch (error) {
    if (error.statusCode === 404) {
      await leaderboardDb.insert({ _id: username, score });
    } else {
      throw error;
    }
  }
}

// Function to get the top N scores from the leaderboard
const getTopScores = async (numScores) => {
  const leaderboardView = '_design/leaderboard/_view/top_scores';
  const options = { limit: numScores, descending: true };
  const result = await leaderboardDb.view(leaderboardView, options);
  return result.rows.map(row => row.value);
}

module.exports = { addScoreToLeaderboard, getTopScores };