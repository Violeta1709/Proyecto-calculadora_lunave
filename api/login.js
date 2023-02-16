import React from 'react'

export default function handler(req , res) {
switch(req.method){
  case 'POST':
     return loginUser(req, res)

     default:
      res.status(400).json({
        message: 'Bad request'
      })
}   
}


const loginUser = async (req,res)=>{
  

  const {} = req.body;
  await db
}