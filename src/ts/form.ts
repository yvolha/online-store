import { clearCart } from './cart';
import { displayBlocKMain, displayNoneDetails } from './hide-display-sections';
import { clearAllFilters, removeHash } from './query-handler';

let formActive: boolean;


function formOpen () {
    const buttonBuy = document.querySelector('.button_buy') as HTMLButtonElement;
    const darkBackground = document.querySelector('.dark-background') as HTMLDivElement;

    buttonBuy.addEventListener('click', () => {
        createForm();
        setTimeout(function(){
            darkBackground?.classList.add('shadows');
            darkBackground?.classList.add('shadows_opacity');
            formActive = true;                
        }, 100);
    })
}


function formClose () {
    const darkBackground = document.querySelector('.dark-background') as HTMLDivElement;

    darkBackground.addEventListener('click', () => {
        if (formActive === true) {
            const cardForm = document.querySelector('.card-form') as HTMLDivElement;
            
            cardForm.remove();

            darkBackground.classList.remove('shadows_opacity');

            setTimeout(function(){
                darkBackground.classList.remove('shadows');
            }, 800);
            formActive = false;
        }
    })
}


function createForm () {
    const body = document.querySelector('.body') as HTMLDivElement;
    const divForm = document.createElement('div') as HTMLDivElement;
    const form = document.createElement('form') as HTMLFormElement;
    const divText = document.createElement('div') as HTMLDivElement;
    const inputName = document.createElement('input') as HTMLInputElement;
    const inputPhone = document.createElement('input') as HTMLInputElement;
    const inputAddress = document.createElement('input') as HTMLInputElement;
    const inputEmail = document.createElement('input') as HTMLInputElement;
    const buttonSubmit = document.createElement('button') as HTMLButtonElement;
    const cardSection = document.createElement('div') as HTMLDivElement;
    const cardTitle = document.createElement('div') as HTMLDivElement;
    const card = document.createElement('div') as HTMLDivElement;
    const cardDivFirst = document.createElement('div') as HTMLDivElement;
    const cardDivSecond = document.createElement('div') as HTMLDivElement;
    const paymentSystem = document.createElement('div') as HTMLDivElement;
    const inputNumberCard = document.createElement('input') as HTMLInputElement;
    const labelExpirationDate = document.createElement('label') as HTMLLabelElement;
    const inputExpirationDate = document.createElement('input') as HTMLInputElement;
    const labelCVV = document.createElement('label') as HTMLLabelElement;
    const inputCVV = document.createElement('input') as HTMLInputElement;

    const inputWrapper1 = document.createElement('div') as HTMLDivElement;
    const inputWrapper2 = document.createElement('div') as HTMLDivElement;
    const inputWrapper3 = document.createElement('div') as HTMLDivElement;
    const inputWrapper4 = document.createElement('div') as HTMLDivElement;

    const cardSectionError = document.createElement('div') as HTMLDivElement;
    cardSectionError.classList.add('form__cart__section-error');

    inputWrapper1.classList.add('form__wrapper');
    inputWrapper2.classList.add('form__wrapper');
    inputWrapper3.classList.add('form__wrapper');
    inputWrapper4.classList.add('form__wrapper');

    const divError1 = document.createElement('div') as HTMLDivElement;
    divError1.classList.add('form__error');
    divError1.textContent = 'error!';

    const divError2 = document.createElement('div') as HTMLDivElement;
    divError2.classList.add('form__error');
    divError2.textContent = 'error!';

    const divError3 = document.createElement('div') as HTMLDivElement;
    divError3.classList.add('form__error');
    divError3.textContent = 'error!';

    const divError4 = document.createElement('div') as HTMLDivElement;
    divError4.classList.add('form__error');
    divError4.textContent = 'error!';

    const divError5 = document.createElement('div') as HTMLDivElement;
    divError5.classList.add('form__error');
    divError5.textContent = 'Card number - error!';
    divError5.classList.add('form__cart__error');

    const divError6 = document.createElement('div') as HTMLDivElement;
    divError6.classList.add('form__error');
    divError6.textContent = 'Date - error!';
    divError6.classList.add('form__cart__error');

    const divError7 = document.createElement('div') as HTMLDivElement;
    divError7.classList.add('form__error');
    divError7.classList.add('form__cart__error');
    divError7.textContent = 'CVV - error!';


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearCart();
        displayBlocKMain();
        removeHash();
        displayNoneDetails();
        clearAllFilters();
        form.submit();
    }, true);


    divForm.classList.add('card-form');
    form.classList.add('form');
    divText.textContent = 'Personal details';
    divText.classList.add('form__text');

    inputName.classList.add('form__name');
    inputName.classList.add('form__input');
    inputName.type = 'text';
    inputName.placeholder = 'Name';
    inputName.name = 'username';
    inputName.setAttribute('required', 'true');
    inputName.pattern = '[A-Za-zА-Яа-я]{3,}[ ][A-Za-zА-Яа-я]{3,}[ ]?.[A-Za-zА-Яа-я ]*';

    inputPhone.classList.add('form__phone');
    inputPhone.classList.add('form__input');
    inputPhone.type = 'tel';
    inputPhone.placeholder = 'Phone number';
    inputPhone.name = 'phone';
    inputPhone.setAttribute('required', 'true');
    inputPhone.pattern = '[+][0-9]{9,}';

    inputAddress.classList.add('form__address');
    inputAddress.classList.add('form__input');
    inputAddress.type = 'text';
    inputAddress.placeholder = 'Delivery address';
    inputAddress.name = 'address';
    inputAddress.setAttribute('required', 'true');
    inputAddress.pattern = '.{5,}[ ].{5,}[ ].{5,}[ ]?.(.)*';

    inputEmail.classList.add('form__email');
    inputEmail.classList.add('form__input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'E-mail';
    inputEmail.name = 'email';
    inputEmail.setAttribute('required', 'true'); 

    buttonSubmit.classList.add('form__submit', 'button');
    buttonSubmit.textContent = 'confirm';

    cardSection.classList.add('form__card-section');
    cardTitle.textContent = 'Credit card details';
    cardTitle.classList.add('form__card-section__title');
    card.classList.add('form__card-section__card');
    paymentSystem.classList.add('form__payment-system');

    inputNumberCard.classList.add('form__number-card');
    inputNumberCard.classList.add('form__input');
    inputNumberCard.type = 'text';
    inputNumberCard.name = 'number-card';
    inputNumberCard.setAttribute('required', 'true');
    inputNumberCard.placeholder = 'Card number';
    inputNumberCard.pattern = '([0-9]{4}[ ]){3}[0-9]{4}';
    inputNumberCard.minLength = 19;
    inputNumberCard.maxLength = 19;

    cardDivFirst.classList.add('form__card-box');
    cardDivSecond.classList.add('form__card-box');

    labelExpirationDate.textContent = 'Valid:';
    labelCVV.textContent = 'CVV:';

    inputExpirationDate.classList.add('form__expiration-date');
    inputExpirationDate.classList.add('form__input');
    inputExpirationDate.type = 'text';
    inputExpirationDate.name = 'expiration-date';
    inputExpirationDate.setAttribute('required', 'true');
    inputExpirationDate.placeholder = 'MM/YY';
    inputExpirationDate.pattern = '([0][1-9]|10|11|12).[0-9]{2}';

    inputCVV.classList.add('form__input');
    inputCVV.classList.add('form__CVV');
    inputCVV.type = 'text';
    inputCVV.name = 'CVV';
    inputCVV.setAttribute('required', 'true');
    inputCVV.placeholder = 'Code';
    inputCVV.pattern = '[0-9]{3}';
    inputCVV.minLength = 3;
    inputCVV.maxLength = 3;

    divForm.appendChild(form);
    form.appendChild(divText);

    // form.appendChild(inputName);
    form.appendChild(inputWrapper1);
    inputWrapper1.appendChild(inputName);
    inputWrapper1.appendChild(divError1);
    
    // form.appendChild(inputPhone);
    form.appendChild(inputWrapper2);
    inputWrapper2.appendChild(inputPhone);
    inputWrapper2.appendChild(divError2);

    // form.appendChild(inputAddress);
    form.appendChild(inputWrapper3);
    inputWrapper3.appendChild(inputAddress);
    inputWrapper3.appendChild(divError3);

    // form.appendChild(inputEmail);
    form.appendChild(inputWrapper4);
    inputWrapper4.appendChild(inputEmail);
    inputWrapper4.appendChild(divError4);

    form.appendChild(cardSection);

    cardSection.appendChild(cardTitle);
    cardSection.appendChild(card);

    card.appendChild(cardDivFirst);
    card.appendChild(cardDivSecond);
    card.appendChild(cardSectionError);
    cardSectionError.appendChild(divError5);
    cardSectionError.appendChild(divError6);
    cardSectionError.appendChild(divError7);


    cardDivFirst.appendChild(paymentSystem);
    cardDivFirst.appendChild(inputNumberCard);

    cardDivSecond.appendChild(labelExpirationDate);
    labelExpirationDate.appendChild(inputExpirationDate);
    cardDivSecond.appendChild(labelCVV);
    labelCVV.appendChild(inputCVV);

    form.appendChild(buttonSubmit);    
    body.appendChild(divForm);

    focusForm ();
    inputNumberCard.addEventListener('input', changePaymentSystem);

    inputNumberCard.addEventListener('input', addSpaceCardNumber);
    inputNumberCard.addEventListener('input', isNumber);

    inputExpirationDate.addEventListener('input', addSlashInputDate);
    inputExpirationDate.addEventListener('input', isNumber);

    inputCVV.addEventListener('input', isNumber);

    validityCheck();

    inputName.addEventListener('input', () => {
        if (inputName.checkValidity() === true) {
            divError1.style.opacity = '0';
        } else {
            divError1.style.opacity = '1';
        }
    })

    inputPhone.addEventListener('input', () => {
        if (inputPhone.checkValidity() === true) {
            divError2.style.opacity = '0';
        } else {
            divError2.style.opacity = '1';
        }
    })

    inputEmail.addEventListener('input', () => {
        if (inputEmail.checkValidity() === true) {
            divError4.style.opacity = '0';
        } else {
            divError4.style.opacity = '1';
        }
    })

    inputAddress.addEventListener('input', () => {
        if (inputAddress.checkValidity() === true) {
            divError3.style.opacity = '0';
        } else {
            divError3.style.opacity = '1';
        }
    })

    inputNumberCard.addEventListener('input', () => {
        if (inputNumberCard.checkValidity() === true) {
            divError5.style.opacity = '0';
        } else {
            divError5.style.opacity = '1';
        }
    })

    inputExpirationDate.addEventListener('input', () => {
        if (inputExpirationDate.checkValidity() === true) {
            divError6.style.opacity = '0';
        } else {
            divError6.style.opacity = '1';
        }
    })

    inputCVV.addEventListener('input', () => {
        if (inputCVV.checkValidity() === true) {
            divError7.style.opacity = '0';
        } else {
            divError7.style.opacity = '1';
        }
    })
}


