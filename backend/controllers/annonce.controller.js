
const Annonce = require('../model/Annonce');

// Add new annoncement

exports.addannonce = async (req, res) => {
    const { title, description, address, category, img, phoneNumber } = req.body;
    try {
      const newAnnonce = new Annonce({
        title,
        description,
        address,
        category,
        img,
        phoneNumber,
        
      });
      await newAnnonce.save();
      res.status(201).json(newAnnonce);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  };