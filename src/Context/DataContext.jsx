// const [myData, setMyData] = useState([]);

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '7f7d8fff60msh4da5e9a19d90978p11128fjsn5230c7177874',
//         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     }
// };

// const fetchData = async () => {
//     try {
//         const res = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
//         const data = await res.json();
//         console.log(data)
//         setMyData(data.titles)
//     } catch (e) {
//         console.log(e)
//     }
// }

// useEffect(() => {
//     fetchData()
// }, [])