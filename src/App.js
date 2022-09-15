import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')
  const [age, setage] = useState('')
  const [date, setdate] = useState()
  const [gender, setgender] = useState('')
  const [data, setdata] = useState([])
  var [id1, setid1] = useState(1)

  


  // useEffect(()=>{
  //   submithandler()


  // },[])



  

  const submithandler=(e)=>{
    e.preventDefault()
    
    setid1(prev=>id1+1)
    let Gender
    // const Date1=date.toString()
    // console.log(Date1)
    // const Age=age.toString()
    
    console.log(date,age,gender)
    if(gender==2){
      Gender='female'
    }
    else if(gender==3){
      Gender='male'
    }
    else{
      Gender='other'
    }
    const obj={
      name:name,
      age:age,
      Gender:Gender,
      date:date,
      id1:id1




    }

    console.log(obj)
    

    
    // let data1=[]
    // data1.push(obj)
    
    
    
    console.log(data)
    setdata([...data,obj])
    console.log(data)
    localStorage.setItem('data',JSON.stringify(data))
    setname('')
    setage('')
    setdate('') 
    setgender('')
    
    


    
    
    
  }


// let data1
//   if (localStorage.getItem("data") === null) {
//     data1 = [];
//   }
//   else {
//     data1 = JSON.parse(localStorage.getItem("data"));
//   }

  // const data1=JSON.parse(localStorage.getItem('data'))
  // console.log(data1)


  
  
  
  const deletehandler=(id1)=>{
    console.log('deletd')
    console.log(id1)
    const data1 = JSON.parse(localStorage.getItem("data"));
    console.log(typeof(data1) )

    
    
    const updatedItems = data.filter((elem) => {
      console.log(elem.id1,id1)
      return elem.id1 !== id1;
    })

    setdata(updatedItems)
    
    localStorage.setItem('data',JSON.stringify(data))
    
    console.log(updatedItems)
    console.log(data)
    
    
  }
  
  useEffect(()=>{
    const data1 = JSON.parse(localStorage.getItem("data"));
    console.log(data1)
    if(data1){
      setdata(data1)

    }

    else{
      setdata([])
    }
    console.log(data1)
    



  },[])

  return (
    <div>

      
<section className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
         
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Information</h3>

            <form className="px-md-2">

              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="Number" id="form3Example1q" className="form-control" placeholder='Number' value={age} onChange={(e)=>{setage(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Age</label>
              </div>
              <div className="form-outline mb-4">
                <input type="date" id="form3Example1q" className="form-control" value={date} placeholder='Date' onChange={(e)=>{setdate(e.target.value)}}/>
                <label className="form-label" for="form3Example1q">Date of Birth</label>
              </div>

              
              <div className="form-outline mb-4">
              <select className="select" onChange={(e)=>{setgender(e.target.value)}}>
                    <option value="1" disabled>Gender</option>
                    <option value="2">Female</option>
                    <option value="3">Male</option>
                    <option value="4">Other</option>
                  </select>
             
              </div>
              

             




              <button onClick={submithandler}type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      

 
{ data&&
  data.map((elem,li)=>{
    return(
      <div key={elem.id1}>
        
< table className="table" >
  <thead>
    <tr>
      <th scope="col">{li+1}</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">gender</th>
      <th scope="col">date</th>
      <th scope="col">delete</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td >{elem.name}</td>
      <td  >{elem.age}</td>
      <td  >{elem.Gender}</td>
      <td >{elem.date}</td>
      <td> 

      <i  onClick={()=>{deletehandler(elem.id1)}} class="bi bi-trash3-fill"></i>
      </td>
      {/* onClick={deletehandler(id)} */}
      
    </tr>
   </tbody>

 
</table>
        
      </div>
    )

  })
}   

{/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table> */}


    </div>
  )
}

export default App