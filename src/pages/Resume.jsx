import React from 'react'

//The resume page has a link to download the resume and an image of the resume
const Resume = () => {
  return (
    <div className="row">
    <div className='w-100'>
      <a href ="./assets/Resume_3-03-2024.pdf" attributes-list download > Download Resume PDF </a>  
      <img src="./assets/Resume_3-03-2024.jpg" className="w-100 mt-4 float-end imgshadow" alt="Sawyer Baldwin Resume"/>
      
    </div>
    </div>
  )
}

export default Resume