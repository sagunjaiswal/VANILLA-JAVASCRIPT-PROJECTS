// let btn= document.getElementById('op');
// btn.document.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//         // var originalPrice = 
//         let originalPrice = document.getElementById('op').value;
//       console.log(originalPrice);
//     }
// }
// )
function compute(){
    var originalPrice = document.getElementById('op').value;
    var discount = document.getElementById('dp').value;
    let finalPrice;
    // console.log(originalPrice)
    // console.log(discount)
    let discountPrice = originalPrice*(discount*0.01);
    // console.log(discountPrice)
    let btn=document.getElementById('result').innerHTML = discountPrice
    let savings = originalPrice-discountPrice;
    let btnn=document.getElementById("fp").innerHTML = savings
}