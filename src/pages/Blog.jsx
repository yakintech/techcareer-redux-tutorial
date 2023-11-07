import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Blog() {

  const state = useSelector(state => state)
  
  const dispatch = useDispatch()

  const empty = () => {

    dispatch({
      type:"EMPTY"
    })

  }

  return (<>
    <h1>{state}</h1>
    <button onClick={empty}>Empty</button>
  </>
  )
}

export default Blog