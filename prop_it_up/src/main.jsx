import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import PersonCard from "./components/PersonCard.jsx";

const people = [
    { firstName: "Doc", lastName: "Jane", age: 42, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 28, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 29, hairColor: "Blonde" },
    { firstName: "Maria", lastName: "Smith", age: 42, hairColor: "Red" }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {people.map((person, index) => (
          <PersonCard
              key={index}
              firstName={person.firstName}
              lastName={person.lastName}
              age={person.age}
              hairColor={person.hairColor}
          />))
      }
  </StrictMode>,
)
