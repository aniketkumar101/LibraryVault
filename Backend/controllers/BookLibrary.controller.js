const BookLibrary = require('../model/LibraryBooking.model')

const addDetails = async (req,res)=>{
    try{
        const detail = new BookLibrary(req.body)
        const savedetails = await detail.save()
        res.json(savedetails)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getDetails = async(req,res)=>{
    try{
        const {email} = req.params;
        const details = await BookLibrary.find({email: email})
        if (!details){
            return res.status(404).json({ message: "No Details Found" });
        }
        res.json(details)
    }
    catch(err){
        res.status(500).json(err)
    }
}
const updateExpire = async(req,res)=>{
    try {
        const updateexpire = await BookLibrary.findByIdAndUpdate(
            req.params.id,
            {expired: req.body.expired},
            {new:true}
        )
        if(!updateexpire){
            return res.status(404).json({ message: "No Details Found" });
        }
        res.json(updateexpire)
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ error: 'Internal why error' });
    }
}

module.exports = {
    addDetails,
    getDetails,
    updateExpire
}