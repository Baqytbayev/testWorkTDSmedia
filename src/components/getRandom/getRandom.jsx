import React, {useEffect, useState} from "react";
import './getRandom.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandom} from "../../store/randomSlice";
import OneRandom from "./oneRandom/oneRandom";


const GetRandom = () => {
    const randoms = useSelector(
        state => state.random.random.results
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [dispatch])
    const [sort, setSort] = useState(true);
    const [filter, setFilter] = useState("all");
    const sortByname = [...randoms].sort((a, b) => a.name.first.localeCompare(b.name.first));
    const sortBynameRevers = [...randoms].sort((a, b) => b.name.first.localeCompare(a.name.first));
    const sortRandoms = sort ? sortByname : sortBynameRevers;
    const filterRandoms = filter === "male"
        ? sortRandoms.filter(random => random.gender === "male")
        : filter === "female"
            ? sortRandoms.filter(random => random.gender === "female")
            : sortRandoms;
    const refresh = () => {
        dispatch(getRandom());
    };
    return (
        <div className={'randoms'}>
            <div className={'buttonDiv'}>
                <button className={'button'} onClick={() => setFilter("all")}>
                    Show All
                </button>
                <button className={'button'} onClick={() => setFilter("male")}>
                    Filter Male
                </button>
                <button className={'button'} onClick={() => setFilter("female")}>
                    Filter Female
                </button>
                <button className={'button'} onClick={() => setSort(true)}>
                    Sort by Name (A to Z)
                </button>
                <button className={'button'} onClick={() => setSort(false)}>
                    Sort by Name (Z to A)
                </button>
                <button className={'button'} onClick={refresh}>
                    Refresh
                </button>
            </div>
            <div className={'randomInfo'}>
                {filterRandoms.map((random, i) =>(
                    <OneRandom
                        key={i}
                        image={random.picture.large}
                        text={random.name.first}
                        gender={random.gender}/>
                ))
                }
            </div>

        </div>
    )
}
export default GetRandom