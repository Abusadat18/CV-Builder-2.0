import React, { useState } from 'react'
import "../styles/Header.css"

function Header({isEditable, setIsEditable}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phNum, setPhNum] = useState("")  

  return (
    <header>
        {isEditable ? (
            <>
                <div className='header-ctn1'>
                    <input type="text"
                        className='input-name' 
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <button className='toggle-btn' onClick={() => setIsEditable(!isEditable)}>Preview</button>
                </div>
                <div className='header-ctn2'>
                    <input className='input-add' type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <input className='input-ph' type="tel" placeholder='Ph Number' value={phNum} onChange={(e) => setPhNum(e.target.value)}/>
                    <input className='input-email' type="email" placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </>
        ) : (
            <>
               <div className='header-ctn1'>
                    <h1>{name}</h1>
                    <button className='toggle-btn' onClick={() => setIsEditable(!isEditable)}>Edit</button>
                </div>
                <div className='header-ctn2'>
                    <h2>{address}</h2>
                    <h2>{phNum}</h2>
                    <h2>{email}</h2>
                </div> 
            </>
        ) }
    </header>
  )
}

export default Header