import React, {useEffect} from "react";
import './getRandom.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";


const GetRandom = () => {
    const randoms = useSelector(
        state => state.random.random.results
    )
    console.log(randoms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [dispatch])
    return (
        <div>
            Hello World Yeldos
        </div>
    )
}
export default GetRandom