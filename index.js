//alert function
const name =prompt('Enter your name please:')
alert(`Hello, ${name}!`)


//function that grabs the input
//const textMessage = document.getElementById('input').innerText;
const message = document.querySelector('#msg-form')
let list = document.querySelector('#messages-list')
message.addEventListener('click', (e) =>{
    if (e.target.id =='submit'){
        let textMessage = message.querySelector('input[type="text"]').value;
        console.log(textMessage)
        const entry= document.createElement('li')
        entry.innerText = textMessage
        console.log(entry)
        list.appendChild(entry)
        message.querySelector('input[type="text"]').value =''
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
    else if (e.target.innerText=='50$'){
        total+=50;
    }
    console.log(total)
    document.querySelector('#total').innerText =total

})

buttons.addEventListener('keypress', (e)=>{
    if(e.key =='Enter'){
        const additionalDonate = Number(buttons.querySelector('input[type="text"]').value)
        console.log(additionalDonate)
        total += additionalDonate
        document.querySelector('#total').innerText =total
        buttons.querySelector('input[type="text"]').value=''
    }
})