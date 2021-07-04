import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const Friend = props => {
    const {
        setFriendValues,
        friendValues,
        friend,
        setEditFriend,
        setCurrentId,
        getFriends
    } = props
    const updateFriend = () => {
        setFriendValues({
            ...friendValues,
            name: friend.name,
            age: friend.age,
            email: friend.email
        })
        setEditFriend(true)
        setCurrentId(friend.id)
    }

    const deleteFriend = () => {
        
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${friend.id}`)
        .then(res => {
            console.log(res)
            getFriends()
        })
    }
    console.log(friend.id)
    return (
        <div className='friend' onClick={updateFriend}>
            <h1>{friend.name}</h1>
            <div>
                <p><b>age:</b> {friend.age}</p>
                <p><b>Email:</b> {friend.email}</p>
            </div>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}

export default Friend