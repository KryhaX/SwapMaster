// ==UserScript==
// @name         Replacer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace 'xx' in textareas with a user-defined value
// @author       You
// @match        http://localhost:8000/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter new value';
    input.style.position = 'fixed';
    input.style.left = '20px';
    input.style.bottom = '60px';
    input.style.padding = '10px';
    input.style.fontSize = '14px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    input.style.zIndex = '1000';
    input.value = 12;
    document.body.appendChild(input);

    var button = document.createElement('button');
    button.innerText = 'Update xx value';
    button.style.position = 'fixed';
    button.style.left = '20px';
    button.style.bottom = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = 'gray';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    document.body.appendChild(button);

    let rx = "xx"

    function updateXXValue(newValue) {
        var textareas = document.querySelectorAll('.server-message textarea');
        textareas.forEach(function (textarea) {
            var currentText = textarea.value;

            console.log(textarea);
            console.log(`Current Text: ${currentText}`);
            console.log(`Regex Expression: ${rx}`);
            console.log(`New Value: ${newValue}`)

            textarea.value = currentText.replace(rx, newValue);
            // console.log(currentText.replace(rx, newValue));
        });
    }

    button.addEventListener('click', function () {
        var newValue = input.value;
        if (newValue !== '') {
            updateXXValue(newValue);
            button.innerText = 'Update xx value';
        } else {
            alert('Please enter a value');
        }
    });
})();
