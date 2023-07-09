const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divid = document.getElementById('divid')
let action
const submitBtn = document.getElementById('submit')
const result = document.getElementById('result')

plus.onclick = function () {
    this.style.background = 'transparent';
    minus.style.background = 'rgb(228, 59, 59)';
    multiply.style.background = 'rgb(49, 188, 83)';
    divid.style.background = 'rgb(228, 132, 59)';
    action = '+'
}

minus.onclick = function () {
    this.style.background = 'transparent';
    plus.style.background = 'rgb(0, 189, 0)';
    multiply.style.background = 'rgb(49, 188, 83)';
    divid.style.background = 'rgb(228, 132, 59)';
    action = '-'
}

multiply.onclick = function () {
    this.style.background = 'transparent';
    plus.style.background = 'rgb(0, 189, 0)';
    minus.style.background = 'rgb(228, 59, 59)';
    divid.style.background =  'rgb(228, 132, 59)';
    action = '*'
}

divid.onclick = function () {
    this.style.background = 'transparent';
    plus.style.background = 'rgb(0, 189, 0)';
    minus.style.background = 'rgb(228, 59, 59)';
    multiply.style.background = 'rgb(49, 188, 83)';
    action = '/'
}

submitBtn.onclick = function () {

    if (action == '+') {
        result.textContent = Number(num1.value) + Number(num2.value);     
    } 
    
    else if (action == '-') {
        result.textContent = Number(num1.value) - Number(num2.value);     
    } 

    else if (action == '*') {
        result.textContent = Number(num1.value) * Number(num2.value);     
    }

    else if (action == '/') {
        result.textContent = Number(num1.value) / Number(num2.value);     
    }

    else {
        result.textContent = 'выберите действие'
    }
    
}




