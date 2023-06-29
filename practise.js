//fetch api requires a discussion of ..
// callbacks ,Promises,Thenables,and Async/Await

const { response } = require("express");

//Promises

//3 states :Pending,Fullfilled,Rejected
 
// async function mycoolFunction(){

// }


const postdata = {
  id: 'LRf2obFBskb',
  joke: 'Don’t interrupt someone working intently on a puzzle. Chances are, you’ll hear some crosswords.'
}


const postData = async(postdata)=>{
  const response =await fetch("https://httpbin.org/post",{
    method :"POST" ,
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(postdata)
  })
  const jsonJokeData =await response.json();
  console.log(jsonJokeData);
}

postData();



