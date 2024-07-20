import React from 'react'

function SlideTrack({className}) {
    const images = [
        "html",
        "css",
        "js",
        "next",
        "react",
        "tailwind",
        "nodejs",
        "mongodb",
        "express",
        "firebase",
        "appwrite",
        "vscode",
        "git",
        "aws",
        "java",
        "typescript"
      ];
  return (
    <div id="logos" className={`w-full  p-2 rounded-2xl ${className}`}>
           <div className="grid grid-cols-4 gap-3">
             {images.map((i, index) => (
               <img key={index} src={`https://skillicons.dev/icons?i=${i}`} alt="" className='w-20 h-20 hover:scale-125  ' title={i.toUpperCase()} />
              ))}
            </div>
     </div>
     )
}

export default SlideTrack