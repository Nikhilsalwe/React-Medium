import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Component/Form'
import Title from './Component/Title';
import SaveData from './Component/SaveData'

class App extends Component {
  state = {
    userName: "",
    lastName: "",
    technologySkill: {
      NODE: true,
      REACT: true,
      ANGULAR: false
    },
    experienceTotal: 0,
    saveBtnClick: false
  }

  changeValue = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({
      [fieldName]: fieldValue
    })
  }

  tecknologySkillHandler = (event) => {
    let checkbox = this.state.technologySkill;

    checkbox[event.target.value] = event.target.checked;
    this.setState({
      technologySkill: checkbox
    })
    console.log(event.target.value)
  }

  expIncreaseHandler = (event) => {
    event.preventDefault()
    this.setState({
      experienceTotal: this.state.experienceTotal + 1
    })
  }

  saveUserDetails = (event) => {
    event.preventDefault()
    this.setState({
      saveBtnClick: true
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <Title />
          <Form userData={this.state} formHandler={this.changeValue} saveUserData={this.saveUserDetails} checkboxHandler={this.tecknologySkillHandler} increaseCounter={this.expIncreaseHandler} />
          {this.state.saveBtnClick ? <SaveData userData={this.state}/> : ""}
        </div>
      </div>
    );
  }
}

export default App;
