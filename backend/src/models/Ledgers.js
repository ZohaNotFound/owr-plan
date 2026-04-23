const mongoose = require("mongoose");

const payerSchema = new mongoose.Schema({
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  }
}, { _id: false });

const splitSchema = new mongoose.Schema({
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
    required: true
  },
  share: {
    type: Number,
    default: null,
    min: 0
  }
}, { _id: false });

const expenseSchema = new mongoose.Schema({
  icon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Icon"
  },

  title: {
    type: String,
    default: "Expense"
  },

  amount: {
    type: Number,
    required: true,
    min: 0
  },

  paidBy: {
    type: [payerSchema],
    required: true,
    validate: v => v.length > 0
  },

  splitBetween: {
    type: [splitSchema],
    required: true,
    validate: v => v.length > 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
}, { _id: true });

const ledgerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },

  title: {
    type: String,
    required: true
  },

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity",
    required: true
  }],

  expenses: {
    type: [expenseSchema],
    default: []
  }

}, { timestamps: true });

module.exports = mongoose.model("Ledger", ledgerSchema);