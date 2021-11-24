const product = require('../models/product.model');


const addProduct = async(req, res) => {
    if (req.body) {
        const product = new product(req.body);
        product.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const getAllProduct = async(req, res) => {
    await product.find({}).populate('Product', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const getProductById = async(req, res) => {
    if(req.params && req.params.id){
        await product.findById(req.params.id).populate('Product', 'productName brand supplier category description quantity pricePItem wholesalePrice discountPItem deliveryCpItem imageURL status')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }

}

const deleteProduct = async(req, res) => {
    let itemid = req.params.id;

    await product.findByIdAndDelete(itemid).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete Item", error: err.message });
    })

}

const updateproduct = async(req, res) => {
    let Itemid = req.params.id;
    const { productName, brand, supplier, category, description,imageURL } = req.body;
    const updateItem = {
        productName,
        brand,
        supplier,
        category,
        description,    
        imageURL,
    }
    await product.findByIdAndUpdate(Itemid, updateItem)
        .then(() => {
            res.status(200).send({ status: "Item updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
}

module.exports = {
    addProduct,
    getAllProduct,
    getProductById,
    deleteProduct,
    updateproduct
};