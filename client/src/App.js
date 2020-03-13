import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import PlayersList from './PlayersList';


class App extends Component {

  constructor(){
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount(){
  axios.get(`http://localhost:5000/api/players`)
  .then(res => {
    const soccer = res.data;
    this.setState({
      players: soccer,
    })
  })
  }

  render() {
    //console.log(this.state.players)
    return (
      <div className="App">
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
