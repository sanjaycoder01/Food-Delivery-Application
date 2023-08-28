import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    // Perform login logic here
    // ...

    // Redirect to the body page
    navigate('/') // Replace '/' with the desired path for the body page
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="email" className="p-5 m-10">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passw" className="p-5 m-10">
            Password
          </label>
          <input
            type="text"
            name="passw"
            id="passw"
            className="border border-gray-300 rounded-md p-2"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
