enum Months{JAN, FEB, MAR}// Defaults to zero
console.log(Months.MAR); //Displays 2
console.log(Months[1]); //Displays FEB

enum Color {Red = 2, Green = 5, Blue = 9} //Assign specific values
let c: Color = Color.Green;
console.log(c);// 5