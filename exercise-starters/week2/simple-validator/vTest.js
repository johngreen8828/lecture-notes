function getBirthDate() {
        var bDate = prompt("Please Enter your birth date with this format XX/XX/XXXX");
        var bDateValid = isbDateValid(bDate);
        if (bDateValid) {
                alert(`Thanks! for adding your valid ${bDate} `);
        }
        else {
                alert("INVALID Birth Date! Please try again with this format XX/XX/XXXX");
        }
}

function isbDateValid(bDate) {

        var good = false;
        if (bDate != null) {
                if (bDate != "") {
                        if (bDate.length == 12) {

                                var firstThree = bDate.substring(0, 2);
                                var secondThree = bDate.substring(3, 5);
                                var lastFour = bDate.substring(6, 10);

                                if (isNaN(firstThree) === false) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (isNaN(secondThree) === false) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (isNaN(lastFour) === false) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (bDate.charAt(2) === "/") {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (bDate.charAt(5) === "/") {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                        }
                }
        }
        if (good === true) {
                return good;
        }
        else {
                return false;
        }
}