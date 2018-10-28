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
      {this.props.data.map((avenger, index) => <Avenger key={index} avenger={avenger} />)}
      
        </div>
    )
        }
}


export default AvengersList