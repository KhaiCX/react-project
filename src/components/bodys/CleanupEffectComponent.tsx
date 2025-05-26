// import React, { useEffect } from "react";
// import { useState } from "react";
// function CleanupEffectComponent() {

//     const [avartar, setAvartar] = useState()

//     useEffect(() => {
//         return () => {
//             console.log("cleanup")
//             avartar && URL.revokeObjectURL(avartar.preview)
//         }
//     }, [avartar])

//     const handlePrev = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file);
//         setAvartar(file)

//     }

//     return (
//         <div>
//             <input type="file" onChange={handlePrev}></input>
//             <img src={avartar && avartar.preview}></img>
//         </div>
//     )
// }
// export default CleanupEffectComponent
export { }