const Cartitems = require('../models/cart.model');

//add items to cart
const CreateCart = async (req, res) => {
    if (req.body) {
        const cart = new Cartitems(req.body);
        await cart.save()
          .then(data => {
              res.status(200).send({status:'Item is added to cart successfuly'});
          }).catch(error => {
              res.status(500).send({ error: error.message });
          })
    }
}

const getcartItemByuserId = async (req, res) => {
    if (req.params && req.params.username) {
        const username = req.params.username;
        await Cartitems.find({ username :username})
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ status:"Error in retriving items" ,error: error.message });
            })
    
        
    }
}

const ondelete = async (req, res) => {
    if (req.params && req.params.id) {
        let cartid = req.params.id;
        await Cartitems.findByIdAndDelete(cartid)
            .then(()=> {
                res.status(200).send({status: 'cart item removed successfully'});
            }).catch((error) => {
                res.status(500).send({ status: 'Error in deleting cart items', error: error.msg });
            })
            
           
    }
}

const updatecartitems = async (req, res) => {
    if (req.params && req.params.id&& req.body) {
        let cartid = req.params.id;
        let quantity = req.params.quantity;
        await Cartitems.findByIdAndUpdate(cartid, { $set: { quantity: req.body.quantity} })
            .then(data => {
                res.status(200).send({ status: "Quantity updated" });
            }).catch(error => {
                console.log({ status: "Error in updating the quantity of items", error: error.message });
            })

    }
}

const totalpay_peruser = async (req, res) => {
    if (req.params && req.params.username) {
        const username = req.params.username;
        const cart=await Cartitems.find({ username: username })
        
        if (cart.length > 0) {
            totamount = 0;
        totdelivery = 0;
        totdiscount = 0;
        totsubtotal = 0;
            cart.map((cart) => {
               
                totsubtotal += cart.price*cart.quantity;
                totdelivery += cart.deliverycharge*cart.quantity;
                 totdiscount += cart.discount*cart.quantity;
                totamount  =totsubtotal+totdelivery-totdiscount;
            })
         
            
        }
       
        res.status(200).send({totamount})
          
    }
}

module.exports = {
    CreateCart,
    // getItemById,
    getcartItemByuserId,
    ondelete,
    updatecartitems,
    // getallgiftitems,
    // getallflowercategory,
    // getcartno,
    totalpay_peruser
};