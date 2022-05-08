import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import personService from './services/person'
import { Person } from './global/types'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const oldPerson = persons.find((person) => person.name === newName)
    if (oldPerson !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number`
        )
      ) {
        const newPerson = {...oldPerson, number: newNumber}
        personService.update(newPerson).then((person)=> {
          setPersons(persons.filter((person) => person.id === new))
        })
        // update
      } else {
        return
      }
    }
    const newPerson = {
      id: uuid(),
      name: newName,
      number: newNumber,
    }
    personService.create(newPerson).then((personRes) => {
      setPersons(persons.concat(personRes))
      setNewName('')
      setNewNumber('')
    })
  }

  const deletePerson = (id: string): void => {
    const removePerson = persons.find((person) => person.id === id)
    if (removePerson === undefined) return
    if (!window.confirm(`Delete ${removePerson.name}`)) {
      return
    }
    personService
      .remove(id)
      .then((res) => {
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch((err) => {
        setPersons(persons.filter((person) => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <People
        persons={persons}
        newFilter={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
