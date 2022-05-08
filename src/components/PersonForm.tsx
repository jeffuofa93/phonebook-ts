import React from 'react'
import { setState } from '../global/types'

const PersonForm = ({
  addPerson,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}: {
  addPerson: (event: React.FormEvent<HTMLFormElement>) => void
  newName: string
  setNewName: setState
  newNumber: string
  setNewNumber: setState
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name:{' '}
            <input
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </div>
          <div>
            number:{' '}
            <input
              value={newNumber}
              onChange={(event) => setNewNumber(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
