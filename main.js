//Global Variables
let balance=parseFloat(document.getElementById('balance').innerText);

//common functions

function returnInputValue(id){
    const inputValue=parseFloat(document.getElementById(id).value);
    return inputValue;

}

function returnTextValue(id){
    const textValue=parseFloat(document.getElementById(id).innerText);
    return textValue;
}

document.getElementById('noakhaliBtn').addEventListener('click',function(){
    const noakhaliAmount=returnInputValue('noakhaliAmount')
    let noakhaliDonate=returnTextValue('noakhaliDonate')

    if(noakhaliAmount<0 || isNaN(noakhaliAmount) || noakhaliAmount>balance){
        alert('Wrong digit or input. Please provide the right digit')
        document.getElementById('noakhaliAmount').value=''
        return
    }
    else{
        balance-=noakhaliAmount;
        document.getElementById('balance').innerText=balance

        noakhaliDonate+=noakhaliAmount;
        document.getElementById('noakhaliDonate').innerText=noakhaliDonate
    }
    document.getElementById('noakhaliAmount').value=''
})

document.getElementById('feniBtn').addEventListener('click',function(){
    const noakhaliAmount=returnInputValue('noakhaliAmount')
    console.log(noakhaliAmount)
})

document.getElementById('quotaBtn').addEventListener('click',function(){
    const noakhaliAmount=returnInputValue('noakhaliAmount')
    console.log(noakhaliAmount)
})

