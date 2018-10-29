import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avenger from './Avenger'

// const AvengersList = (props) => {

const H1 = styled.div ` 
font-family: 'Righteous';
font-size: 3.3rem ;
`

const H2 = styled.div `
font-family: 'Courgette';
font-size: 2.1rem ;
` 
const CardWrapper = styled.div `
 padding-top: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const Card = styled.div `
  width: 30%;
  max-width: 265px;
  min-width: 220px;
  margin: 50px 1%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
// const Div = styled.div `
// font-family: 'Permanent Marker'
// padding-top: 40px;
// display: flex;
// flex-flow: row wrap ;
// margin: 0 auto ;
// justify-content: center;
// border: 2px solid black ;
// justify-content: center;
// `
const Img = styled.img `
border-radius: 50%;
height: 200px ;
width: 200px ;
padding-top: 10px ;
padding-left: 10px ;
`

class AvengersList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: props.data
        }
    }
  
    
    render(){
    return(
        <CardWrapper>
      {this.props.data.map((avenger, index) => 
      <Card key={index}> 
      <Img alt='' src={avenger.thumbnail} ></Img>
      <H1 onClick={() => this.props.history.push(`/avengers/${avenger.id}/info`)}
      >
    {avenger.name}
      </H1>
      <H2>({avenger.nickname})</H2>
     
      </Card>)}
      
        </CardWrapper>
    )
        }
}


export default AvengersList