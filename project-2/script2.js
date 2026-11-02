let form = document.querySelector('form');
        /* this usecase will give you empty value 
        const weight = parseInt(document.querySelector('#Weight').value); */

        // btn.addEventListener('click', () => {
        //     console.log(bmi);
        // })

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const weight = parseInt(document.querySelector('#Weight').value);
            const height = parseInt(document.querySelector('#height').value);
            const results = document.querySelector('#results');

            if (height === "" || height < 0 || isNaN(height)) {
                results.innerHTML = `please give valid height ${height}`;
            } else if (weight === "" || weight < 0 || isNaN(weight)) {
                results.innerHTML = `please give valid weight ${weight}`;
            } else {
                const bmi = (weight / ((height * height) / 10000)).toFixed(2);   // .toFixed decimal k baad ki no. of values btata hai. 
                // show the result
                if (bmi < 18.6) {
                    results.innerHTML = `<span>${bmi} is your BMI & you are unerweight </span>`;
                } else if (bmi >= 18.6 && bmi <= 24.9) {
                    results.innerHTML = `<span>${bmi} is your BMI & you are perfect. </span>`;
                } else if (bmi > 24.9) {
                    results.innerHTML = `<span>${bmi} is your BMI & you are Overweight. </span>`;
                }
            }
        })