function focusForm () {
    const formInputName = document.querySelector('.form__name') as HTMLInputElement;
    const formInputPhone = document.querySelector('.form__phone') as HTMLInputElement;
    const formInputAddress = document.querySelector('.form__address') as HTMLInputElement;
    const inputEmail = document.querySelector('.form__email') as HTMLInputElement;
    const inputNumberCard = document.querySelector('.form__number-card') as HTMLInputElement;
    const inputExpirationDate = document.querySelector('.form__expiration-date') as HTMLInputElement;
    const inputCVV = document.querySelector('.form__CVV') as HTMLInputElement;

    
    formInputName.addEventListener('focus', () => {
        if (formInputName.placeholder === 'Name') {
            formInputName.placeholder = '';
        }
    });

    formInputName.addEventListener('blur', () => {
        if (formInputName.placeholder === '') {
            formInputName.placeholder = 'Name';
        }
    });

    formInputPhone.addEventListener('focus', () => {
        if (formInputPhone.placeholder === 'Phone number') {
            formInputPhone.placeholder = '';
        }
    });

    formInputPhone.addEventListener('blur', () => {
        if (formInputPhone.placeholder === '') {
            formInputPhone.placeholder = 'Phone number';
        }
    });

    formInputAddress.addEventListener('focus', () => {
        if (formInputAddress.placeholder === 'Delivery address') {
            formInputAddress.placeholder = '';
        }
    });

    formInputAddress.addEventListener('blur', () => {
        if (formInputAddress.placeholder === '') {
            formInputAddress.placeholder = 'Delivery address';
        }
    });

    inputEmail.addEventListener('focus', () => {
        if (inputEmail.placeholder === 'E-mail') {
            inputEmail.placeholder = '';
        }
    });

    inputEmail.addEventListener('blur', () => {
        if (inputEmail.placeholder === '') {
            inputEmail.placeholder = 'E-mail';
        }
    });

    inputNumberCard.addEventListener('focus', () => {
        if (inputNumberCard.placeholder === 'Card number') {
            inputNumberCard.placeholder = '';
        }
    });

    inputNumberCard.addEventListener('blur', () => {
        if (inputNumberCard.placeholder === '') {
            inputNumberCard.placeholder = 'Card number';
        }
    });

    inputExpirationDate.addEventListener('focus', () => {
        if (inputExpirationDate.placeholder === 'MM/YY') {
            inputExpirationDate.placeholder = '';
        }
    });

    inputExpirationDate.addEventListener('blur', () => {
        if (inputExpirationDate.placeholder === '') {
            inputExpirationDate.placeholder = 'MM/YY';
        }
    });

    inputCVV.addEventListener('focus', () => {
        if (inputCVV.placeholder === 'Code') {
            inputCVV.placeholder = '';
        }
    });

    inputCVV.addEventListener('blur', () => {
        if (inputCVV.placeholder === '') {
            inputCVV.placeholder = 'Code';
        }
    });
}


