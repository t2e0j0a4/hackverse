import React, { useEffect, useState } from 'react'
import "./Registration.css";
import RegisterSection from '../../components/RegisterSections/RegisterSection'

const Registration = () => {

  const [completedSections, setCompletedSections] = useState({
    firstSec: false,
    secondSec: false,
    thirdSec: false
  });

  // User Details - Section 1

  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const validateUserDetails = (e) => {
    e.preventDefault();
    setCompletedSections({
      ...completedSections, firstSec: true
    });
  }

  // Other Details - Section 2

  const [otherDetails, setOtherDetails] = useState({
    bio: '',
    school: '',
    degree: '',
    endYear: '',
    startYear: '',
    fieldOfStudy: '',
  })

  const changeOtherDetails = (e) => {
    setOtherDetails({...otherDetails, [e.target.name]: e.target.value});
  }

  const validateOtherDetails = (e) => {
    e.preventDefault();
    setCompletedSections({
      ...completedSections, secondSec: true
    });
  }

  // Intrests - Section 3

  const [userIntrests, setUserIntrests] = useState([]);
  const [userInputsInText, setUserInputsInText] = useState('');

  useEffect(() => {
    setUserIntrests(() => userInputsInText.split(',').map((item) => item.trim()));
  }, [userInputsInText]);

  return (
    <main className="app__register">
      <h1>Register</h1>
      <RegisterSection firstSectionInfo={completedSections.firstSec} secondSectionInfo={completedSections.secondSec} thirdSectionInfo={completedSections.thirdSec} />

      {
        (completedSections.secondSec === false && completedSections.firstSec === false && completedSections.thirdSec === false) && (
          <form className="register__section" onSubmit={(e) => {validateUserDetails(e)}}>
            <input required type="text" name="fullName" placeholder="Full Name*" value={userDetails.fullName} onChange={(e) => {setUserDetails({...userDetails, [e.target.name]: e.target.value})}} />      
            <input required type="email" name="email" placeholder="Email*" value={userDetails.email} onChange={(e) => {setUserDetails({...userDetails, [e.target.name]: e.target.value})}} />      
            <input required type="password" name="password" placeholder="Password*" value={userDetails.password} onChange={(e) => {setUserDetails({...userDetails, [e.target.name]: e.target.value})}} />
            <button type="submit">Next</button>
          </form>
        )
      }

      {
        (completedSections.firstSec && completedSections.secondSec === false) && (
          <form className="register__section" onSubmit={(e) => {validateOtherDetails(e)}}>
            <input name="school" type="text" value={otherDetails.school} onChange={(e) => {changeOtherDetails(e)}}  placeholder="School" />
            <input name="degree" type="text" value={otherDetails.degree} onChange={(e) => {changeOtherDetails(e)}}  placeholder="Degree" />
            <input name="fieldOfStudy" type="text" value={otherDetails.fieldOfStudy} onChange={(e) => {changeOtherDetails(e)}}  placeholder="Field of Study"/>
            <div className="year">
              <input name="startYear" type="text" value={otherDetails.startYear} onChange={(e) => {changeOtherDetails(e)}}  placeholder="Start Year" />
              <input name="endYear" type="text" value={otherDetails.endYear} onChange={(e) => {changeOtherDetails(e)}}  placeholder="End Year" />
            </div>
            <textarea name="bio" placeholder="About yourself" value={otherDetails.bio} onChange={(e) => {changeOtherDetails(e)}} ></textarea> 
            <button type="submit">Next</button>
          </form>
        )
      }

      {
        (completedSections.firstSec && completedSections.secondSec) && (
          <form className="user__intrests">
            <div className='all__intrests'>
              {
                (userIntrests.length > 1) && (
                  userIntrests.map((item, index) => {
                    return <span key={index}>{item}</span>
                  })
                )
              }
            </div>
            <div>
              <input type="text" name="intrests" placeholder="Your Intrests" value={userInputsInText} onChange={(e) => {
                setUserInputsInText(e.target.value);
              }}/>
              <p>Enter comma seperated</p>
            </div>
            <button type="submit">Register</button>
          </form>
        )
      }
      
    </main>
  )
}

export default Registration