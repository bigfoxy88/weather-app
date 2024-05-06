import './styles.scss'
import renderHtml from './renderHtml'
import { celFar } from './renderHtml';

const search=document.querySelector('form');
const celcius=document.querySelector('.celcius');
const farenheit=document.querySelector('.farenheit')


function convertToFarenheit(u){
    return (u*9/5)+32
}

function convertToCelcius(u){
    return (u-32)*5/9
}

search.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input=document.querySelector('#search');
    const loader=document.getElementById('loader')
    loader.classList.add('loader')
    renderHtml(input.value)
    input.value=''
})

celcius.onclick=()=>{

    if(celFar!=='c'){
        const temp=document.querySelector('.temp');
        const corF=document.querySelectorAll('.CorF');
        const feelsLike=document.querySelector('.feelOfTemp')

        let cvalue=Number(temp.textContent)
        temp.textContent=Math.round(convertToCelcius(cvalue)*10)/10
        let cfeelValue=Number(feelsLike.textContent)
        feelsLike.textContent=Math.round(convertToCelcius(cfeelValue)*10)/10;
        corF.forEach(x=>x.textContent='C')
        celFar='c'
    }   
}

farenheit.onclick=()=>{
    if(celFar!=='f'){
        const temp=document.querySelector('.temp');
        const corF=document.querySelectorAll('.CorF');
        const feelsLike=document.querySelector('.feelOfTemp')

        let cvalue=Number(temp.textContent)
        temp.textContent=Math.round(convertToFarenheit(cvalue)*10)/10
        let cfeelValue=Number(feelsLike.textContent)
        feelsLike.textContent=Math.round(convertToFarenheit(cfeelValue)*10)/10;
        corF.forEach(x=>x.textContent='F')
        celFar='f'
        console.log(celFar)
    }
}



renderHtml()