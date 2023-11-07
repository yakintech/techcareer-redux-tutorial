import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function About() {

    const [value, setvalue] = useState(0)

    const state = useSelector(state => state)


    let dispatch = useDispatch()

    const increaseByValue = () => {

        if(!isNaN(value)){
            dispatch({
                type: 'INCREASE_BY_VALUE',
                payload: Number(value)
            })
        }

    
    }


    return (<>
        <div>
            <h1>{state}</h1>
        </div>
        <div>
            <label htmlFor="">Data</label>
            <input type='text' onChange={(e) => setvalue(e.target.value)} />
        </div>
        <div>
            <button onClick={increaseByValue}>Increase By Value</button>
        </div>
    </>
    )
}

export default About