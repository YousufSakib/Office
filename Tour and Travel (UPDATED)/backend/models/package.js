const mongoose = require("mongoose");

//12field
const packageSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  createdBy: String,
  destination: String,
  duration: Number,
  category: String,
  name: {
    type: String,
    required: [true, "Package name must be provided"],
  },
  profileImg: {
    type: String,
    required: [true, "Package profile image must be provided"],
  },
  description: {
    type: String,
  },
  images: [String],
  attraction: [String],
  tourHighLights: {
    items: [
      {
        highlight: String,
        description: String,
      },
    ],
  },
  pricePerPerson: [
    {
      priceType: String,
      priceTaka: Number,
    },
  ],
});

module.exports = mongoose.model("Package", packageSchema);
