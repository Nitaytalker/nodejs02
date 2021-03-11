import axios from "axios";
import React, { useEffect, useState } from "react"

function RandomJoke(){
    const [joke, setjoke] = useState({})
    const [loadingState, setLoading] = useState(true)

    // useEffect(() => {
    //     axios.get('http://localhost:3002/random').then((e) => {
    //         setjoke(e.data)
    //         setLoading(false)
    //     })
    // }, [])
    // console.log(joke);

    function newJoke(){
        axios.get('http://localhost:3002/random').then((e) => {
            setjoke(e.data)
        })
        setLoading(false)
    }
    function showJoke(joke){
        return(
            <div>
                <h4>{joke.setup}</h4>
                <h4>{joke.punchline}</h4>
            </div>
        )
    }
    return (
        <div className="randomjoke">
        <h1>Show joke</h1>
        <div style={{ display: loadingState ? 'block' : 'none',height: "200px"  }}>
            hello World!!
            <br/>
            where is no joke yet!
            <br/>
            click now!!!
        </div>
        <div style={{ display: loadingState ? 'none' : 'block',height: "200px" }}>
        {showJoke(joke)}
        </div>
        <button onClick={() => { newJoke() }}>click me</button>
</div>
    )
}

export default RandomJoke;