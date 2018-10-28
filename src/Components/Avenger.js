import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Div = styled.div `
font-family: 'Permanent Marker'
padding-top: 40px;
display: flex;
flex-flow: row wrap ;
margin: 0 auto ;
justify-content: center;
border: 2px solid black ;
${'' /* justify-content: center; */}
`
const Img = styled.img `
border-radius: 50%;
height: 200px ;
width: 200px ;
padding-top: 10px ;
padding-left: 10px ;
`
const H1 = styled.div ` 
font-family: 'Righteous';
font-size: 3.3rem ;
`

const H2 = styled.div `
font-family: 'Courgette';
font-size: 2.1rem ;
` 


      // <Div>
        // {/* <h2>Avengers List!</h2> */}
        // {this.props.data.map((avenger, index) =>
        // <Avenger key={index}>
      
        //     <Img alt={avenger.name} src={avenger.thumbnail} >
                
        //     </Img>  
        //     <H1> 
        //     <Link to={`/avengers/${avenger.id}`}>
        //      {avenger.name}
        // </Link>
        // </H1>
          
        //     <H2>({avenger.nickname})</H2>
        // </Avenger>
        // )}
        // </Div>
const Avenger = (props) => {
    return(
        <>
        {/* {props.avenger.map((avenger, id) =>
            <Div></Div>
            )} */}
            <Img alt="" src={props.avenger.thumbnail}>

            </Img>
            <H1>{props.avenger.name}</H1>
            <H2>{props.avenger.nickname}</H2>
            </>
    )
}

export default Avenger 