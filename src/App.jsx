import React from 'react'

const App = () => {
 
  const SubmitHandler=(e)=>{ 
    e.preventDefault()
  }

  return (
  <div id="main">
        <div id="counter">
              <div id="one">
                <h2>Yet to Appoint</h2>
              </div>
              <div id="two">
              <h1>4</h1> <h1><b>/</b></h1> <h1>10</h1>
              </div>
          
        </div>
        <div id="sec1">
          <h1>Appointment Sheduler</h1>
        </div>
        <div id="sec_input">
             <form onSubmit={SubmitHandler}>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Contact' />
                <input type="text" placeholder='Time'/>
                <input type="text" placeholder='Date'/>
             </form>
        </div>
        <div id="sec2">
              <p><b>Name</b></p>
              <p><b>Email</b></p>
              <p><b>Contact</b></p>
              <p><b>Time</b></p>
              <p><b>Date</b></p>
        </div>
        <div id="sec3">
              <div id="extra_prop">
                  <div id="prop">
                    <p><b>Shreyank Agrawal</b></p>
                    <p><b>shreyank@123</b></p>
                    <p><b>74294234</b></p>
                    <p><b>6:00 pm</b></p>
                    <p><b>16 May</b></p>
                  </div>
                  <div id="prop1">
                    <div id="checkbox"></div>
                  </div>
              </div>
        
        </div>
  </div>
  )
}

export default App
 