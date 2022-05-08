import React from 'react'

const Filter = ({
  newFilter,
  handleFilterChange,
}: {
  newFilter: string
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      filter shown with{' '}
      <input value={newFilter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter