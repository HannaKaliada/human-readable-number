module.exports = function toReadable(number) {
    let array = String(number).split("");
    function isUnits(index) {
        return (index == array.length - 1) ? true : false;
    }
    function isDozen(index) {
        for (let i = array.length - 2; i >= 0; i - 3) {
            return (i == index) ? true : false;
        }
    }
    function isHundred(index) {
        for (let i = array.length - 3; i >= 0; i - 3) {
            return (i == index) ? true : false;
        }
    }
    function isThousand(index) {
        for (let i = array.length - 4; i >= 0; i - 3) {
            return (i == index) ? true : false;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            if (isDozen(i)) {
                if (array[i + 1] == 0) {
                    array[i] = "ten";
                    array.pop();
                }
                else if (array[i + 1] == 1) {
                    array[i] = "eleven";
                    array.pop();
                }
                else if (array[i + 1] == 2) {
                    array[i] = "twelve";
                    array.pop();
                }
                else if (array[i + 1] == 3) {
                    array[i] = "thirteen";
                    array.pop();
                }
                else if (array[i + 1] == 4) {
                    array[i] = "fourteen";
                    array.pop();
                }
                else if (array[i + 1] == 5) {
                    array[i] = "fifteen";
                    array.pop();
                }
                else if (array[i + 1] == 6) {
                    array[i] = "sixteen";
                    array.pop();
                }
                else if (array[i + 1] == 7) {
                    array[i] = "seventeen";
                    array.pop();
                }
                else if (array[i + 1] == 8) {
                    array[i] = "eighteen";
                    array.pop();
                }
                else if (array[i + 1] == 9) {
                    array[i] = "nineteen";
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "one hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "one thousand "
            }
            else if (isUnits) {
                array[i] = "one ";
            }
        }
        else if (array[i] == 2) {
            if (isDozen(i)) {
                array[i] = "twenty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "two hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "two thousand "
                if (array[i + 1] == 0) {
                    array[i + 1] == "";
                }
            }
            else if (isUnits) {
                array[i] = "two ";
            }
        }
        else if (array[i] == 3) {
            if (isDozen(i)) {
                array[i] = "thirty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "three hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "three thousand "
            }
            else if (isUnits) {
                array[i] = "three ";
            }
        }
        else if (array[i] == 4) {
            if (isDozen(i)) {
                array[i] = "forty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "four hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "four thousand "
            }
            else if (isUnits) {
                array[i] = "four ";
            }
        }
        else if (array[i] == 5) {
            if (isDozen(i)) {
                array[i] = "fifty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "five hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "five thousand "
            }
            else if (isUnits) {
                array[i] = "five ";
            }
        }
        else if (array[i] == 6) {
            if (isDozen(i)) {
                array[i] = "sixty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "six hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "six thousand "
            }
            else if (isUnits) {
                array[i] = "six ";
            }
        }
        else if (array[i] == 7) {
            if (isDozen(i)) {
                array[i] = "seventy ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "seven hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "seven thousand "
            }
            else if (isUnits) {
                array[i] = "seven ";
            }
        }
        else if (array[i] == 8) {
            if (isDozen(i)) {
                array[i] = "eighty ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "eight hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "eight thousand "
            }
            else if (isUnits) {
                array[i] = "eight ";
            }
        }
        else if (array[i] == 9) {
            if (isDozen(i)) {
                array[i] = "ninety ";
                if (array[i + 1] == 0) {
                    array.pop();
                }
            }
            else if (isHundred(i)) {
                array[i] = "nine hundred ";
            }
            else if (isThousand(i)) {
                array[i] = "nine thousand "
            }
            else if (isUnits) {
                array[i] = "nine ";
            }
        }
        else if (array[i] == 0 && array.length > 1) {
            delete array[i];
        }
        else if (array[i] == 0) {
            array[i] = "zero";
        }

    }
    return array.join("").replace(/\s*$/, '');
}
