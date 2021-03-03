/**
 * Data Manipulation
 *   List a summary of all of the expensible items sorted by date and location.
 *
 * Inputs: You have two variables: 'categories' and 'expenses'. Each string is formatted as a valid CSV.
 *   The Categories CSV provides the following information in order: Category ID, Category Name, and whether the category is expensible (Y/N)
 *   The Expenses CSV provides the following information in order: Location, Date, Item Description, Cost, and Category Code
 *
 * Output:
 *   Each line should be displayed in the format "DATE: LOCATION - $TOTAL". There should be one line for each appearing date, location combination.
 *
 * 
 * The following is a tabular view of the inputs and the exact outputs expected.
 * 
 * Categories:
 *   CFE,Coffee,Y
 *   FD,Food,Y
 *   PRS,Personal,N
 *
 * Expenses:
 *   Starbucks,3/10/2018,Iced Americano,4.28,CFE
 *   Starbucks,3/10/2018,Nitro Cold Brew,3.17,CFE
 *   Starbucks,3/10/2018,Souvineer Mug,8.19,PRS
 *   Starbucks,3/11/2018,Nitro Cold Brew,3.17,CFE
 *   High Point Market,3/11/2018,Iced Americano,2.75,CFE
 *   High Point Market,3/11/2018,Pastry,2.00,FD
 *   High Point Market,3/11/2018,Gift Card,10.00,PRS
 *
 * Results:
 *   3/10/2018: Starbucks - $7.45
 *   3/11/2018: High Point Market - $4.75
 *   3/11/2018: Starbucks - $3.17
 */

// Input Values
var categories = "CFE,Coffee,Y\nFD,Food,Y\nPRS,Personal,N";
var expenses = "Starbucks,3/10/2018,Iced Americano,4.28,CFE\nStarbucks,3/10/2018,Nitro Cold Brew,3.17,CFE\nStarbucks,3/10/2018,Souvineer Mug,8.19,PRS\nStarbucks,3/11/2018,Nitro Cold Brew,3.17,CFE\nHigh Point Market,3/11/2018,Iced Americano,2.75,CFE\nHigh Point Market,3/11/2018,Pastry,2.00,FD\nHigh Point Market,3/11/2018,Gift Card,10.00,PRS";

