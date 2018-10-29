import React from 'react'

const AvengerInfo = (props) => {
    return(
        <div>
            {props.data.map((avenger,index) => <div>
                {avenger.description}
            </div>)}
        </div>
    )
}

export default AvengerInfo