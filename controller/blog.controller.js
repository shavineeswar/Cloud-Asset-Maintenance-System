const Blog = require('../models/blog.model');

const createBlog = async (req, res) => {
    if (req.body) {
        const blog = new Blog(req.body);
        blog.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllBlogs = async (req, res) => {
    await Blog.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getBlogById = async (req, res) => {
    if (req.params && req.params.id) {
      await Blog.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
   
    
};
