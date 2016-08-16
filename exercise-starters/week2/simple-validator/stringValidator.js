function getPhoneNumber() {
        var phone = prompt("Please Enter your phone number with this format 999-999_9999");
        var phoneValid = isPhoneValid(phone);
        if (phoneValid) {
                alert(`Thanks! for adding your valid ${phone} `);
        }
        else {
                alert("INVALID PHONE NUMBER! Please try again with this format 999-999-9999");
        }
}

function isPhoneValid(phone) {

        var good = false;
        if (phone != null) {
                if (phone != "") {
                        if (phone.length == 12) {

                                var firstTwo = phone.substring(0, 3);
                                var secondTwo = phone.substring(4, 7);
                                var lastFour = phone.substring(8, 12);

                                if (isNaN(firstTwo) === false) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (isNaN(secondTwo) === false) {
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
                                if (phone.charAt(3) === "-") {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (phone.charAt(7) === "-") {
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

function getBirthDate() {
        var bDate = prompt("Please Enter your birth date with this month/day/year format XX/XX/XXXX");
        var bDateValid = isbDateValid(bDate);
        if (bDateValid) {
                alert(`Thanks! for adding your valid ${bDate} `);
        }
        else {
                alert("INVALID Birth Date! Please try again with this month/day/year format XX/XX/XXXX");
        }
}

function isbDateValid(bDate) {

        var good = false;
        if (bDate != null) {
                if (bDate != "") {
                        if (bDate.length == 10) {

                                var firstTwo = bDate.substring(0, 2);
                                var secondTwo = bDate.substring(3, 5);
                                var lastFour = bDate.substring(6, 10);

                                if (isNaN(firstTwo) === false && (parseInt(firstTwo) <= 12 && parseInt(firstTwo) >= 1 )) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (isNaN(secondTwo) === false && (parseInt(secondTwo) <= 31 && parseInt(secondTwo) >= 1 )) {
                                        good = true;
                                }
                                else {
                                        return false;
                                }
                                if (isNaN(lastFour) === false && (parseInt(lastFour) >= 1900 && parseInt(lastFour) <= 2016 )) {
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