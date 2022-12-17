const User = require('../models/User')

module.exports.data_get = (req,res)=>{
    res.render('data')
}
module.exports.data_post =async (req,res)=>{
    // const {companyName,serialId} = req.body;
    // const companyName = req.body['companyName']
    // const serialId =  req.body['serialId'] 
    console.log(req)

    try{
        // const user = await User.create({companyName,serialId})
        res.status(201).json(user)
    }
    catch(err){
        console.log(err)
        res.status(400).send('error,user not created')
    }
    
}
