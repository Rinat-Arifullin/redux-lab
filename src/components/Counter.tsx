import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state:RootState)=>state.counter)

    const onIncrement = () => {
        dispatch({type: "INCREMENT"})
    }

    const onDecrement = () => {
        dispatch({type: "DECREMENT"})
    }

    const reset = () => {
        dispatch({type: "RESET"})
    }

    const incrementByFive = () => {
        dispatch({type: "INCREMENT_BY_VALUE", payload: 5})
    }

    return <div>
        <h1>Counter</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementByFive}>Increment by 5</button>
        <p>{count}</p>
    </div>
}

export default Counter;