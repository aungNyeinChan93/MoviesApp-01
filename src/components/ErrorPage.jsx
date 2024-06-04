import React from 'react'

const ErrorPAge = () => {
  return (
    <div style={{minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"green",
        margin:"10px auto",
        borderRadius:"10px"
    }} className='ErrorPAge container mx-auto '>
        <h1 className='text-red-800 text-9xl'>404 Not Found </h1>
    </div>
  )
}

export default ErrorPAge
