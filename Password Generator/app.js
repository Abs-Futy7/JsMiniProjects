const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~@#$%^&*()_+/";

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    let generatedPassword = password;

    if (upperInput.checked) {
        generatedPassword += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        generatedPassword += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        generatedPassword += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        generatedPassword += getRandomData(symbolSet);
    }
    
    if (generatedPassword.length < totalChar.value) {
        return generatePassword(generatedPassword);
    }
    
    passBox.innerText = truncateString(generatedPassword, totalChar.value);
}

document.getElementById("btn").addEventListener("click", function() {
    generatePassword();
});

function truncateString(str, num) {
    if (str.length > num) {
        return str.substring(0, num);
    } else {
        return str;
    }
}

// Initial call to generate a password when the page loads
generatePassword();

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}