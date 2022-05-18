import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered,restoked } from './iceCreamSlice'

const IceCream = () => {
    const numoficeCream = useSelector((state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Number of IceCream= {numoficeCream}</h2>
            <button onClick={() => dispatch(ordered())}>order IceCream</button>
            <button onClick={() => dispatch(restoked(20)) }>restock IceCream</button>
        </>
    )
}

export default IceCream