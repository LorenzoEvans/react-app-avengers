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
display: flex;
flex-direction: row-wrap ;
justify-content: center ;
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
        <ul>
          <li>
            <NavLink exact to='/' >
            Home
            </NavLink>
            {' '}
            <NavLink to='/avengers'>
            Avengers
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/avengers' render={(props) => <AvengersList {...props} data={this.state.Data}  />}/>
        <Route path='/avengers/:id' render={(props) => <Avenger {...props}  data={this.state.Data}/>} />
        <Route path='/avengers/:id/avengerinfo'/>
        </AppContainer>
    );
  }
}

export default App;
