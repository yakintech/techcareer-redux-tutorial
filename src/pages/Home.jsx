import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

  //GLOBAL STATE USE-SELECTOR HOOK İŞE ÇAĞRILIR!!!
  const globalState = useSelector(state => state)

  //REDUCERLARA ERİŞMEK İÇİN USEDISPATCH HOOK KULLANIRIZ!
  let dispatch = useDispatch()

  const increaseCounter = () => {
    dispatch({
      type:'INCREASE'
    })
  }

  const decreaseCounter = () => {
    dispatch({
      type:'DECREASE'
    })
  }

  return (<>
    <h1>{globalState}</h1>
    <button onClick={() => increaseCounter()}>Increase</button>
    <button onClick={() => decreaseCounter()}>Decrease</button>

  </>
  )
}

export default Home