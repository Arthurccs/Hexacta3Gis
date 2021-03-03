// Input Values
var categories = "CFE,Coffee,Y\nFD,Food,Y\nPRS,Personal,N";
var expenses = "Starbucks,3/10/2018,Iced Americano,4.28,CFE\nStarbucks,3/10/2018,Nitro Cold Brew,3.17,CFE\nStarbucks,3/10/2018,Souvineer Mug,8.19,PRS\nStarbucks,3/11/2018,Nitro Cold Brew,3.17,CFE\nHigh Point Market,3/11/2018,Iced Americano,2.75,CFE\nHigh Point Market,3/11/2018,Pastry,2.00,FD\nHigh Point Market,3/11/2018,Gift Card,10.00,PRS";
var splitCategory = categories.split("\n")
var splitExpenses = expenses.split("\n")
// Prints out Inputs
console.log('Input Categories:');
splitCategory.map(function(splitCategory) {
    console.log(`  ${splitCategory}`);
})

console.log('\n Input Expenses:');
splitCategory.map(function(splitCategory) {
    console.log(`  ${splitCategory}`);
})

var AcceptableExpenses = GetAcceptableExpenses(GetAcceptableCategories(categories), expenses)
// Print out Output
console.log('\n Output:');
AcceptableExpenses.forEach (AcceptableExpense =>{
    console.log(AcceptableExpense.join(''))
})
function GetAcceptableExpenses(AcceptableCategories, expenses){
    var ExpensesList = expenses.split("\n")
    var AcceptableExpenseTotals = []
    var categoryIndex = 4
    var venderIndex = 0
    var dateIndex = 1
    var priceIndex = 3
    var venderDate = []
    ExpensesList.forEach(expense => {
        var expenseItemized = expense.split(',')
        if ((categoryIndex < expenseItemized.length) && IsExpenseItemAcceptable(AcceptableCategories, expenseItemized[categoryIndex])){
            venderDate = [expenseItemized[dateIndex], ": ", expenseItemized[venderIndex], " - $"].join('')
            if ( IsVenderDateIncluded(AcceptableExpenseTotals, venderDate) ){
                UpdatePrice(AcceptableExpenseTotals, venderDate, expenseItemized[priceIndex] )
            }
            else{
                AcceptableExpenseTotals.push([venderDate, expenseItemized[priceIndex] ])
            }
        }
    })
    return AcceptableExpenseTotals
}
function IsVenderDateIncluded(AcceptableExpenseTotals, venderDate){
    var venderDateIndex = 0
    var IsIncluded = false
    AcceptableExpenseTotals.forEach( AcceptableExpenseTotal =>{
        if (AcceptableExpenseTotal[venderDateIndex] === venderDate){
            IsIncluded = true
        }
    })
    return IsIncluded
}
function UpdatePrice(AcceptableExpenseTotals, venderDate, price ){
    var venderDateIndex = 0
    var priceIndex = 1
    AcceptableExpenseTotals.forEach( AcceptableExpenseTotal =>{
        if (AcceptableExpenseTotal[venderDateIndex] === venderDate){
            AcceptableExpenseTotal[priceIndex] = parseFloat( price) + parseFloat(AcceptableExpenseTotal[priceIndex])
            return
        }
    })
}
function IsExpenseItemAcceptable(AcceptableCategories, category ){
    var IsAcceptable = false
    AcceptableCategories.forEach(AcceptableCategory => {
        if (AcceptableCategory === category){
            IsAcceptable = true
        }
    })
    return IsAcceptable
}
function GetAcceptableCategories(categories){
    var categoryList = categories.split("\n")
    var AcceptableCategory = []
    for (i = 0; i < categoryList.length; i++){
        var categoryData = categoryList[i].split(',');
        var locationOf_IsExpensible = 2;
        var locationOf_Category = 0;
        if (locationOf_IsExpensible < categoryData.length ){
            if (categoryData[locationOf_IsExpensible]==="Y"){
                AcceptableCategory.push(categoryData[locationOf_Category])
            }
        }
    }
    return AcceptableCategory
}