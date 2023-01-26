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

    const confirm = document.querySelector('#confirm');
    
    const formOne = document.querySelector('#form-one');
    const formTwo = document.querySelector('#form-two');
    const formThree = document.querySelector('#form-three');
    const formFour = document.querySelector('#form-four');
    const formFive = document.querySelector('#form-five');

    const form = document.querySelectorAll('.forms form');
    
    const next = document.querySelectorAll('.next');
    const back = document.querySelectorAll('.back');

    confirm.addEventListener('click', () => {
        formFour.style.top = "-1000px";
        formFive.style.top = "0";

    })
    
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

    const typeOfPlanLabel = document.querySelector('.payment-type-label');
    let typeOfPlan = 'Monthly';
    const inputPlan = document.querySelectorAll('.plan');
    inputPlan[0].checked = true;
    const planCard = document.querySelectorAll('.checkbox-input');
    planCard[0].classList.add('active-type');
    const singleType = document.querySelectorAll('.single-type-check');
    const typeOfPlanRadio = document.querySelector('#payment-type');
    const highlight = document.querySelectorAll('.payment-type span');
    highlight[0].classList.add('highlight');
    const monthInfo = document.querySelectorAll('.month-info');
    for(let month of monthInfo) {
        month.style.display = "none";
    }
    const selectedPlan = document.querySelector('.selected-plan');
    const finalPlanPrice = document.querySelector('.selected-plan-price');
    const checkAddon = document.querySelectorAll('.checkAddon');
    const formThreeFinalResults = document.querySelector('.step-three');
    const addonHeadline = document.querySelectorAll('.addon-headline');

    if(formThreeFinalResults.innerHTML == "") {
        formThreeFinalResults.innerHTML = "<h3>Please select an add-on</h3>";
    }

    if(finalPlanPrice.innerHTML == "") {
        finalPlanPrice.innerHTML = "";
    }

    if(selectedPlan.innerHTML == "") {
        selectedPlan.innerHTML = "(Please select a plan)";
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

        // console.log(typeOfPlan);
        getPlanValues(typeOfPlan);
        getAddonValues(typeOfPlan);
        selectedPlanValues(selectedPlan,typeOfPlan);
        selectedAddonValues();
    })
    


    function selectedPlanValues(selectedPlan, typeOfPlan) {

        for(let i = 0; i < inputPlan.length; i++) {
            
            if(inputPlan[i].checked) {
                selectedPlan.innerHTML = `${inputPlan[i].value}(${typeOfPlan})`;
                // console.log(selectedPlan);
                
                let planPrice =  planCard[i].querySelector('.planPrice');
                finalPlanPrice.innerHTML = `${planPrice.innerHTML}`;
            }
        }
        getTotalPrice(typeOfPlan);
    }

    function selectedAddonValues() {

        const addonArray = [];
        formThreeFinalResults.innerHTML = addonArray;
        // console.log(formThreeFinalResults.innerHTML);

        for(let i = 0; i < inputPlan.length; i++) {
            
            
            if(checkAddon[i].checked) {
                // console.log('it works');
                let addonPrice = singleType[i].querySelector('.addonPrice'); 

                let addonResult = "";

                addonResult = `
                    <div class="single-type">
                        <div class="text">
                            <h3>${addonHeadline[i].innerHTML}</h3>
                        </div>

                        <div class="selected-addon-price">${addonPrice.innerHTML}</div>
                    </div>
                `;

                addonArray.push(addonResult);
            } else if(!(checkAddon[i].checked)) {
                delete addonArray[i];

                let result = addonArray.join(' ');
                formThreeFinalResults.innerHTML = result;
            }
            let result = addonArray.join(' ');
            formThreeFinalResults.innerHTML = result;
        }
    }

    for(let z = 0; z < inputPlan.length; z++) {
        inputPlan[z].addEventListener('click', () => {
            if(inputPlan[z].checked) { 
                for(const plan of planCard) {
                    plan.classList.remove('active-type');
                }
                planCard[z].classList.add('active-type');
                selectedPlanValues(selectedPlan,typeOfPlan);
            } else if(!(inputPlan[z].checked)) {
                planCard[z].classList.remove('active-type');
            }
        })
    }
    
    // console.log(typeOfPlan);
    getPlanValues(typeOfPlan);
    getAddonValues(typeOfPlan);

    function getPlanValues(typeOfPlan) {

        const planPriceSpan = document.querySelectorAll('.planPrice');
        const planArray = ["9", "12", "15"];
        let priceSuffix = "/mo";
        let planPrice = [];

        for(let i = 0; i < planPriceSpan.length; i++) {
            planPrice[i] = planArray[i];
            planPriceSpan[i].innerHTML = `$${planPrice[i]}${priceSuffix}`;         
        }
        
        if(typeOfPlan == "Yearly") {
            priceSuffix = "/yr";
            
            for(let i = 0; i < planPriceSpan.length; i++) {
                planPrice[i] = planArray[i] * 10;
                planPriceSpan[i].innerHTML = `$${planPrice[i]}${priceSuffix}`;         
            }
        }
    }

    function getAddonValues(typeOfPlan) {
        const addonPriceSpan = document.querySelectorAll('.addonPrice');
        const addonArray = ["1", "2", "2"];
        let priceSuffix = "/mo";
        let addonPrice = [];

        for(let i = 0; i < addonPriceSpan.length; i++) {
            addonPrice[i] = addonArray[i];
            addonPriceSpan[i].innerHTML = `+$${addonPrice[i]}${priceSuffix}`;         
        }
        
        if(typeOfPlan == "Yearly") {
            priceSuffix = "/yr";
            
            for(let i = 0; i < addonPriceSpan.length; i++) {
                addonPrice[i] = addonArray[i] * 10;
                addonPriceSpan[i].innerHTML = `+$${addonPrice[i]}${priceSuffix}`;         
            }
        }
    }

    function formThreeFunction() {
        const checkAddon = document.querySelectorAll('.checkAddon');
        const singleType = document.querySelectorAll('.single-type-check');

        for(let i = 0; i < checkAddon.length; i++) {
            checkAddon[i].addEventListener('click', () => {
                
                if(checkAddon[i].checked) {
                    singleType[i].classList.add('active-addon');
                    selectedAddonValues();
                } else  {
                    singleType[i].classList.remove('active-addon');
                    // selectedAddonValues();
                }

                getTotalPrice(typeOfPlan);
            })
        }
    }

    formThreeFunction();

    for(let e = 0; e < checkAddon.length; e++) {
        checkAddon[e].addEventListener('click', () => {
            selectedAddonValues();   
            // console.log(selectedAddonPrice[0]);

        })
    }

    function getTotalPrice(typeOfPlan) {
        const finalPlanPrice = document.querySelector('.selected-plan-price');
        const totalTypeOfPlan = document.querySelector('.total-type-of-plan');
        totalTypeOfPlan.innerHTML = "(per month)";
        let planPrice = finalPlanPrice.innerText.replace(/\D/g, '');
        // console.log(planPrice);

        if(typeOfPlan == "Yearly") {
            totalTypeOfPlan.innerHTML = "(per year)";
        }

        const selectedAddonPrice = document.querySelectorAll('.selected-addon-price');
        let finalAddonPrices = [];
        for(let i = 0; i < checkAddon.length; i++) {
            checkAddon[i].addEventListener('click', () => {

                if(checkAddon[i].checked) {
                    console.log('it is added');
                    finalAddonPrices.push(selectedAddonPrice[i]);
                    // console.log(finalAddonPrices);
                    // console.log(finalAddonPrices);
                    console.log(finalAddonPrices[i]);
                    
                } else if(!(checkAddon[i].checked)) {
                    console.log('it is deleted');
                    delete finalAddonPrices[i];
                }
            })
        }

        let addonPrice = document.querySelector('.total-price');

    }

    getTotalPrice(typeOfPlan);
}