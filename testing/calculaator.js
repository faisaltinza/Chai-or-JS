const buttonEl = document.querySelectorAll('button');
const displayE1 = document.getElementById('display');
let calculated = false;
let Oprator = false;

buttonEl.forEach((e)=>{
    e.addEventListener('click', function () {
        const buttonValue = (e.innerHTML)
        if (buttonValue === 'C'){
            calculated = false;
            Oprator = false; // रीसेट ऑपरेटर फ्लैग भी
            clearResults()
        }else if(buttonValue === '='){
            calculated = true;
            Oprator = false; // रीसेट ऑपरेटर फ्लैग
            calculateResult()
        }else if(buttonValue === '←'){
            clearlastDigit()
            // अगर लास्ट डिजिट हटाने के बाद कोई ऑपरेटर नहीं बचा तो फ्लैग रीसेट करें
            if(!displayE1.value.match(/[\+\-\*\/]/)) {
                Oprator = false;
            }
        }else if(['+', '-', '*', '/'].includes(buttonValue)){
            // अगर ऑपरेटर है और ऑपरेटर फ्लैग पहले से ही सेट है, तो इसे इग्नोर करें
            if(Oprator === true) {
                return;
            }
            // अगर डिस्प्ले खाली है और ऑपरेटर '-' नहीं है तो इग्नोर करें
            // लेकिन '-' को अलाउ करें क्योंकि यह नेगेटिव नंबर्स के लिए इस्तेमाल किया जा सकता है
            if(displayE1.value === "" && buttonValue !== '-'){
                return;
            }
            appendValue(buttonValue);
            Oprator = true;
        }
        else {
            // कोई नंबर दबाया गया है
            appendValue(buttonValue)
            // ऑपरेटर फ्लैग रीसेट नहीं करते, क्योंकि नंबर दबाने के बाद भी, 
            // अगर ऑपरेटर पहले से है तो वह रहना चाहिए
        }
    } )
})

function clearResults() {
    displayE1.value = ""
}

function calculateResult() {
    if (displayE1.value == ""){
        displayE1.value = "Enter Some figures"
    }
    try {
        displayE1.value = eval(displayE1.value)
    } catch (error) {
        displayE1.value = "Error"
    }
}

function appendValue(buttonValue) {
    if (calculated === true){
        displayE1.value = "";
        calculated = false;
    }
    displayE1.value += buttonValue //add in previous value
}

function clearlastDigit() {
    if (calculated === false) {
        const lastChar = displayE1.value.slice(-1);
        displayE1.value = displayE1.value.slice(0, -1);
        
        // अगर हटाया गया कैरेक्टर ऑपरेटर था, तो ऑपरेटर फ्लैग रीसेट करें
        if(['+', '-', '*', '/'].includes(lastChar)) {
            Oprator = false;
        }
    }else{
        displayE1.value = ""
        calculated = false
        Oprator = false
    }
}
