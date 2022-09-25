/*
You are given a variable marks. Your task is to print:

- AA if marks is greater than 90.
- AB if marks is greater than 80 and less than or equal to 90.
- BB if marks is greater than 70 and less than or equal to 80.
- BC if marks is greater than 60 and less than or equal to 70.
- CC if marks is greater than 50 and less than or equal to 60.
- CD if marks is greater than 40 and less than or equal to 50.
- DD if marks is greater than 30 and less than or equal to 40.
- FF if marks is less than or equal to 30 
*/


let mark = 100;

if (100 > 90) {
console.log ('AA');
}

else if (100 > 80 && 100 <= 90) {
console.log ('AB');
}


else if (100 > 70 && 100 <= 80) {
console.log ('BB');
}

else if (100 > 70 && 100 <= 70) {
    console.log ('BC');
}

else if (100 > 50 && 100 <= 60) {
    console.log ('CC');
}

else if (100 > 40 && 100 <= 50) {
    console.log ('CD');
}

else if (100 > 30 && 100 <= 40) {
    console.log ('DD');
}

else { 
 console.log ('FF');
}
