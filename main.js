//------------------------------------------------Global Variables

let balance=parseFloat(document.getElementById('balance').innerText);

const location1=document.getElementById('location1').innerText;
const location2=document.getElementById('location2').innerText;
const location3=document.getElementById('location3').innerText;

const newModal=document.getElementById('my_modal_5')

const historySec=document.getElementById('historySec');
let timeExact=new Date();

//-------------------------------------------------Common functions

function returnInputValue(id){
    const inputValue=parseFloat(document.getElementById(id).value);
    return inputValue;

}

function returnTextValue(id){
    const textValue=parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function addNotification(var1,var2){
    const notificationN=document.createElement('div');
    notificationN.innerHTML=`
    <h1 class="text-2xl font-bold">${var1} is donated for ${var2}</h1>
    <h1 class="text-2xl">${timeExact}</h1>
    `
    notificationN.setAttribute('class','border-2')
    notificationN.classList.add('p-9','border-dashed','rounded-lg','my-5')
    return historySec.insertBefore(notificationN,historySec.firstChild)
}

function buttonToggle(id1,id2){
    document.getElementById('donateSec').classList.add('hidden')
    document.getElementById('historySec').classList.add('hidden')

    document.getElementById(id1).classList.remove('hidden')

    //-----------------Background Color
    document.getElementById('donateBtn').classList.remove('bg-primary','font-bold')
    document.getElementById('historyBtn').classList.remove('bg-primary','font-bold')

    document.getElementById(id2).classList.add('bg-primary','font-bold')

}

//---------------------------------------------------Execute Section

//----Noakhali Flood

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

        newModal.showModal();
    }
    document.getElementById('noakhaliAmount').value=''

    //History Create
    addNotification(noakhaliAmount,location1)

})

//------Feni Flood

document.getElementById('feniBtn').addEventListener('click',function(){
    const feniAmount=returnInputValue('feniAmount')
    let feniDonate=returnTextValue('feniDonate')

    if(feniAmount<0 || isNaN(feniAmount) || feniAmount>balance){
        alert('Wrong digit or input. Please provide the right digit')
        document.getElementById('feniAmount').value=''
        return
    }
    else{
        balance-=feniAmount;
        document.getElementById('balance').innerText=balance

        feniDonate+=feniAmount;
        document.getElementById('feniDonate').innerText=feniDonate

        newModal.showModal();
    }
    document.getElementById('feniAmount').value=''

    //History Create
    addNotification(feniAmount,location2)
})

//----Quota Injury

document.getElementById('quotaBtn').addEventListener('click',function(){
    const quotaAmount=returnInputValue('quotaAmount')
    let quotaDonate=returnTextValue('quotaDonate')

    if(quotaAmount<0 || isNaN(quotaAmount) || quotaAmount>balance){
        alert('Wrong digit or input. Please provide the right digit')
        document.getElementById('quotaAmount').value=''
        return
    }
    else{
        balance-=quotaAmount;
        document.getElementById('balance').innerText=balance

        quotaDonate+=quotaAmount;
        document.getElementById('quotaDonate').innerText=quotaDonate

        newModal.showModal();
    }
    document.getElementById('quotaAmount').value=''

    //History Create
    addNotification(quotaAmount,location3)
})

//-----------------------------------Button Toggle Section

document.getElementById('historyBtn').addEventListener('click',function(){
    buttonToggle('historySec','historyBtn')
})

document.getElementById('donateBtn').addEventListener('click',function(){
    buttonToggle('donateSec','donateBtn')
})