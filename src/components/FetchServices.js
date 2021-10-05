//var axios=require("axios")

const BaseURL="https://www.getpostman.com/collections/6eb5d7b53fd045b650ac"

const postData=async(url,body)=>{
  var response=await fetch(`${BaseURL}/${url}`,{
  method:"POST",
  mode:"cors",
  headers:{
 "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hYXJvZ3lhaW5kaWEuaW5cL3RyYWZpa3NvbFwvcHVibGljXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTU5OTEyMzA1MiwiZXhwIjoxNjAxNzE1MDUyLCJuYmYiOjE1OTkxMjMwNTIsImp0aSI6IlJQVmttMHhmcFRzZHpHaGoiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.DFp2qevRXpL5DKJNSyrryVAnGD0BWXm-GiMVQeNq5LQ",
  // "Authorization": "Bearer " + token,
   "Content-Type": "application/json; charset=utf-8"},
   body:JSON.stringify(body)})
   var result=await response.json()
return result
}

// const postData1=async(url,body)=>{
//   let rec=JSON.parse(localStorage.getItem('LOGIN'))
//  console.log(rec)
//  let token=rec.data.token;

//   var response=await fetch(`${BaseURL}/${url}`,{
//   method:"POST",
//   mode:"cors",
//   headers:{
//    "Authorization": "Bearer " + token,
//    "Content-Type": "application/json; charset=utf-8"},
//    body:JSON.stringify(body)})
//    var result=await response.json()
// return result
// }



// const postDataAndImage=async(url,formData,config)=>{
//   try{
//   var response=await axios.post(`${BaseURL}/${url}`,formData,config)

//    var result=response.data.RESULT
// return result
// }
// catch(e)
// {
//   console.log()
// }
// }

const getData=async(url)=>{
  var response=await fetch(`${BaseURL}/${url}`,{
   method:"GET",
   mode:"cors",
  headers:{
   "Content-Type": "application/json; charset=utf-8"},
   })
   var result=await response.json()
 return result
  }

export {postData,BaseURL,getData}