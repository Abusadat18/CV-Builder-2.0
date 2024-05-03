import React, { useState } from 'react'
import "../styles/Education.css"

function Education({isEditable}) {

  const [eduHistory, setEduHistory] = useState([{id: 10}])

const addEduInHistory = (eduObj) => {
  setEduHistory((prevEduHistory) => [...prevEduHistory,eduObj])
}

const updateEduHistory = (id, eduToUpdate) => {
  setEduHistory((prevEduHistory) => (prevEduHistory.map((eachEdu) => eachEdu.id === id ? eduToUpdate : eachEdu)))
}

const deleteFromEduHistory = (id) => {
  setEduHistory((prevEduHistory) => (prevEduHistory.filter((eachEdu) => eachEdu.id === id ? false : true)))
}

const modifyCurrentObj = (currObj, propertyToMod, e) => ({...currObj, [propertyToMod]: e.target.value})

  return (
    <section className='education-section'>
      <h3>EDUCATION</h3>
      <div className="education-cards-ctn">
        {eduHistory.map((prevEdu) => (
          <div key={prevEdu.id} className="education-card">
            {isEditable ? 
            <>
              <div className="edu-dates-ctn">
                <div>
                  <label htmlFor="eduStartDate">Start Date: </label>
                  <input type="date" 
                         id="eduStartDate"
                         value={prevEdu.startDate}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "startDate",e))} />
                </div>
                <div>
                  <label htmlFor="eduEndDate">End Date: </label>
                  <input type="date" 
                         id="eduEndDate"
                         value={prevEdu.endDate}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "endDate",e))}
                         disabled={prevEdu.eduStatus}/>
                </div>
                <div>
                  <label htmlFor="isEduActive">Present: </label>
                  <input type="checkbox" 
                         id="isEduActive"
                         checked={prevEdu.eduStatus}
                         onChange={(e) => {
                          let checkBox = e.target;
                          checkBox.checked = !prevEdu.eduStatus;
                          updateEduHistory(prevEdu.id,{...prevEdu, eduStatus: checkBox.checked})
                          }
                        } />
                </div>
              </div>
              <div className="edu-about-ctn">
                <div>
                  <label htmlFor="degreeName">Degree/Course: </label>
                  <input type="text" 
                         id="degreeName"
                         value={prevEdu.degreeName}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "degreeName",e))} />
                </div>
                <div>
                  <label htmlFor="subjectName">Subject: </label>
                  <input type="text" 
                         id="subjectName"
                         value={prevEdu.subject}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "subject",e))} />
                </div>
              </div>
              <div className="edu-college-ctn">
                <div>
                  <label htmlFor="eduClgName">School/College/University: </label>
                  <input type="text" 
                         id="eduClgName" 
                         value={prevEdu.university}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "university",e))}/>
                </div>
                <div>
                  <label htmlFor="eduClgLocation">Location: </label>
                  <input type="text" 
                         id="eduClgLocation" 
                         value={prevEdu.location}
                         onChange={(e) => updateEduHistory(prevEdu.id, modifyCurrentObj(prevEdu, "location",e))}/>
                </div>
              </div>
              <button className='workCard-close'
                      onClick={() => deleteFromEduHistory(prevEdu.id)}>
                <img src="/close-circle.svg" alt="close btn" width={30} />
              </button>
            </> : 
            <>
              <p className='edu-preview-dates'>{prevEdu.startDate} to {prevEdu.eduStatus ? "Present" : prevEdu.endDate}</p>
              <p><span className='edu-preview-degree'>{prevEdu.degreeName}: </span>{prevEdu.subject}</p>
              <p>{prevEdu.university}, {prevEdu.location}</p>
            </>}
          </div>
        ))}
        {isEditable ? 
          <button className="add-edu-btn" onClick={() => addEduInHistory({id: Date.now()})}>Add Education</button> 
          : null }
      </div>
    </section>
  )
}

export default Education