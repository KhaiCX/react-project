// import { colors } from "@mui/material"
// import React from "react"
// import { useState, useEffect } from "react"
// const tabs = ['posts', 'comments', 'albums', 'todos', 'users']

// function UseEffectComponent() {

//     const [keyword, setKeyword] = useState(tabs[0])
//     const [posts, setPosts] = useState([])

//     const handleClick = (tab) => {
//         setKeyword(tab)
//     }
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${keyword}`)
//             .then(response => response.json())
//             .then(json => {
//                 setPosts(json)
//             })
//     }, [keyword])
//     return (
//         <div style={{ padding: 20 }}>
//             {tabs.map(tab => (
//                 <button
//                     style={keyword === tab ? {
//                         color: 'white',
//                         backgroundColor: 'black'
//                     } : {}}
//                     key={tab}
//                     onClick={() => { handleClick(tab) }}>{tab}</button>
//             ))}
//             <div>
//                 <ul>
//                     {posts.map(item => (
//                         <li key={item.id}>{item.title || item.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default UseEffectComponent
export { }