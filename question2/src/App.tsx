import { createContext, useContext } from 'react'
import './App.css'

type UserProfile = {
  name: string
  role: string
  location: string
}

const UserContext = createContext<UserProfile | null>(null)

function NestedChild() {
  const user = useContext(UserContext)

  if (!user) {
    return <p>No user data available in context.</p>
  }

  return (
    <div className="card">
      <h3>Nested Child Component</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
    </div>
  )
}

function Parent() {
  const userData: UserProfile = {
    name: 'Aarav Patel',
    role: 'React Developer',
    location: 'Mumbai, India',
  }

  return (
    <UserContext.Provider value={userData}>
      <section className="container">
        <h2>Parent Component</h2>
        <p>This component provides user data through React Context.</p>
        <NestedChild />
      </section>
    </UserContext.Provider>
  )
}

function App() {
  return (
    <main className="app-shell">
      <h1>React Context API Example</h1>
      <Parent />
    </main>
  )
}

export default App
