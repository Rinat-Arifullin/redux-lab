import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const onInc = ()=>{
        dispatch({type: 'increment'});
    }

    const onDec = ()=>{
        dispatch({type: 'decrement'});
    }

    const addNum = ()=>{
        dispatch({type: 'addNum', payload: 5});
    }

    return <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
        <button onClick={addNum}>Add 5</button>
        <div>{counter}</div>
    </div>
}