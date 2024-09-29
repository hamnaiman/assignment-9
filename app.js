// // // // question no 1
// // // function abc(){
// // // var a = 1
// // // var b = x
// // // while (p--){
// // //     a = (a + b ) / 2
// // //     b = x / a
// // // }
// // //  return a
// // // }
// // // abc();


// // // // question no 2
// // function calculateTrianglearea(y){
// //     var a= 20;
// //     var b = 20;
// //     var c =20;
// //     var s = ( a + b + c ) /2
// //     var y = s*(s-a) *(s-b) *(s-c);
// //    return y
// // };
    


// // // question no 3
// // function cheakLeapyear(){
// //     if(year%4===0 && year%100!=0){
// //         return true;
// //     }
// //     else if (year%400==0){
// //         return false;
// //     }
// // }
// // let year = parseInt(prompt("Enter the year"))
// // if(cheakLeapyear(year)===true){
// //     alert(year = "Its a leap year")
// // }else {
// //     alert(year = "its not a leap year")
// // };



// // question no 5
// // function customIndexof(sting, letter){
// // var i = 0
// // while(i <String.length){
// //     if(string[i]===letter){
// //         return i 
// //     }
// //      i++
// // }
// // return -1
// // }
// // var ss=prompt("Enter any string")
// // var ll = prompt("enter a letter")
// // alert(customIndexof(string,letter));

// // question no 6
// function deleteVoweles(vow){
//     var vowel = "aeiouAEIOU"
//     var result = ""

//     var i = 0
//     while(i<vow.length){
//         if (vowel.indexOf(vow[i])=== -1){
//             result += vow[i]
//         }
//  i++
//     }
// return result
// }
// alert(deleteVoweles("hamna iman"))

// question no 7

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var hoursWorked = "60";

    if (hoursWorked === regularHours) {
        alert("No overtime pay");
    } else {
        var overtimeHours = hoursWorked - regularHours;
        var overtimePay = overtimeHours * overtimeRate;
        alert(`Overtime pay is Rs.${overtimePay}`);
    }
}
var hoursWorked = prompt("Enter hours worked:");
var overtimePay = calculateOvertimePay(hoursWorked);
alert("Overtime pay is Rs." + overtimePay);

// var b = prompt("enter hoursofwork")
// alert(calculateOvertimePay(hoursWorked))




