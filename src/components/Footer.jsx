import React from 'react'
const Footer = ({appoint,setappoint}) => {

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
  return (
   <>
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
            
        
        </div></>
  )
}

export default Footer
