import React from 'react'

type Props = {
    card: {
        title: string;
        imgSrc: string;
        text: string;
    },
    color: string
}

const Card = (props: Props) => {
    return (
        <div style={{background: props.color}}>
            <h3>{props.card.title}</h3>
            <img src={props.card.imgSrc} />
            <p>{props.card.text}</p>
        </div>
    )
}


export default Card