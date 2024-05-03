import React, { useState } from 'react'
import "../styles/Work.css"

function Work({isEditable}) {

  const [workHistories, setWorkHistories] = useState([
    {
      id: 2,
      startDate: "May 2018",
      endDate: "May 2020",
      jobStatus: false,
      role: "Software Engineer",
      company: "Digital solutions xyz",
      location: "Kolkata",
      exp1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, rerum.",
      exp2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, natus provident! Architecto ab quidem eveniet magnam, sed illo quisquam expedita itaque quae excepturi doloremque quasi.",
      exp3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem numquam itaque vitae veniam fugit nemo?",
    },
])

  const addWorkInHistory = (workObj) => {
    setWorkHistories((prevWorkHistories) => [...prevWorkHistories,workObj])
  }

  const updateWorkHistories = (id, workToUpdate) => {
    setWorkHistories((prevWorkHistories) => (prevWorkHistories.map((eachWork) => eachWork.id === id ? workToUpdate : eachWork)))
  }

  const deleteFromWorkHistory = (id) => {
    setWorkHistories((prevWorkHistories) => (prevWorkHistories.filter((eachWork) => eachWork.id === id ? false : true)))
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
                  <input type="date" 
                         id="endDate"
                         value={prevWork.endDate}
                         onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "endDate", e))} 
                         disabled={prevWork.jobStatus}/>
                </div>
                <div>
                  <label htmlFor="currentDate">Present: </label>
                  <input type="checkbox" 
                         id="currentDate"
                         checked={prevWork.jobStatus}
                         onChange={(e) => {
                          let checkBox = e.target;
                          checkBox.checked = !prevWork.jobStatus;
                          updateWorkHistories(prevWork.id,{...prevWork, jobStatus: checkBox.checked})
                          }
                        } />
                </div>
              </div>
              <div className="work-company-ctn">
                <div>
                  <label htmlFor="workRole">Role: </label>
                  <input type="text" 
                         id="workRole" 
                         value={prevWork.role}
                         onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "role", e))}/>
                </div>
                <div>
                  <label htmlFor="companyName">Organization: </label>
                  <input type="text" 
                         id="companyName"
                         value={prevWork.company}
                         onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "company", e))} />
                </div>
                <div>
                  <label htmlFor="location">Location: </label>
                  <input type="text" 
                         id="location"
                         value={prevWork.location}
                         onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "location", e))} />
                </div>
              </div>
              <div className='work-info'>
                <p>Job Description/Achievements and Accomplishments:</p>
                <textarea className='work-desc-textarea' 
                          placeholder='Description1'
                          value={prevWork.exp1}
                          onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "exp1", e))}></textarea>
                <textarea className='work-desc-textarea' 
                          placeholder='Description2'
                          value={prevWork.exp2}
                          onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "exp2", e))}></textarea>
                <textarea className='work-desc-textarea' 
                          placeholder='Description3'
                          value={prevWork.exp3}
                          onChange={(e) => updateWorkHistories(prevWork.id,modifyCurrentObj(prevWork, "exp3", e))}></textarea>
              </div>
              <button className='workCard-close'
                      onClick={(e) => deleteFromWorkHistory(prevWork.id)}>
                <img src="/close-circle.svg" alt="close btn" width={30} />
              </button>
            </> 
            : 
            <>
              <p className='work-preview-dates'>{prevWork.startDate} to {prevWork.jobStatus ? "Present" : prevWork.endDate}</p>
              <p className='work-preview-jobAbout'><span className='work-preview-jobRole'>{prevWork.role}</span> | {prevWork.company} | {prevWork.location}</p>
              <ul className='work-preview-descriptions'>
                <li>{prevWork.exp1}</li>
                <li>{prevWork.exp2}</li>
                <li>{prevWork.exp3}</li>
              </ul>
            </>}
          </div>
        ))}
          {isEditable ? 
          <button className="add-work-btn" onClick={() => addWorkInHistory({id: Date.now()})}>Add Work</button> 
          : null }
      </div>
    </section>
  )
}

export default Work