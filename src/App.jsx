import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const App = () => {
   
   const [appoint, setappoint]=useState(
    
    JSON.parse(localStorage.getItem('appointments'))
    || 
    []

   )

   const[name,setname]=useState("")
   const[mail,setmail]=useState("")
   const[contact,setcontact]=useState("")
   const[time,settime]=useState("")
   const[date,setdate]=useState("")

  const SubmitHandler=(e)=>{ 
    e.preventDefault() 
  const newlist= {id:nanoid(),name,mail,contact,time,date,completed:false} 
    setappoint([...appoint,newlist]) 
    setname("")
    setcontact("")
    setdate("")
    setmail("")
    settime("") 
    
    localStorage.setItem("appointments",JSON.stringify([...appoint,newlist]))

  }
  console.log(appoint);
  
  const CompleteHandler=(index)=>{  
        const copyappoint =[...appoint] 
        copyappoint[index].completed = !copyappoint[index].completed; 
        setappoint(copyappoint) 
        localStorage.setItem("appointments",JSON.stringify(copyappoint))
  }
  const DeleteHandler = (index)=>{ 
         const copyappoint =[...appoint] 
         copyappoint.splice(index,1) 
         setappoint(copyappoint) 
         localStorage.setItem("appointments",JSON.stringify(copyappoint))
  }
  const incompleteCount = appoint.filter(a => !a.completed).length
  return (
  <div id="main">
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
        <div id="sec_input">
             <form onSubmit={SubmitHandler}>
                <input onChange={(e)=>setname(e.target.value)} type="text" placeholder='Name' />
                <input onChange={(e)=>setmail(e.target.value)} type="text" placeholder='Email' />
                <input onChange={(e)=>setcontact(e.target.value)} type="text" placeholder='Contact' />
                <input onChange={(e)=>settime(e.target.value)} type="text" placeholder='Time'/>
                <input onChange={(e)=>setdate(e.target.value)} type="text" placeholder='Date'/>
                <button><p><b>Submit Data Here</b></p></button>
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
          {appoint.length >0 ? ( 
            appoint.map((i,index)=>{  
              return (
                <div id="extra_prop">
                <div id="prop">
                  <p><b>{i.name}</b></p>
                  <p><b>{i.mail}</b></p>
                  <p><b>{i.contact}</b></p>
                  <p><b>{i.time}</b></p>
                  <p><b>{i.date}</b></p>
                </div>
                <div id="prop1">
                  <div 
                   onClick={()=>CompleteHandler(index)} 
                   style={{ backgroundColor: i.completed ? 'green' : 'orange' }}
                  id="checkbox"></div> 
                  <div 
                   onClick={()=>DeleteHandler(index)}
                  id="deletebox">
                    <p><b>🍭</b></p>
                  </div>
                </div>
            </div>
              )
             
            })
              
          ): ( 
            <h1>No Appoint Sheduled</h1>
          )}
            
        
        </div>
  </div>
  )
}

export default App
 