console.log('pizza script sourced');

function pizzaOne(array = ['cheese']) {
    console.log(array);
} //function that takes in array of toppings, always defaults to cheese

pizzaOne(['jalapeno', 'pineapple', 'ham']);
pizzaOne();

let total = 0;
let totalArr = [];
let revenue = 0;
function pizzaTwo(array = ['cheese']) {
    let base = 10.99;
    if (array.length > 0) {
        for (let i = 0; i < array.length; i += 0.99) {
            total = i + base;
            console.log(total, array);
        }
console.log(total * 0.07);
        const TAX_AMOUNT = total * 0.07  //TAX_AMOUNT will always be 0.07, can be used as constant
        total = total+TAX_AMOUNT
        console.log(total, 'after tax added');

    finalRev();
    }
    return total;
   
}
    pizzaTwo();
    pizzaTwo(['pepperoni', 'jalapeno']);
    console.log(total, 'after pizzaTwo called');

function finalRev(){
    totalArr.push(total);
   
    console.log(totalArr, 'totalArr, array of final totals after tax');
    console.log(revenue, 'revenue');
    for(let ii = 0; ii < totalArr.length; ii+=1){
        revenue =+ totalArr[ii]
        console.log('THIS IS REVENUE?', revenue);
    }
}

