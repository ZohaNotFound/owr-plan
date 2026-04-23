const express = require('express');
const router = express.Router();
const {
  createLedger,
  getLedgerById,
  getUserLedgers,
  updateLedger,
  deleteLedger,
  addExpense,
  updateExpense,
  deleteExpense,
  getExpenses,
  generateSettlementTransactions,
  getLedgerBalance
} = require('../controllers/ledgerController');

// Routes for ledger operations
router.post('/', createLedger);
router.get('/user/:userId', getUserLedgers);
router.get('/:id', getLedgerById);
router.put('/:id', updateLedger);
router.delete('/:id', deleteLedger);

// Routes for expense operations
router.post('/:id/expenses', addExpense);
router.get('/:id/expenses', getExpenses);
router.put('/:id/expenses/:expenseId', updateExpense);
router.delete('/:id/expenses/:expenseId', deleteExpense);

// Routes for ledger analytics
router.get('/:id/balance', getLedgerBalance);
router.get('/:id/settlements', generateSettlementTransactions);

module.exports = router;