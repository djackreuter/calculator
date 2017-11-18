window.onload = function() {
    var display = document.getElementById('display'), // display screen
    equals = document.getElementById('equals'), // equals button
    allNums = document.getElementsByClassName('num'), // numbers on calc
    ops = document.getElementsByClassName('ops'), // all the operators
    currentNum = '', // current number
    oldNum = '', // last number selected
    result, // result of calculation
    operator; // operator used

    // Get number that is clicked
    var setNum = function() {
        if(result) {
            // reset display if there was a result from prior calc
            currentNum = this.getAttribute('data-num');
            result = '';
        } else {
            // add number to previous number
            currentNum += this.getAttribute('data-num');
        }
        // display the number
        display.innerHTML = currentNum;
    };

    // when operator is clicked, pass number to oldNum 
    var moveNum = function() {
        oldNum = currentNum;
        currentNum = '';
        operator = this.getAttribute('data-ops');

        equals.setAttribute('data-result', '');
    };

    // when equals is clicked, calculate result
    var displayNum = function() {
        // convert string to num
        oldNum = parseFloat(oldNum);
        currentNum = parseFloat(currentNum);

        // perform operation
        switch(operator) {
            case 'plus':
            result = oldNum + currentNum;
            break;

            
        }
    }

}