let array: Array<string> = [];
let string: string = '';
let countOfFour: number = 0;


function changePaymentSystem () {
    let cardNumber: Array<string> = [];
    const formPaymentSystem = document.querySelector('.form__payment-system') as HTMLDivElement;
    const inputNumberCard = document.querySelector('.form__number-card') as HTMLInputElement;

    cardNumber.push(inputNumberCard.value);
    let firstNumber: string = String(cardNumber).split('')[0];

    if (firstNumber === '4') {
        formPaymentSystem?.classList.add('form__payment-system_visa');
        formPaymentSystem.style.backgroundImage = "url('./images/visa.png')";

    } else if (firstNumber === '5') {
        formPaymentSystem?.classList.add('form__payment-system_mastercard');
        formPaymentSystem.style.backgroundImage = "url('./images/master.png')";

    } else if (firstNumber === '2') {
        formPaymentSystem?.classList.add('form__payment-system_mir');
        formPaymentSystem.style.backgroundImage = "url('./images/mir.svg')";

    } else {
        formPaymentSystem.style.backgroundImage = 'none';
    }
}


function addSlashInputDate (this: HTMLInputElement) {
    const inputExpirationDate = document.querySelector('.form__expiration-date') as HTMLInputElement;

    let cardDate: string = inputExpirationDate.value.replace(/\D/g, '').substring(0,4);
    if (cardDate) {
        cardDate = cardDate.match(/.{1,2}/g)?.join('/') || '';
        this.value = cardDate;
    }
}


