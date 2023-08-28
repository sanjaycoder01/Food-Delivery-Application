// const Shimmer = () => {
//   return (
//     <div className="grid grid-cols-4 gap-5 rounded">
//       {Array(10)
//         .fill('')
//         .map((e, index) => (
//           <div key={index} className="w-200 h-200 bg-lightgray m-20"></div>
//         ))}
//     </div>
//   )
// }

// export default Shimmer
const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-5 rounded">
      {Array(10)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="w-200px h-200px bg-lightgray m-20 shimmer"
          ></div>
        ))}
    </div>
  )
}

export default Shimmer

// {
//   "presets": [
//     ["@babel/preset-env", { "targets": { "node": "current" } }],
//     ["@babel/preset-react", { "runtime": "automatic" }]
//   ]
// }
