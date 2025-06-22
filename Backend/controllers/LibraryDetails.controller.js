const LibraryDetails = require('../model/LibraryDetails.model')


const addLibrary = async (req,res)=>{
    try{
        const newlibrary = new LibraryDetails(req.body)
        const savedlibrary = await newlibrary.save()
        res.json(savedlibrary)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const allLibrary = async (req,res)=>{
    try{
        const library = await LibraryDetails.find()
        res.json(library)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getlibraryById = async(req,res)=>{
    try{
        const library = await LibraryDetails.findById(req.params.id);
        if(!library){
            return res.status(404).json({'message':'Library not found'})
        }
        res.json(library)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateLibraryAvailability = async (req,res)=>{
    try{
        const updateLibrary = await LibraryDetails.findByIdAndUpdate(
            req.params.id,
            {available: req.body.available},
            {new: true}
        )
        if (!updateLibrary) {
            return res.status(404).json({ message: 'Library not found' });
        }
        res.json(updateLibrary);
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    addLibrary,
    allLibrary,
    getlibraryById,
    updateLibraryAvailability
};