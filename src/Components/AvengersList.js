import React from 'react'
import styled from 'styled-components'

const Div = styled.div `
font-family: 'Permanent Marker'
padding-top: 40px;
display: flex;
flex-flow: row wrap;
margin: 0 auto ;
border: 2px solid black ;
${'' /* justify-content: center; */}
`
const Img = styled.img `


`

const AvengerCard = styled.div `
  margin: 50px 20%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`

const AvengersList = (props) => {
    return(
        <Div>
        {/* <h2>Avengers List!</h2> */}
        {props.data.map((avenger, index) =>
        <AvengerCard key={avenger.index}>
            <Img alt={avenger.name} src={avenger.thumbnail} >
                
            </Img>
            <h2>{avenger.name}</h2>
        </AvengerCard>
        )}
        </Div>
    )
}


export default AvengersList