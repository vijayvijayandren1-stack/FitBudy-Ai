function checkFitness() {

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var result = document.getElementById("result");


    if (height == "" || weight == "") {

        result.innerHTML =
            '<div class="error">' +
            '<h2>Please enter your height and weight</h2>' +
            '<p>Both values are required.</p>' +
            '</div>';

        return;
    }


    if (height <= 0 || weight <= 0) {

        result.innerHTML =
            '<div class="error">' +
            '<h2>Invalid Details</h2>' +
            '<p>Please enter valid height and weight.</p>' +
            '</div>';

        return;
    }


    var heightMeter = height / 100;

    var bmi = weight / (heightMeter * heightMeter);

    bmi = bmi.toFixed(1);


    if (bmi < 18.5) {

        result.innerHTML =

            '<div class="result-card">' +

            '<h2 class="result-title low">LOW WEIGHT</h2>' +

            '<p>Your weight is lower than the general healthy BMI range.</p>' +

            '<div class="bmi">' +
            '<strong>Your BMI: ' + bmi + '</strong>' +
            '</div>' +

            '<div class="info-grid">' +

            '<div class="info-card">' +
            '<h3>🍽 Food Recommendation</h3>' +
            '<p>' +
            'Milk, eggs, banana, nuts, peanut butter, rice, ' +
            'whole grains and other protein-rich foods can help ' +
            'you increase your calorie and nutrient intake.' +
            '</p>' +
            '</div>' +

            '<div class="info-card">' +
            '<h3>💪 What To Do</h3>' +
            '<p>' +
            'Eat regular balanced meals, include protein in meals ' +
            'and consider strength exercises.' +
            '</p>' +
            '</div>' +

            '</div>' +

            '</div>';

    }


    else if (bmi >= 18.5 && bmi <= 24.9) {

        result.innerHTML =

            '<div class="result-card">' +

            '<h2 class="result-title normal">CORRECT WEIGHT ✓</h2>' +

            '<p>Your BMI is within the general healthy range.</p>' +

            '<div class="bmi">' +
            '<strong>Your BMI: ' + bmi + '</strong>' +
            '</div>' +

            '<div class="info-grid">' +

            '<div class="info-card">' +
            '<h3>🥗 Maintain Your Diet</h3>' +
            '<p>' +
            'Eat vegetables, fruits, whole grains, protein-rich foods ' +
            'and drink enough water.' +
            '</p>' +
            '</div>' +

            '<div class="info-card">' +
            '<h3>🏃 Stay Active</h3>' +
            '<p>' +
            'Continue regular physical activity, exercise and ' +
            'maintain a balanced lifestyle.' +
            '</p>' +
            '</div>' +

            '</div>' +

            '</div>';

    }


    else {

        result.innerHTML =

            '<div class="result-card">' +

            '<h2 class="result-title over">OVER WEIGHT</h2>' +

            '<p>Your BMI is above the general healthy range.</p>' +

            '<div class="bmi">' +
            '<strong>Your BMI: ' + bmi + '</strong>' +
            '</div>' +

            '<div class="info-grid">' +

            '<div class="info-card">' +
            '<h3>🥗 Food Recommendation</h3>' +
            '<p>' +
            'Choose vegetables, fruits, whole grains, lean protein ' +
            'and other nutrient-dense foods. Reduce excess sugary ' +
            'drinks and highly processed or fried foods.' +
            '</p>' +
            '</div>' +

            '<div class="info-card">' +
            '<h3>🏃 What To Do</h3>' +
            '<p>' +
            'Regular walking, exercise and a balanced diet can support ' +
            'healthy weight management.' +
            '</p>' +
            '</div>' +

            '</div>' +

            '</div>';
    }
}