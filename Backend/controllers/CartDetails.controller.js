const CardDetails = require('../model/CartDetails.model')

const addToCart = async (req,res)=>{
    try{
        const newcart = new CardDetails(req.body)
        const savecart = await newcart.save()
        res.json(savecart)
    }
    catch(error){
        res.status(500).json(error)
    }
}


const getCart = async (req,res)=>{
    try{
        const { email } = req.params;

        const details = await CardDetails.find({email: email});
        if (!details) {
            return res.status(404).json({ message: "Cart is Empty" });
        }
        res.json(details);

    }
    catch(error){
        res.status(500).json(error)
    }
}


const deletecart = async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedcart = await CardDetails.findByIdAndDelete(id);
        if(!deletedcart) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json({message: "Item deleted"});
    }
    catch(error){
        res.status(500).json(error)
    }
}

const deletecartbybookid = async (req,res)=>{
    try {
        const { bookId } = req.params;

        const deletedCart = await CardDetails.findOneAndDelete({ bookId });

        if (!deletedCart) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({ message: "Item deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addToCart,
    getCart,
    deletecart,
    deletecartbybookid
}