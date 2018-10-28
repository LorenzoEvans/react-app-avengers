import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div `
font-family: 'Permanent Marker';
display: flex ;
flex-direction: column ;
justify-content: center ;
margin-left: 40% ;
`
const Home = () => {
    return(
        <Div>
        <h1>Avengers Database</h1>
        <h3>Unauthorized personel restricted! </h3>
        <Link to='/avengers'>Enter At Your Own Peril</Link>
        </Div>
    )
}

export default Home