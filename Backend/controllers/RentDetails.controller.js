const RentDetail = require('../model/RentDetails.model')

const addbookuser = async (req,res)=>{
    try{
        const detail = new RentDetail(req.body)
        const savedetails = await detail.save()
        res.json(savedetails)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const findbookuser = async (req,res)=>{
    try{
        const email = req.body.email

        const details = await RentDetail.find({email: email})
        res.json(details)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    addbookuser,
    findbookuser
}