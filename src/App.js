import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, NavLink, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './Components/Home';
import AvengersList from './Components/AvengersList';
import Avenger from './Components/Avenger';
import AvengerData from './AvengersData'
import './App.css';

const AppContainer = styled.div `
margin: 0 auto ;
border: 2px solid yellow ;
display: flex;
`

class App extends Component {
  constructor(){
    super()

    this.state = {
      Data: []
    }
  }
  componentDidMount(){
    this.setState({
      Data: AvengerData
    })
  }
  render() {
    return (
        <AppContainer className="App">
          <Route exact path='/' component={Home} />
          <Route render={() => <AvengersList data={this.state.Data} />} path='/avengers'  />
        </AppContainer>
    );
  }
}

export default App;
