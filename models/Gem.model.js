const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const categories = ['Food & Drink', 'Outdoor Activity', 'Entertainment', 'Historical Site'];

const gemSchema = new Schema(
  {
    gemName: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    venueName: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: categories,
        message: 'Category is not valid',
      },
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Gem = model('Gem', gemSchema);

module.exports = Gem;
