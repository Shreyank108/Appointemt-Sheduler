import React from 'react'
const Middle = ({SubmitHandler,name,setname,mail,setmail,contact,setcontact,time,settime,setdate,date}) => {

    
  return (
    <>
            <div id="sec_input">
             <form onSubmit={SubmitHandler}>
                <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder='Name' />
                <input onChange={(e)=>setmail(e.target.value)} value={mail} type="text" placeholder='Email' />
                <input onChange={(e)=>setcontact(e.target.value)} value={contact} type="text" placeholder='Contact' />
                <input onChange={(e)=>settime(e.target.value)} value={time} type="text" placeholder='Time'/>
                <input onChange={(e)=>setdate(e.target.value)} value={date} type="text" placeholder='Date'/>
                <button><p><b>Submit Data Here</b></p></button>
             </form>
        </div>
        <div id="sec2">
              <p><b>Name</b></p>
              <p><b>Email</b></p>
              <p><b>Contact</b></p>
              <p><b>Time</b></p>
              <p><b>Date</b></p>
        </div></>
  )
}

export default Middle
