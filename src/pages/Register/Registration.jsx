import React from 'react'
import "./Registration.css";
import RegisterSection from '../../components/RegisterSections/RegisterSection'

const Registration = () => {

  const [completedSections, setCompletedSections] = useState({
    first: false,
    second: false
  })

  return (
    <main className="app__register">
      <h1>Register</h1>
      <RegisterSection/>
      <section className="register__section">
        
      </section>
    </main>
  )
}

export default Registration