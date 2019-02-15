import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    html: "HTML5",
    javascript: "javaScript",
    typescript: 'ES6 Basic',
    node: 'NPM',
    contentChangeText: 'You will see this content is going to change in 3 Sec'
  }

  

  render() {
    setTimeout(() => {
      this.setState({
        contentChangeText: 'Ahha Content change using this.setState({}) method'
      })
    }, 3000);

    return (
      <div className="">
        <h1>We get data from parent component in child in this.props as shown below</h1>
        <h3>city name:- {this.props.city}</h3>
        <code>this.props.city</code>
        <hr></hr>
        <h3>Country Name:- {this.props.country}</h3>
        <hr></hr>
        <h1>As describe state is nothing but javaScript object.</h1>
        <h2>Following are the things you should learn before react:</h2>
        <ul>
          <li>{this.state.html}</li>
          <li>{this.state.javascript}</li>
          <li>{this.state.typescript}</li>
          <li>{this.state.node}</li>
          <li className="App-change">{this.state.contentChangeText}</li>
        </ul>
      </div>
    );
  }
}

export default App;
