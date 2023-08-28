// import React, { useState } from 'react'

// const Section = ({ title, description, isVisible, setVisible }) => {
//   return (
//     <div className="text-3xl p-3 m-3 border border-black">
//       <h4 className="font-bold text-xl">{title}</h4>
//       {isVisible ? (
//         <button
//           onClick={() => setVisible(false)}
//           className="cursor-pointer underline"
//         >
//           hide
//         </button>
//       ) : (
//         <button
//           onClick={() => setVisible(true)}
//           className="cursor-pointer underline"
//         >
//           show
//         </button>
//       )}

//       {isVisible && <h4>{description}</h4>}
//     </div>
//   )
// }

// const Instamart = () => {
//   const [visible, setisvisible] = useState('about')
//   return (
//     <div>
//       <Section
//         title={'about Instamart'}
//         description={'This is the section part of about Instamart'}
//         isVisible={visible === 'about'}
//         setVisible={() => setisvisible('about')}
//       />
//       <Section
//         title={'about Instamart'}
//         description={'This is the team part of about Instamart'}
//         isVisible={visible === 'team'}
//         setVisible={() => setisvisible('team')}
//       />
//       <Section
//         title={'about Instamart'}
//         description={'This is the team aasss part of about Instamart'}
//         isVisible={visible === 'product'}
//         setVisible={() => setisvisible('product')}
//       />
//     </div>
//   )
// }
// export default Instamart
