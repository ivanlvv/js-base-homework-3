// **Частина 1**
// 1. Запитувати у користувача число, яке буде кінцевою точкою циклу(умовою)
// 2. Створити цикл, який буде виводити в консоль "Your number is" і число даної ітерації

let userNum = prompt('Enter your num')
let strToNum = Number(userNum)
for (let i = 0; i <= strToNum; i++) {
    console.log('Your number is ' + i)
}


// **Частина 2** <br>
// Створити цикл, який буде виводити в консоль усі числа від 100 до 0, з кроком 10

let num = 100
for (let i = 0; i < num; i++) {
    num = num - 10
    console.log(num)
}


// **Частина 3** <br>
// Створити цикл, який буде обраховувати суму усіх парних чисел від 0 до 50, виводити тільки кінцевий результат


let evenNum = 0
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        evenNum = evenNum + i
        console.log(evenNum)
    }
}


// **Частина 4** <br>
// Створити цикл, який буде виводити усі числа Фібоначчі(0 1 1 2 3 5 8 13 ...), які знаходяться в межі від 0 до 100

let one = 0;
let two = 1;

for (let i = 0; i <= 100; i++) {
	let current = one + two;
	one = two;
	two = current;
	
	console.log(current);
}


// // **Частина 5** <br>
// // Створити цикли, який буде виводити на екран всі числа в послідовності (крок зміни лічильника) 2a-1, де початкове значення a = 2, та які менше 1000

for (let i = 2; i < 1000; i = 2*i-1) {
    console.log(i)
}


// 6 вже було? частина 4**
// **Частина 6** <br>
// Створити цикл, який буде виводити усі числа Фібоначчі(0 1 1 2 3 5 8 13 ...), які знаходяться в межі від 0 до 100

// **Частина 7**
// 1. Запитати в користувача число
// 2. Запитати в користувача степінь
// 3. Створити цикл, який буде підносити число до степеня (!Цикл повинен бути тільки один)
// 4. Степінь може бути 0, може бути від`ємним, це потрібно врахувати, обрахувати всі можливі варіанти

let num = prompt('Число?')
let pow = prompt('Степень?')
let result = 0
if (pow >= 0) {
    result = num
} else {
    result = 1/num
}
if (pow != 0) {
    for (let index = 1; index < Math.abs(pow); index++) {
        if (pow > 0) {
            result = result * num
        } else if (pow < 0) {
            result = result / num
        } 
    }
} else if (pow == 0) {
    result = 1
}
alert(result)

//////////////////////////////////////////////////////////

let num = prompt('Число?')
let pow = prompt('Степень?')
let rezult = 0
let i = 1
if (pow < 0) {
    rezult = 1/num
} else {
    rezult = num
} 
if (pow == 0) {
    rezult = 1
}
while (i < Math.abs(pow)) {
    if (pow > 0) {
        rezult = rezult*num
    } else {
        rezult = rezult/num
    }
    i++
}
console.log(rezult)

////////////////////////////////////////
let num = prompt('Num?')
let pow = prompt('Pow')

let rezult = num

function tryPow () {
    rezult = rezult * num
    pow--
    if (pow > 1) {
        tryPow()
    }
    return rezult
}
tryPow()
alert(rezult)