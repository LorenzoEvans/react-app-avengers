import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import AvengerInfo from './AvengerInfo'
import AvengerMovies from './AvengerMovies'



const H1 = styled.div ` 
font-family: 'Righteous';
font-size: 3.3rem ;
`

const H2 = styled.div `
font-family: 'Courgette';
font-size: 2.1rem ;
` 
const Img = styled.img `
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
    const avenger = props.data.find(avenger => avenger.id === parseInt(props.match.params.id, 10))
    return(
        <>
        <Img  alt="" src={props.data.img} />
        <H1>{props.data.name}</H1>
        <H2>{props.data.nickname}</H2>
        <Link to={`/avengers/${props.data.id}/info`}>Info</Link>
        {' '}
        <Link to={`/avengers/${props.data.id}/movies`}>Movies</Link>
        {/* <Route path='avengers/:id/info' 
        render={(props => <AvengerInfo {...props} avenger={avenger}/>)}
        />
        <Route path="/avengers/:id/movies"
        render={(props) => <AvengerMovies {...props} avenger={avenger}  />}
         /> */}
        
            

        </>
    )
}

export default Avenger 