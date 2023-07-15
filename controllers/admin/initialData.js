const categoryModel = require('../../models/category');
const Crud = require("../../models/articleModel");
const annonceobjetModel = require('../../models/annonceobjet');
const userModel = require('../../models/userModel');
const Message = require('../../models/message');
const contactModel = require('../../models/contact');

exports.initialData = async (req, res) => {
  const categories = await categoryModel.find({}).exec();
  const users = await userModel.find({}).exec();
  const chat = await Message.find({})
  const annonceo = await annonceobjetModel
  const orders = await contactModel.find({})
  const products = await Crud.find({ })
  console.log({  categories,
    products,
    orders,
    users,
    chat,
    annonceo})
  res.status(200).json({
    categories,
    products,
    orders,
    users,
    chat,
    annonceo
  });
};