import Order from "../models/Order.js";

export const createOrder = async (req, res) => {

  try {

    const order = new Order({
      userId: req.user.id,
      productName: req.body.productName,
      image: req.body.image,
      price: req.body.price
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



export const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({ userId: req.user.id });

    res.json(orders);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};