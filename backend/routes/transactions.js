const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");
const { addIncome, getIncomes,deleteIncome } = require("../controllers/income");


const router = require("express").Router();

router.post('/add-incomes',addIncome)
        .get('/get-incomes',getIncomes)
        .delete('/delete-incomes/:id',deleteIncome)
        .post('/add-expenses',addExpense)
        .get('/get-expenses',getExpense)
        .delete('/delete-expenses/:id',deleteExpense)

module.exports = router;