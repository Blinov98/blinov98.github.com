
let Out = document.querySelector('.out');
let rangeLengh = document.querySelector('#range-1');
let outrange = document.querySelector('.outrange');
let tableOn = document.querySelector('.table');

rangeLengh.oninput = () =>{
    outrange.innerHTML = rangeLengh.value;
}

// tableOn.onclick = () => {
//     for(let i = 2; i<10; i++) {
//         for(let k = 2; k < 10; k++){
//             Out.innerHTML += `${i}*${k} = ${i*k} <br>`;
//         }
//         Out.innerHTML +='<hr>'
//     }
// }

let priceOut =  document.querySelectorAll('.priceout');
let outPriceValue = document.querySelector('.outpricevalue');


for(i = 0;i < priceOut.length;i++){
    priceOut[i].onclick = function(){
        let priceValue = document.querySelector('#price').value;
        let amount = this.getAttribute('data');
        console.log(priceValue*amount)
        outPriceValue.innerHTML = priceValue*amount+' руб';
    }

}
