import React, { useState } from 'react'
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'
const App = () => {
   
  const[name,setname]=useState("")
  const[mail,setmail]=useState("")
  const[contact,setcontact]=useState("")
  const[time,settime]=useState("")
  const[date,setdate]=useState("")
 

   const [appoint, setappoint]=useState(
    
    JSON.parse(localStorage.getItem('appointments'))
    || 
    []

   )


   const SubmitHandler = (e) => {
    e.preventDefault();
    const newlist = {
      id: nanoid(),
      name,
      mail,
      contact,
      time,
      date,
      completed: false
    };
    setappoint([...appoint, newlist]);
    setname("");
    setmail("");
    setcontact("");
    settime("");
    setdate("");
  
    localStorage.setItem("appointments", JSON.stringify([...appoint, newlist]));
  };


  return (
  <div id="main">
           <Header 
            setappoint={setappoint}
            appoint={appoint}
           />
           
           <Middle
            setappoint={setappoint}
            appoint={appoint}
            mail={mail}
            setmail={setmail}
            name={name}
            setname={setname}
            contact={contact}
            setcontact={setcontact}
            time={time}
            settime={settime}
            date={date}
            setdate={setdate}
            SubmitHandler={SubmitHandler}

           />

        <Footer
           appoint={appoint}
           setappoint={setappoint}
           setmail={setmail}
            name={name}
            setname={setname}
            contact={contact}
            setcontact={setcontact}
            time={time}
            settime={settime}
            date={date}
            setdate={setdate}
        />
  </div>
  )
}

export default App
 