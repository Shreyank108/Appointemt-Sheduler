import React from 'react'

const Header = ({appoint}) => {
    
    const incompleteCount = appoint.filter(a => !a.completed).length
  return (
    <>
         <div id="counter">
              <div id="one">
                <h2>Yet to Appoint</h2>
              </div>
              <div id="two">
              <h1>
              {incompleteCount}
                </h1> <h1><b>/</b></h1> <h1>{appoint.length}</h1>
              </div>
          
        </div>
        <div id="sec1">
          <h1>Appointment Sheduler</h1>
        </div>
    </>
  )
}

export default Header
