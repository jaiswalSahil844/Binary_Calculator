let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btnClr = document.getElementById('btnClr')
let btnEql = document.getElementById('btnEql')
let btnSum = document.getElementById('btnSum')
let btnSub = document.getElementById('btnSub')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')

let res = document.getElementById('res')
res.innerHTML = ''

var opr = ''
btnClr.onclick = function (){
    res.innerHTML = ''
    opr = ''
}

btn1.onclick = function (){
    res.innerHTML += '1'
}

btn0.onclick = function (){
    res.innerHTML += '0'
}

btnSum.onclick = function (){
    res.innerHTML += '+'
    opr = '+'
}

btnSub.onclick = function (){
    res.innerHTML += '-'
    opr = '-'
}

btnMul.onclick = function (){
    res.innerHTML += '*'
    opr = '*'
}

btnDiv.onclick = function (){
    res.innerHTML += '/'
    opr = '/'
}

btnEql.onclick = function (){

    var str = res.innerHTML.split(opr)
    var op1 = str[0]
    var op2 = str[1]

    const expression = parseInt(op1, 2) + opr + parseInt(op2, 2)
    let val = eval(expression)

    if(opr == '/'){
        val = Math.floor(val)
    }

    res.innerHTML = val.toString(2)
    opr = ''

}

