import { useState } from 'react'

function Settings() {
  // Define state variables for each setting
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notifications, setNotifications] = useState(true)

  // Function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault()
    // Send form data to backend API to update user settings
    // Example: fetch('/api/settings', { method: 'POST', body: JSON.stringify({ name, email, notifications }) })
  }

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Notifications:
          <input type="checkbox" checked={notifications} onChange={(event) => setNotifications(event.target.checked)} />
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </div>
  )
}

export default Settings