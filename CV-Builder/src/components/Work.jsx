import React, { useState } from 'react'
import "../styles/Work.css"

function Work({isEditable}) {

  const [workHistories, setWorkHistories] = useState([
    {
      id: Date.now(),
      startDate: "May 2018",
      endDate: "May 2020",
      role: "Software Engineer",
      company: "Digital solutions xyz",
      location: "Kolkata",
      exp1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rerum.",
      exp2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, natus provident! Architecto ab quidem eveniet magnam, sed illo quisquam expedita itaque quae excepturi doloremque quasi.",
      exp3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem numquam itaque vitae veniam fugit nemo?",
    }
])

  const updateWorkHistories = (id, workToUpdate) => {
    setWorkHistories((prevWorkHistories) => (prevWorkHistories.map((eachWork) => eachWork.id === id ? workToUpdate : eachWork)))
  }
  
  const modifyCurrentObj = (currObj, propertyToMod, e) => ({...currObj, [propertyToMod]: e.target.value})

  return (
    <section className='work-section'>
      <h3>WORK HISTORY</h3>
      <div className="work-card-ctn">
        {workHistories.map((prevWork) => (
          <div key={prevWork.id} className="work-card">
            {isEditable ? 
            <>
              <div className="work-dates-ctn">
                <div>
                  <label htmlFor="startDate">Start Date:</label>
                  <input type="date" 
                         id="startDate" 
                         value={prevWork.startDate} 
                         onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "startDate", e))}  />
                </div>
                <div>
                  <label htmlFor="endDate">End Date:</label>
                  <input type="date" id="endDate" />
                </div>
                <div>
                  <label htmlFor="currentDate">Present: </label>
                  <input type="checkbox" id="currentDate" />
                </div>
              </div>
              <div className="work-company-ctn">
                <div>
                  <label htmlFor="workRole">Role: </label>
                  <input type="text" id="workRole" />
                </div>
                <div>
                  <label htmlFor="companyName">Organization: </label>
                  <input type="text" id="companyName" />
                </div>
                <div>
                  <label htmlFor="location">Location:</label>
                  <input type="text" id="location" />
                </div>
              </div>
              <div className='work-info'>
                <p>Job Description/Achievements and Accomplishments:</p>
                <textarea className='work-desc-textarea' placeholder='Description1'></textarea>
                <textarea className='work-desc-textarea' placeholder='Description2'></textarea>
                <textarea className='work-desc-textarea' placeholder='Description3'></textarea>
              </div>
              
            </> 
            : "false"} 
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work