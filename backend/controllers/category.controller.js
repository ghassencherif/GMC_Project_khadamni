
const Category = require('../model/Category');

// Add new annoncement

exports.register = async (req, res) => {
    const { typeCat } = req.body;
    try {
      const newCategory = new Category({
        typeCat
        
      });
      await newCategory.save();
      res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  };