// 'use client'

// import React, { useState } from 'react'
// import './styles.css'

// const Background = () => {
  
//   const [animationDuration1, setAnimationDuration1] = useState(Math.random() * 20);
//   console.log(animationDuration1)
//   const [animationDuration2, setAnimationDuration2] = useState(Math.random() * 20);
//   const [animationDuration3, setAnimationDuration3] = useState(Math.random() * 20);
//   const [animationDuration4, setAnimationDuration4] = useState(Math.random() * 20);
//   const [animationDuration5, setAnimationDuration5] = useState(Math.random() * 20);
//   const [animationDuration6, setAnimationDuration6] = useState(Math.random() * 20);
//   const [animationDuration7, setAnimationDuration7] = useState(Math.random() * 20);
//   const [animationDuration8, setAnimationDuration8] = useState(Math.random() * 20);
//   const [animationDuration9, setAnimationDuration9] = useState(Math.random() * 20);
//   const [animationDuration10, setAnimationDuration10] = useState(Math.random() * 20);
//   const [animationDuration11, setAnimationDuration11] = useState(Math.random() * 20);
//   const [animationDuration12, setAnimationDuration12] = useState(Math.random() * 20);
//   const [animationDuration13, setAnimationDuration13] = useState(Math.random() * 20);
//   const [animationDuration14, setAnimationDuration14] = useState(Math.random() * 20);
//   const [animationDuration15, setAnimationDuration15] = useState(Math.random() * 20);
//   const [animationDuration16, setAnimationDuration16] = useState(Math.random() * 20);
//   const [animationDuration17, setAnimationDuration17] = useState(Math.random() * 20);


// return (
//   <div className='screen-container'>
//     <div className='  bubbles-container'>
//     {/* {Array.from({ length: 15 }, (_, index) => {
//       const randrom = (Math.random() + 1) *  6
//       const randomSpead = (Math.random() ) * 20
//       return (
//       <div  style={{
//          top: `${index * 0 }px`, 
//           left: `${(index + 1) *randrom}%`, 
//           width: `${Math.pow(randrom * 0.2, 2)}px`

       
//       }} className='bubble-container '>
//         <div
//         key={animationDuration} 
//         onAnimationEnd={() => {
//           console.log('hi')
//           setAnimationDuration((Math.random() ) * 10)
//           console.log(Math.floor((Math.random() ) * 10))
//         }}
//         className={`bubble box${index+ 1}`}
//         style={{
//           height: `${randrom * 7}px`,
//           width: `${Math.pow(randrom * 0.2, 2)}px` ,
//           animationDuration: `${animationDuration }s`
//         }}
//       />
//       </div>
//     )
//     })} */}
//     <div 
//       key={animationDuration1}
//        onAnimationEnd={() => {
//         console.log('hi')
//         setAnimationDuration1(Math.floor(Math.random() * 20 ))
//     }} 
  
//     className='bubble-container bubble-container1'>
//       <div 
      
//         style={{animationDuration: `${animationDuration1}s`}}
//         className='bubble bubble1 ' />
//     </div>
//     <div
//       key={animationDuration2}
//        onAnimationEnd={() => {

//         setAnimationDuration2(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container2'>
//       <div style={{animationDuration: `${animationDuration2}s`}} className='bubble bubble2 ' />
//     </div>
//     <div 
//         key={animationDuration3}
//        onAnimationEnd={() => {
  
//         setAnimationDuration3(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container3'>
//       <div 
//         style={{animationDuration: `${animationDuration3}s`}} 
//       className='bubble bubble3 ' />
//     </div>
//     {/* <div
//       key={animationDuration4}
//        onAnimationEnd={() => {
 
//         setAnimationDuration4(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container4'>
//       <div style={{animationDuration: `${animationDuration4}s`}}
//         className='bubble bubble4' />
//     </div>
//     <div 
//       key={animationDuration5}
//        onAnimationEnd={() => {
 
//         setAnimationDuration5(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container5'>
//       <div  style={{animationDuration: `${animationDuration5}s`}} className='bubble bubble5' />
//     </div>
//     <div 
//         key={animationDuration6}
//        onAnimationEnd={() => {
 
