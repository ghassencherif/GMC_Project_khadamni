const Annonce = require("../model/Annonce");
const User = require("../model/User");

// Add new annoncement

// exports.addannonce = async (req, res) => {
//     const { title, description, address, category, img, phoneNumber } = req.body;
//     try {
//       const newAnnonce = new Annonce({
//         title,
//         description,
//         address,
//         category,
//         img,
//         phoneNumber,

//       });
//       await newAnnonce.save();
//       res.status(201).json(newAnnonce);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ errors: error });
//     }
//   };

exports.addannonce = async (req, res) => {
  // create a new annonce
  const newAnnonce = new Annonce(req.body);
  try {
    // Get user
    const user = await User.findById(req.params);
    console.log(user);
    // assign user
    newAnnonce.userAnnonce = user;
    // save the annonce
    await newAnnonce.save();
    // Add annonce to the User's posting array
    user.annonceUser.push(newAnnonce);
    // save the user
    await user.save();
    res.status(201).json(newAnnonce);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "cant add the annonce" });
  }
};
