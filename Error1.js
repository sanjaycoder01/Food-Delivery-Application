import { useRouteError } from 'react-router-dom'
const Error1 = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status + ' ' + err.statusText}</h3>
      <div className="error">
        <img
          className="im1"
          src="https://img.freepik.com/premium-vector/glitch-error-404-page-background_23-2148086293.jpg?w=2000"
          alt="error"
        ></img>
      </div>
    </>
  )
}
export default Error1