//         setAnimationDuration6(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container6'>
//       <div style={{animationDuration: `${animationDuration6}s`}} className='bubble bubble6' />
//     </div>
//     <div 
//      key={animationDuration7}
//        onAnimationEnd={() => {
 
//         setAnimationDuration7(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container7'>
//       <div style={{animationDuration: `${animationDuration7}s`}} className='bubble bubble7' />
//     </div>
//     <div
//        key={animationDuration8}
//        onAnimationEnd={() => {
 
//         setAnimationDuration8(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container8'>
//       <div style={{animationDuration: `${animationDuration8}s`}} className='bubble bubble8' />
//     </div>
//     <div   key={animationDuration9}
//        onAnimationEnd={() => {
 
//         setAnimationDuration9(Math.floor(Math.random() * 20 ))
//     }} 
//      className='bubble-container bubble-container9'>
//       <div style={{animationDuration: `${animationDuration9}s`}} className='bubble bubble9' />
//     </div>
//     <div
//        key={animationDuration10}
//        onAnimationEnd={() => {
 
//         setAnimationDuration10(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container10'>
//       <div style={{animationDuration: `${animationDuration10}s`}} className='bubble bubble10' />
//     </div>
//     <div
//        key={animationDuration11}
//        onAnimationEnd={() => {
 
//         setAnimationDuration11(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container11'>
//       <div style={{animationDuration: `${animationDuration11}s`}} className='bubble bubble11' />
//     </div>
//     <div
//        key={animationDuration12}
//        onAnimationEnd={() => {
 
//         setAnimationDuration12(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container12'>
//       <div style={{animationDuration: `${animationDuration12}s`}} className='bubble bubble12' />
//     </div>
//     <div
//        key={animationDuration13}
//        onAnimationEnd={() => {
 
//         setAnimationDuration13(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container13'>
//       <div style={{animationDuration: `${animationDuration13}s`}} className='bubble bubble13' />
//     </div>
//     <div 
//         key={animationDuration14}
//        onAnimationEnd={() => {
 
//         setAnimationDuration14(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container14'>
//       <div style={{animationDuration: `${animationDuration14}s`}} className='bubble bubble14' />
//     </div>
//     <div 
//         key={animationDuration15}
//        onAnimationEnd={() => {
 
//         setAnimationDuration15(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container15'>
//       <div style={{animationDuration: `${animationDuration15}s`}} className='bubble bubble15' />
//     </div>
//     <div
//         key={animationDuration16}
//        onAnimationEnd={() => {
 
//         setAnimationDuration16(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container16'>
//       <div style={{animationDuration: `${animationDuration16}s`}} className='bubble bubble16' />
//     </div>
//     <div 
//         key={animationDuration17}
//        onAnimationEnd={() => {
 
//         setAnimationDuration17(Math.floor(Math.random() * 20 ))
//     }} 
//     className='bubble-container bubble-container17'>
//       <div style={{animationDuration: `${animationDuration17}s`}} className='bubble bubble17' />
//     </div> */}
    
   
//   </div>
//   </div>
// );
// }

// export default Background
'use client'

import React, { useState, useEffect } from 'react';
import './styles.css';

const Background = () => {

  const [animationDurations, setAnimationDurations] = useState(
    Array.from({ length: 17 }, () => Math.random() * 20)
  );
  const [completedCount, setCompletedCount] = useState(0); 

  const handleAnimationEnd = (index: number) => {
    setCompletedCount((prev) => prev + 1);

    const newDurations = [...animationDurations];
    newDurations[index] = Math.floor(Math.random() * 20) + 1; 
    setAnimationDurations(newDurations);
    console.log(animationDurations)
  };

  useEffect(() => {
 
    if (completedCount === 17) {

      setCompletedCount(0);
    }
  }, [completedCount]);

  return (
    <div className='screen-container'>
      <div className='bubbles-container'>
        {animationDurations.map((duration, index) => (
          <div
            key={`${index}-${duration}`} 
            onAnimationIteration={() => handleAnimationEnd(index)} 
            className={`bubble-container bubble-container${index + 1}`}
          >
            <div
              style={{ animationDuration: `${duration}s` }}
              className={` bubble${index + 1} ${index % 2 == 0 ? 'bubble' : 'bubble-reverse'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
