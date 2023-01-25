export const getMultiForm = () => {

    const stepMarker = document.querySelectorAll('.steps input');
    const numberCircle = document.querySelectorAll('.number');
    numberCircle[0].classList.add('active');
    stepMarker[0].checked = true;

    
    for(let i = 0; i < stepMarker.length; i++) {
        stepMarker[i].addEventListener('click', () => {
            
            for(const single of form) {
                single.style.top = "-1000px";
            }
            form[i].style.top = "0";
            
            if(stepMarker[i].checked) {
                for(let y=0; y <numberCircle.length; y++) {
                    // console.log(numberCircle[y]);
                    numberCircle[y].classList.remove('active');
                }
                numberCircle[i].classList.add('active');
            }
        })
    }
    
    const nextOne = document.querySelector('#next-one');
    const nextTwo = document.querySelector('#next-two');
    const nextThree = document.querySelector('#next-three');
    
    const backOne = document.querySelector('#back-one');
    const backTwo = document.querySelector('#back-two');
    const backThree = document.querySelector('#back-three');
    
    const formOne = document.querySelector('#form-one');
    const formTwo = document.querySelector('#form-two');
    const formThree = document.querySelector('#form-three');
    const formFour = document.querySelector('#form-four');
    
    const form = document.querySelectorAll('.forms form');
    
    const next = document.querySelectorAll('.next');
    const back = document.querySelectorAll('.back');
    
    nextOne.addEventListener('click', () => {
        
        formOne.style.top = "-1000px";
        formTwo.style.top = "0";
    })
    
    nextTwo.addEventListener('click', () => {
        
        formTwo.style.top = "-1000px";
        formThree.style.top = "0";
    })    
    
    nextThree.addEventListener('click', () => {
        
        formThree.style.top = "-1000px";
        formFour.style.top = "0";
    })    
    
    backOne.addEventListener('click', () => {
        
        formTwo.style.top = "-1000px";
        formOne.style.top = "0";
    })    
    
    backTwo.addEventListener('click', () => {
        
        formThree.style.top = "-1000px";
        formTwo.style.top = "0";
    })    
    
    backThree.addEventListener('click', () => {
        
        formFour.style.top = "-1000px";
        formThree.style.top = "0";
    })    

    const changePaymentType = document.querySelector('.change');

    changePaymentType.addEventListener('click', () => {
        for(let x = 0; x < form.length; x++) {
            form[x].style.top = "-1000px";
        }
        form[0].style.top = "0";

        if(form[0].style.top == "0") {
            for(const circle of numberCircle) {
                circle.classList.remove('active');
            }

            for(const step of stepMarker) {
                step.checked = false;
            }
            numberCircle[0].classList.add('active');
            stepMarker[0].checked = true;
        }
    })

    const inputPlan = document.querySelectorAll('.plan');
    // inputPlan[0].checked = true;
    const planCard = document.querySelectorAll('.checkbox-input');
    const typeOfPlanLabel = document.querySelector('.payment-type-label');
    const typeOfPlanRadio = document.querySelector('#payment-type');
    const highlight = document.querySelectorAll('.payment-type span');
    highlight[0].classList.add('highlight');
    const monthInfo = document.querySelectorAll('.month-info');
    for(let month of monthInfo) {
        month.style.display = "none";
    }
    let typeOfPlan = 'Monthly';

    // console.log(inputPlan);
    // console.log(inputPlan.length);
    for(let z = 0; z < inputPlan.length; z++) {
        // console.log(planCard[z]);
        inputPlan[z].addEventListener('click', () => {
            // console.log(inputPlan[z].checked);
            if(inputPlan[z].checked) { 
                // console.log('checked');
                for(const plan of planCard) {
                    plan.classList.remove('active-type');
                }
                planCard[z].classList.add('active-type');
            } else if(!(inputPlan[z].checked)) {
                // console.log('not checked');
                planCard[z].classList.remove('active-type');
            }
        })
    }
    
    typeOfPlanLabel.addEventListener('click', () => {
        if(typeOfPlanRadio.checked) {
            highlight[0].classList.add('highlight');
            highlight[1].classList.remove('highlight');
            for(let month of monthInfo) {
                month.style.display = "none";
            }       
            typeOfPlan = 'Monthly';
        } else if(!(typeOfPlanRadio.checked)) {
            highlight[0].classList.remove('highlight');
            highlight[1].classList.add('highlight');
            for(let month of monthInfo) {
                month.style.display = "block";
            }
            typeOfPlan = 'Yearly';
        }
        console.log(typeOfPlan);
    })

    function getValues(typeOfPlan) {


        if(typeOfPlan == "Yearly") {
            console.log('#');
        }
    }

}