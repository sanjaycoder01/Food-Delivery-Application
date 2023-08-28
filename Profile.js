import { useState, useEffect } from 'react'
const Profile = (props) => {
  const [count, setcount] = useState(0)
  const [count2, setcount2] = useState(0)
  useEffect(() => {
    //code
    const Timer = setInterval(() => {
      console.log('namste react')
    }, 1000)
    //return is a function it is called when we have to clear something example setinterval
    return () => {
      clearInterval(Timer)
    }
  }, [])
  return (
    <div>
      <p>Profile component</p>
      <p>name:{props.name}</p>
      <p>class:{props.class}</p>
      <p>count:{count}</p>
      <p>count:{count2}</p>
      <button
        type="button"
        onClick={() => {
          setcount(1)
          setcount2(2)
        }}
      >
        Click me
      </button>
    </div>
  )
}
export default Profile
