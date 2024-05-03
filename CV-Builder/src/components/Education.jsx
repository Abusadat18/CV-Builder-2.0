import React, { useState } from 'react'
import "../styles/Education.css"

function Education({isEditable}) {

  const [eduHistory, setEduHistory] = useState([
    {
      id: 1,
      startDate: "",
      endDate: "",
      eduStatus: false,
      degreeName: "Bachelor of Science",
      subject: "Computer Science",
      university: "NIT Durgapur",
      location: "Durgapur"
    }
])

const updateEduHistory = (id, eduToUpdate) => {
  setEduHistory((prevEduHistory) => (prevEduHistory.map((eachEdu) => eachEdu.id === id ? eduToUpdate : eachEdu)))
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
            </> : "false"}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education