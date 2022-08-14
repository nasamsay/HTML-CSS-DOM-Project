//function that grabs the input
//const textMessage = document.getElementById('input').innerText;
const message = document.forms['msg-form']
const list = document.getElementById('messages-list')
message.addEventListener('submit', (e) =>{
    if (e.target.id =='submit'){
        let textMessage = message.querySelector('input[type="text"]').value;
        console.log(textMessage)
        const entry= document.createElement('li')
        entry.innerText = textMessage
        list.appendChild(entry)
        //console.log(textMessage)
    }
})


//total donation
let total = Number(document.querySelector('#total').innerText)
const buttons = document.querySelector('.btns')
buttons.addEventListener('click', (e)=>{
    if(e.target.innerText =='1$'){
        total +=1;
    }
    else if(e.target.innerText=='2$'){
        total+=2;
    }
    else if(e.target.innerText=='5$'){
        total+=5
    }
    else if(e.target.innerText=='10$'){
        total+=10;
    }
    else{
        total+=50;
    }
    console.log(total)
    document.querySelector('#total').innerText =total

})

const additionalDonate = Number(btns.querySelector('input[type="text"]').value)
buttons.addEventListener('enter', (e)=>{
    
})