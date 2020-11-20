const express = require('express');
const router = require("express").Router();

  person =[{
    "Name":"Ajinkya",
    "Age":25,
    "Marks":80
    },
    {
    "Name":"Krishna",
    "Age":23,
    "Marks":90
    },
    {	
    "Name":"Ananta",
    "Age":28,
    "Marks":100
    },
    {
    "Name":"Pruthvi",
    "Age":24,
    "Marks":120
    }]


function sumfunction(){
    var sumOfMarks = person.reduce((sum, currentValue)=>{
        return sum + currentValue.Marks;
      }, 0);
      console.log(sumOfMarks); 
      return sumOfMarks;    
}
 

router.get("/sum", function (req, res) {
res.json({
data:sumfunction()
})
})



function assenfunction(){
person.sort(function (a, b) {
  return a.Age - b.Age;
});
console.log(person);
return person;
}




router.get("/assen", function (req, res) {
  res.json({
  data:assenfunction()
  })
  })

module.exports=router;