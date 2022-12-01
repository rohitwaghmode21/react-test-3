import React, { useEffect, useState } from 'react'
import "./Home.css"

const Home = () => {

    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // useEffect((e) => {
    //     e.preventDefault();
    //     fetch("")
    //     .then((response) => {
    //         response.json();
    //         console.log(response.data)
    //     }).catch((error) => {
    //         if(error){
    //             console.log(error);
    //         }
    //     })
    // })

    return(
        <div>
            <div className='container'>
                    <div className='text'>
                        <h1>React Photo Search</h1>
                        <a href=''>Bookmark</a>
                    </div>
                    <div className='search-field'>
                        <form method = "post" onSubmit = {handleSubmit}>
                            <input
                                name = "search-tag"
                                placeholder='Search the High Resolution Imeages'
                                value = {image}
                                onClick = {(e) => setImage(e.target.value)}
                            ></input>
                            <button type='submit'>Search</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}
export default Home;