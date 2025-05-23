// import { Padding } from "@mui/icons-material"
// import { useEffect, useState } from "react"

// const courses = [
//     {
//         id: 1,
//         name: 'Reactjs là gì, tạo sao phải học reactjs'
//     },
//     {
//         id: 2,
//         name: 'NPA, SPA là gì'
//     },
//     {
//         id: 3,
//         name: 'Javascript nâng cao'
//     }
// ]
// function FakeChatAppComponent() {

//     const [state, setState] = useState(1)

//     useEffect(() => {
//         const handleEvent = ({ detail }) => {
//             console.log(detail)
//         }

//         window.addEventListener(`lesson-${state}`, handleEvent)

//         return () => {
//             window.removeEventListener(`lesson-${state}`, handleEvent)
//         }
//     }, [state])

//     return (
//         <div style={{ padding: 20 }}>
//             <ul>
//                 {courses.map(course => (
//                     <li
//                         key={course.id}
//                         style={{ color: course.id === state ? 'red' : '#333' }}
//                         onClick={() => setState(course.id)}>{course.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )

// }

// export default FakeChatAppComponent
export { }