
// import React, { useEffect, useState } from "react";
// import apiPrueba from './hola'
    
//     function Contenedor(props) {
//       console.log({props});
    
    
//       const [data, setData] = useState([]);
    
//       // Separate out the function that creates the number array
//       function createDatos() {
//         const originalArray = new Array();
//         return  Array.isArray (originalArray)
//         && originalArray.map((name, edad) =>
//         <div> <span>{name}</span>
//          <span>{edad}</span></div>).join('');
//       }
    
//       useEffect(() => {
//         async function getDatos() {
//           try {
//             const res = await apiPrueba.get(``);
//             const data = await res.json();
    
//             // Set the new component state using the data
//             setData(data);
//           } catch (err) {
//             console.log(err);
//           }
//         }
//         getDatos();
//       }, []);
    
//       return (
//         <div className="container">
//           {Object.entries(data).map(([key, value]) => (
//             <div className="item" key={key}>
//               {value}
//              </div>
//            ))}
//          </div>
//        );
      
//     }
    
    
    
//     // You should use getStaticProps when:
//     //- The data required to render the page is available at build time ahead of a user’s request.
//     //- The data comes from a headless CMS.
//     //- The data can be publicly cached (not user-specific).
//     //- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
  

//     export default Contenedor

