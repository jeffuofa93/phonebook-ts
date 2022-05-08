import { delRequest, Person } from '../global/types'
import { v4 as uuid } from 'uuid'
import React from 'react'
import DelButton from './DelButton'

const People = ({
  persons,
  newFilter,
  deletePerson,
}: {
  persons: Person[]
  newFilter: string
  deletePerson: delRequest
}) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((person) => (
          <div key={uuid()}>
            {person.name} {person.number}
            <DelButton deletePerson={deletePerson}  personID={person.id}/>
          </div>
        ))}
    </div>
  )
}

export default People
