import React from 'react'
import { useContext, useState } from 'react'
import { userContext } from '../../UserContext'

const UpdateUser = () => {
    const {updateUser} = useContext(userContext)
    const [newName, setNewName] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if (newName.trim()) {       //removes unecessary spaces
            updateUser(newName);
            setNewName("");
        }
    }
  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder='Enter New Name' />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser