"use strict";

const valueRub = document.querySelector("#rub");
const valueUsd = document.querySelector("#usd");

valueRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','js/current.json' );
    request.setRequestHeader('Content-Type','application/json');
    request.send();

    request.addEventListener('load', ()=>{
        if(request.status==200){
            const date = JSON.parse(request.response);
            valueUsd.value = (valueRub.value/date.current.usd).toFixed(2);
        }
    })
})