function isNumber (this: HTMLInputElement) {
    // const inputNumberCard = document.querySelector('.form__number-card') as HTMLInputElement;
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const lastNumber: string = this.value[this.value.length - 1];

    if (!(number.includes(lastNumber))) {
        this.value = this.value.slice(0, -1);
    }
}


function addSpaceCardNumber (this: HTMLInputElement) {
    const inputNumberCard = document.querySelector('.form__number-card') as HTMLInputElement;

    let cardNumber: string = inputNumberCard.value.replace(/\D/g, '').substring(0,20);
    if (cardNumber) {
        cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || '';
        this.value = cardNumber;
    }
}


function validityCheck () {
    const form = document.querySelector('.card-form') as HTMLDivElement;
    const submit = document.querySelector('.form__submit') as HTMLButtonElement;
    const inputs = form.querySelectorAll('.form__input') as NodeListOf<Node>;


    submit.addEventListener('click', function() {
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i] as HTMLInputElement;
            if (i < 4) {
                const parent = input.parentElement;
                console.log(input);
                const error = parent?.querySelector('.form__error') as HTMLElement;
                if (input.checkValidity() === false) {
                    error.style.opacity = '1';
                } else {
                    error.style.opacity = '0';
                }
            } else {
                const cardErrorSection = document.querySelector('.form__cart__section-error') as HTMLDivElement;
                const cardErrors = cardErrorSection.querySelectorAll('.form__error') as NodeListOf<Node>;

                if (input.checkValidity() === false) {
                    if (i === 4) {
                        (cardErrors[0] as HTMLDivElement).style.opacity = '1';
                    } else if (i === 5) {
                        (cardErrors[1] as HTMLDivElement).style.opacity = '1';
                    } else if ( i === 6) {
                        (cardErrors[2] as HTMLDivElement).style.opacity = '1';
                    }                    
                } else {
                    if (i === 4) {
                        (cardErrors[0] as HTMLDivElement).style.opacity = '0';
                    } else if (i === 5) {
                        (cardErrors[1] as HTMLDivElement).style.opacity = '0';
                    } else if ( i === 6) {
                        (cardErrors[2] as HTMLDivElement).style.opacity = '0';
                    } 
                }
            }
        }
    })
}


formOpen ();
formClose ();


export { createForm, formActive }



