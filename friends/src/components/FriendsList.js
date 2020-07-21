import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Friend from './Friend'



const initialFriendValues = {
    name: '',
    age: '',
    email: ''
}

export const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const [friendValues, setFriendValues] = useState(initialFriendValues)
    useEffect(()=> {
        getFriends()
    },[])

    const getFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res=>{
     
            setFriends(res.data)
          
        })
        .catch(err => console.log(err))
    }

    const postFriend = newfriend => {
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newfriend)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }
    const addFriend = e => {
        e.preventDefault()
        const newFriend = {
         
            name: friendValues.name,
            age: friendValues.age,
            email: friendValues.email
        }
        
        postFriend(newFriend)
        setFriendValues({
            name: '',
            age: '',
            email: ''
        })
        
    }


    const changeHandler = e => {
        const {name, value} = e.target
        setFriendValues({
            ...friendValues,
            [name]: value
        })
    }

    

    return (
        <div>
            <form onSubmit={addFriend}>
                <h2>Add New Friend</h2>
                <label>
                    <p>name: </p>
                    <input 
                    type='text'
                    name='name'
                    value = {friendValues.name}
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    <p>age: </p>
                    <input 
                    type='number'
                    name='age'
                    value = {friendValues.age}
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    <p>email: </p>
                    <input 
                    type='text'
                    name='email'
                    value = {friendValues.email}
                    onChange={changeHandler}
                    />
                </label>
                <br></br>
                <button>Add Friend</button>
            </form>
            {friends.map(friend => {
                return(
                    <Friend key={friend.id} friend={friend} />
                )
            })}
        </div>
    )
}

export default FriendsList
