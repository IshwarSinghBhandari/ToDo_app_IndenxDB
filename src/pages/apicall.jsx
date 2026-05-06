import React, { useEffect, useState } from 'react'

 function  Apicall() {
 const [data,setData]=useState([])
  useEffect(() => {
   async function fetchData() {
      try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
      const data = await res.json()
      setData(data)
    }
    catch(err){
      console.log("err--",err)
    }
  }
  fetchData()
  },[])

  useEffect(() => {
    async function postData() {
       try{
         const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title: "My Post",
                body: "Hello",
                userId: 1,
            })
       })
       
       const data = await res.json()
    console.log("res--",data)
    }catch(err){
         console.log("err--",err)
       }
    }
    postData()
    },[])
useEffect(() => {
  async function deleteData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });

      const data = await res.json();
      console.log("deleted response--", data);

    } catch (err) {
      console.log("err--", err);
    }
  }

  deleteData();
}, []);
  return (
  <div className="container mx-auto p-4 flex flex-wrap gap-4">
     {Array.isArray(data)?(
      data.map((item) => (
        <div key={item.id} className="border border-default rounded-base p-4 mb-4 w-1/3 bg-mauve-600 text-white" >
          <p className="form-label text-2xl">{item.userId}</p>
          <h1 className="text-[18px] ">{item.title}</h1>
          <p className={`form-label text-[16px] ${item.completed ? 'text-green-600' : 'text-red-600'}`}>
            {String(item.completed)}
          </p>
        </div>
      ))
    ):(
     
        <div key={data.id}>
          <p className="form-label">{data.userId}</p>
          <h1>{data.title}</h1>
          <p className={`form-label text-[16px] ${data.completed ? 'text-green-600' : 'text-red-600'}`}>
            {String(data.completed)}
          </p>
        </div>
    )
     }
  </div>
  )
}

export default Apicall