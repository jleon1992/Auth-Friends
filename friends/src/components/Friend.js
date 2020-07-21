import React from 'react'

export const Friend = props => {

    return (
        <div className='friend'>
            <h1>{props.friend.name}</h1>
            <div>
                <p><b>age:</b> {props.friend.age}</p>
                <p><b>Email:</b> {props.friend.email}</p>
            </div>
        </div>
    )
}

export default Friend