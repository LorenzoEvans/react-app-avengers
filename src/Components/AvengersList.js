import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avenger from './Avenger'

// const AvengersList = (props) => {


class AvengersList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: props.data
        }
    }
  
    
    render(){
    return(
        <div>
        <Link to="/" >Exit</Link>
      {this.props.data.map((avenger, index) => 
      <div> 
      <Avenger 
      {...this.props} 
      key={index} 
      id={avenger.id} 
      avenger={avenger} 
      thumbnail={avenger.thumbnail}/> 
      {avenger.name}:
      {' '}
      {avenger.nickname}
      </div>)}
      
        </div>
    )
        }
}


export default AvengersList