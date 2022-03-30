import React, { useState } from 'react'
import './BeerList.scss'

const BeerList = () => {
    const [value, setValue] = useState('Loading...')

    return(
        <div>
            <p>{value}</p>
        </div>
    )
}
export default BeerList