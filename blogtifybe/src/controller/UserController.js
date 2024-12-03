const uploadCloud = require("../config/cloudinaryConfig");
const User = require("../modal/User");

const addUser = async (req, res) => {
    uploadCloud.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: `Image upload error: ${err.message}` });
      }
  
      const { username, password, role, email, phoneNumber, gender } = req.body;
      const image = req.file ? req.file.path : null; 
  
      if (!username || !password || !role || !email || !phoneNumber || !gender) {
        return res.status(400).json({ message: 'All fields are required.' });
      }
  
      const validRoles = ['teacher', 'student', 'admin'];
      if (!validRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role.' });
      }
  
      try {
        const newUser = new User({
          username,
          password,
          role,
          email,
          phoneNumber,
          gender,
          image
        });
  
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
      } catch (error) {
        if (error.code === 11000) { 
          return res.status(400).json({ message: 'Username or email already exists.' });
        }
        res.status(500).json({ message: 'Error registering user', error });
      }
    });
  };
  module.exports = {addUser}