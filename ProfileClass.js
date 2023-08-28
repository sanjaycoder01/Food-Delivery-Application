import React from 'react'
class ProfileClass extends React.Component {
  constructor(props) {
    super(props)
    console.log('child contructor')
    //state variable
    this.state = {
      userInfo: {
        login: 'Dummy',
        id: '0',
      },
    }
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/sanjaycoder1')
    const json = await data.json()
    this.setState({
      userInfo: json,
    })
    //This is the place where Api is called
    console.log('child mount')
  }
  render() {
    console.log('child render')

    return (
      <div>
        <h1>class based component</h1>
        {/* <p>name:{this.props.name}</p> */}
        <img src={this.state.userInfo.avatar_url} />
        <p>count:{this.state.userInfo.login}</p>
        <p>count2:{this.state.userInfo.id}</p>
        {/* <button
          type="button"
          onClick={() => this.setState({ count: 1, count2: 2 })}
        >
          count
        </button> */}
      </div>
    )
  }
}
export default ProfileClass
