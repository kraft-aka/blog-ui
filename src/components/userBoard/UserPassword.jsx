import React, { useState, useEffect } from 'react'
import { useAuth } from '../../providers/authProvider';
import './UserCard.scss'

export default function UserPassword() {
  const { loggedUser } = useAuth();
  const [newPassword, setNewPassword] = useState('');

  // submit handler
  function handleEditUserPasswordSubmit(e) {
    e.preventDefault();
  
  }

  return (
    <form className="user-card-update-form" onSubmit={handleEditUserPasswordSubmit}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="********"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className="user-card-update-btn" type="submit">
        Save
      </button>
    </form>
  )
}
