import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const initialState = {
    username: '',
    password: ''
  }
export const Login = props => {
    const [values, setValues] = useState(initialState)
    const {push} = useHistory()
    
    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', values)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            push('/protected')
        })
    
    }
    
      const changeHandler = e => {
        const {name, value} = e.target
        setValues({
          ...values,
          [name]: value
        })
      }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    username: 
                    <input
                type='text'
                name='username'
                value={values.username}
                onChange={changeHandler}
                />
                </label>
                <label>
                    password:
                    <input
                type='password'
                name='password'
                value={values.password}
                onChange={changeHandler}
                />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login