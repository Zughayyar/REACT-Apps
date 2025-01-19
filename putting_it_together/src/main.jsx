import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserCard from './components/UserCard'
import "./index.css"

const people = [
    { firstName: "Doc", lastName: "Jane", age: 42, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 28, hairColor: "Brown" }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {people.map((person, index) => (
              <UserCard
                  key={index}
                  firstName={person.firstName}
                  lastName={person.lastName}
                  age={person.age}
                  hairColor={person.hairColor}
              />))
      }
  </StrictMode>
)
