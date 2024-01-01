const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if (height < 0 && height === '' && isNaN != (height)) {

        results.innerHTML = `Please enter a valid height  `;

    }
    else if (weight < 0 && weight === '' && isNaN != (weight)) {
        results.innerHTML = `Please enter a valid weight  `;
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `<span> Your bmi is ${bmi} You're underWeight</span>`;
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span> Your bmi is ${bmi} You have normal weight</span>`;

        }
        else if (bmi > 24.9) {
            results.innerHTML = `<span> Your bmi is ${bmi} You're overweight</span>`;

        }
    }


});