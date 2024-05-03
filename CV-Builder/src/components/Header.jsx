import React, { useState } from 'react'
import "../styles/Header.css"

function Header({isEditable, setIsEditable}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phNum, setPhNum] = useState("")  

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditable(!isEditable)
  }

  return (
    <header>
        {isEditable ? (
            <form className='wrapper' onSubmit={handleSubmit}>
                <div className='header-ctn1'>
                    <input type="text"
                        className='input-name' 
                        placeholder='Name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <div className='input-person-details'>
                        <input required className='input-add' type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <input required className='input-ph' type="tel" placeholder='Ph Number' value={phNum} onChange={(e) => setPhNum(e.target.value)}/>
                        <input required className='input-email' type="email" placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='header-ctn2'>
                    <button type='submit' className='toggle-btn'><img src="/file-eye.svg" alt="view" width={30} /></button>    
                </div>
            </form>
        ) : (
            <div className='wrapper'>
               <div className='header-ctn1'>
                    <h1>{name}</h1>
                    <div className='input-person-details'>
                        <h2>{address}</h2>
                        <h2>{phNum}</h2>
                        <h2>{email}</h2>
                    </div>
                </div>
                <div className='header-ctn2'>
                    <button className='toggle-btn' onClick={handleSubmit}><img src="/file-edit.svg" alt="edit" width={30} /></button>
                    <button className='print-btn'><img src="/printer.svg" alt="print" width={30} /></button>   
                </div> 
            </div>
        ) }
    </header>
  )
}

export default Header