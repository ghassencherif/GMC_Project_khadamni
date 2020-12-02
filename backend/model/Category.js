const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    typeCat: {
            type : String,
            required: true
    },
});

module.exports = Category = mongoose.model('category', categorySchema);