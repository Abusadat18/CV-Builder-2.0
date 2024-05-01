import React, { useState } from 'react'
import "../styles/Summary.css"

function Summary({isEditable}) {

  const [about, setAbout] = useState("")

  return (
    <section className='about-section'>
      <h3>PROFESSIONAL SUMMARY</h3>
      {isEditable ? 
        <textarea className='about-textarea' rows="10" value={about} onChange={(e) => setAbout(e.target.value)} >

        </textarea> 
        : 
        <p>{about}</p>}
    </section>
  )
}

export default Summary