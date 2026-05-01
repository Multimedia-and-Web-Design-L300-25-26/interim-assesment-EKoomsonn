import Crypto from "../models/Crypto.js";

// GET all crypto
export const getAllCrypto = async (req, res) => {
  const data = await Crypto.find();
  res.json(data);
};

// GET top gainers
export const getTopGainers = async (req, res) => {
  const data = await Crypto.find().sort({ change24h: -1 });
  res.json(data);
};

// GET new listings
export const getNewCrypto = async (req, res) => {
  const data = await Crypto.find().sort({ createdAt: -1 });
  res.json(data);
};

// POST new crypto
export const createCrypto = async (req, res) => {
  try {
    const crypto = new Crypto(req.body);
    await crypto.save();
    res.status(201).json(crypto);
  } catch (err) {
    res.status(400).json({ error: "Failed to create crypto" });
  }
};