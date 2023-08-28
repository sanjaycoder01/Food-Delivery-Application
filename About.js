import { Outlet } from 'react-router-dom'
// import Profile from './Profile'
// import ProfileClass from './ProfileClass'
import Profile from './Profile'
// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         {' '}
//         This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//       </p>
//       {/* <Outlet /> */}
//       <Profile name={'sanjay'} class={'Btech'} />
//       <ProfileClass name={'sanjay kulkarni'} />
//     </div>
//   )
// }
import { Component } from 'react'
class About extends Component {
  constructor(props) {
    super(props)
    console.log('parent constructor')
  }

  componentDidMount() {
    console.log('parent mount')
  }
  render() {
    console.log('render parent')
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          {' '}
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        {/* <Outlet /> */}
        <Profile />
        <ProfileClass name={'child'} xyz={'xyz'} />
      </div>
    )
  }
}
export default About
