import styles from '../styles/Home.module.css'
import { useState } from 'react'

const armies = {
  spaceMarines: {
    name: 'Space Marines',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain', xpNeeded: 300 },
      { name: 'Chapter Master', xpNeeded: 350 }
    ]
  },
  ultramarines: {
    name: 'Ultramarines',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain', xpNeeded: 300 },
      { name: 'Chapter Master', xpNeeded: 350 }
    ]
  },
  imperialFists: {
    name: 'Imperial Fists',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain', xpNeeded: 300 },
      { name: 'Chapter Master', xpNeeded: 350 }
    ]
  },
  darkAngels: {
    name: 'Dark Angels',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain', xpNeeded: 300 },
      { name: 'Chapter Master', xpNeeded: 350 }
    ]
  },
  bloodAngels: {
    name: 'Blood Angels',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain', xpNeeded: 300 },
      { name: 'Chapter Master', xpNeeded: 350 }
    ]
  },
  salamanders: {
    name: 'Salamanders',
    levels: [
      { name: 'Scout', xpNeeded: 50 },
      { name: 'Tactical Marine', xpNeeded: 100 },
      { name: 'Assault Marine', xpNeeded: 150 },
      { name: 'Devastator Marine', xpNeeded: 200 },
      { name: 'Sergeant', xpNeeded: 250 },
      { name: 'Captain',        xpNeeded: 300,
    },
    {
      name: 'Chapter Master',
      xpNeeded: 0,
    },
  ],
},
// Add more armies here...
};

export default function Home() {
const [selectedArmy, setSelectedArmy] = useState('Space Marines');
const [currentLevel, setCurrentLevel] = useState(0);
const [currentXP, setCurrentXP] = useState(0);

const handleArmyChange = (event) => {
  setSelectedArmy(event.target.value);
  setCurrentLevel(0);
  setCurrentXP(0);
};

const handleXPIncrease = (amount) => {
  const currentArmy = armies[selectedArmy];
  const currentLevelIndex = currentArmy.levels.findIndex(level => currentXP < level.xpNeeded);
  const currentLevel = currentArmy.levels[currentLevelIndex];
  const newXP = currentXP + amount;
  const newLevelIndex = currentArmy.levels.findIndex(level => newXP < level.xpNeeded);

  if (newLevelIndex > currentLevelIndex) {
    const newLevel = currentArmy.levels[newLevelIndex];
    console.log(`Congratulations! You have reached the rank of ${newLevel.name}.`);
  }

  setCurrentLevel(newLevelIndex);
  setCurrentXP(newXP);
};

return (
  <div className={styles.container}>
    <Head>
      <title>Warhammer 40K Workout Tracker</title>
      <meta name="description" content="Track your workouts and level up like a Space Marine!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to the <span>{selectedArmy}</span> Workout Tracker
      </h1>

      <div className={styles.armySelector}>
        <label htmlFor="army-select">Choose your army:</label>
        <select id="army-select" value={selectedArmy} onChange={handleArmyChange}>
          {Object.keys(armies).map((armyName) => (
            <option key={armyName} value={armyName}>
              {armyName}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.currentLevel}>
        <p>Your current level: {currentLevel + 1}</p>
        <p>{currentXP} XP earned towards next level</p>
      </div>

      <div className={styles.workoutLog}>
        <h2>Log Your Workout</h2>
        <WorkoutForm onXPIncrease={handleXPIncrease} />
      </div>
    </main>

    <footer className={styles.footer}>
      <a href="https://www.games-workshop.com/en-US/Warhammer-40-000" target="_blank" rel="noopener noreferrer">
        Powered by Warhammer 40,000
      </a>
    </footer>
  </div>
);
}

