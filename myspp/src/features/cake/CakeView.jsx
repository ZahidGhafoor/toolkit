import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restoked } from "./cakeSlice"

const CakeView = () => {
    const numofcake = useSelector((state) => state.cake.numofCakes)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Number of Cakes = {numofcake}</h2>
            <button onClick={() => { dispatch(ordered()) }}>order cake</button>
            <button onClick={() => { dispatch(restoked(20)) }}>restock cake</button>
        </>
    )
}

export default CakeView