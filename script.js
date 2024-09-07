let expenses = [];
let totalamount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input')
const dateinput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountcell = document.getElementById("total-amount")

addBtn.addEventListener("click",function(){
    const category = categorySelect.value
    const amount = Number(amountInput.value)
    const date = dateinput.value;

    if(category ===""){
        alert("please select a category")
        return
    }
    if(isNaN(amount) || amount<=0){
        alert("please enter valid amount");
        return;
    }
    if(date==""){
        alert("please enter date");
        return;
    }
    expenses.push({category,amount,date})

    totalamount +=amount;
    totalAmountcell.textContent = totalamount;

    const newrow = expenseTableBody.insertRow();

    const categoryCell = newrow.insertCell();
    const amountCell = newrow.insertCell();
    const dataCell = newrow.insertCell();
    const deleteCell = newrow.insertCell();
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click",function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalamount -=expense.amount;
        totalAmountcell.textContent = totalamount

        expenseTableBody.removeChild(newrow)
    });
    const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.amount
    amountCell.textContent = expense.amount;
    dataCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn)

});

for(const expense of expenses){
    totalamount +=expense.amount;
    totalAmountcell.textContent = totalamount;
    
    const newRow = expenseTableBody.insertRow();
    const categoryCell = newrow.insertCell();
    const amountCell = newrow.insertCell();
    const dataCell = newrow.insertCell();
    const deleteCell = newrow.insertCell();
    const deleteBtn = document.createElement("button")

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click",function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalamount -=expense.amount;
        totalAmountcell.textContent = totalamount

        expenseTableBody.removeChild(newRow)
    });
    // const expense = expenses[expenses.length-1]
    categoryCell.textContent = expense.amount
    amountCell.textContent = expense.amount;
    dataCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn)
}