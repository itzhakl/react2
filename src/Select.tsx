import React from 'react'

interface Props {
    setColorIsALie: Function
}

function Select(props: Props) {
    return (
        <select onChange={(e) => props.setColorIsALie(e)}>pick color
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>black</option>
        </select>
    )
}

export default Select