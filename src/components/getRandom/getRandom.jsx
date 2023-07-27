import React, {useEffect} from "react";
import './getRandom.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";
import OneRandom from "./oneRandom/oneRandom";


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
            {randoms.map((random, i) =>(
                <OneRandom
                key={i}
                image={random.picture.large}
                text={random.name.first}
                gender={random.gender}/>
                ))
            }
        </div>
    )
}
export default GetRandom