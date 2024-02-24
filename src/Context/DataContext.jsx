import React, { createContext, useEffect, useState } from 'react'
export const Data = createContext(null)

function DataContext({ children }) {
    const [myData, setMyData] = useState([]);

    // useEffect(() => {
    //     fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '7f7d8fff60msh4da5e9a19d90978p11128fjsn5230c7177874',
    //             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => setMyData(data))
    // }, [])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/xezernn/dataNetflix/main/data.json")
            .then(res => res.json())
            .then(data => setMyData(data))
    },[])
    console.log(myData);
    return (
        <Data.Provider value={myData} >
            {children}
        </Data.Provider>
    )
}
export default DataContext