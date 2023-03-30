import { useState } from 'react'

function Profile() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('johndoe@example.com')
  const [age, setAge] = useState(25)
  const [gender, setGender] = useState('Male')
  const [weight, setWeight] = useState(170)
  const [height, setHeight] = useState(70)
  const [goal, setGoal] = useState('Lose Weight')
  const [bio, setBio] = useState('I am a fitness enthusiast who loves to lift weights and stay in shape!')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value)
  }

  const handleHeightChange = (event) => {
    setHeight(event.target.value)
  }

  const handleGoalChange = (event) => {
    setGoal(event.target.value)
  }

  const handleBioChange = (event) => {
    setBio(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Code to submit changes to database or API endpoint
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Weight (lbs)</label>
          <input type="number" id="weight" value={weight} onChange={handleWeightChange} />
        </div>
        <div>
          <label htmlFor="height">Height (in)</label>
          <input type="number" id="height" value={height} onChange={handleHeightChange} />
        </div>
        <div>
          <label htmlFor="goal">Goal</label>
          <select id="goal" value={goal} onChange={handleGoalChange}>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Gain Muscle">Gain Muscle</option>
            <option value="Maintain Weight">Maintain Weight</option>
          </select>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" value={bio} onChange={handleBioChange} />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="file" id="avatar" onChange={handleAvatarChange} />
          {avatar && (
            <div>
              <img src={URL.createObjectURL(avatar)} alt="avatar preview" />
            </div>
          )}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
)}
