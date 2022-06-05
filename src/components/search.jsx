import React from 'react'

const search = ({ value, setName, handleSearch }) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" value={value} onChange={(e) => setName(e.target.value)} placeholder="Search" />
    </form>
  )
}

export default search