module.exports = function toReadable (number) {
        let n = number;
        let numStr10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let numStr20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
        let numStr100 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let firstNum = numStr10[Number(n.toString()[0])]; // first digit
        let lastNum = numStr10[Number(n.toString()[n.toString().length-1])]; //last digit

        if (n < 10) {
            return numStr10[n];
        }
        else if (n >= 10 && n <= 20) { 
            return numStr20[n - 10];
        }
        else if (n > 20 && n <= 99) { 
            return (n.toString()[1] === '0') ? `${numStr100[n/10]}` : `${numStr100[Number(n.toString()[0])]} ${lastNum}`; 
        }
        else if (n > 99 && n <= 999) { 
            if (n.toString()[1] === '1' ) {
                return `${firstNum} hundred ${numStr20[Number(n.toString()[2])]}`;
            }
            else if (n.toString()[1] === '0') {
                return (n.toString()[2] === '0') ? `${firstNum} hundred` : `${firstNum} hundred ${lastNum}`;
            }
            else if (n.toString()[2] === '0') {
                return `${firstNum} hundred ${numStr100[Number(n.toString()[1])]}`;
            }
            else {
                return `${firstNum} hundred ${numStr100[Number(n.toString()[1])]} ${lastNum}`; 
            }
        }
        else if (n > 999 && n <= 9999) { 
            if (n.toString()[2] === '1' ) {
                return `${firstNum} thouthand ${numStr10[Number(n.toString()[1])]} hundred ${numStr20[Number(n.toString()[3])]}`;
            }
            else if (n.toString()[1] === '0' && n.toString()[2] === '0') {
                return (n.toString()[3] === '0') ? `${firstNum} thouthand` : `${firstNum} thouthand ${lastNum}`;
            }
            else {
                return `${firstNum} thouthand ${numStr10[Number(n.toString()[1])]} hundred ${numStr100[Number(n.toString()[2])]} ${lastNum}`;
            }
        }
    
    
}
