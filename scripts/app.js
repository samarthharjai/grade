// switch statment to show letter grade to number grade
function gradeCheck(m) {
    switch(m) {
        case "A":
            return alert(`The letter A converts to 90`);
            break;
        case "B":
            return alert(`The letter B converts to 80`);
            break;
        case "C":
            return alert(`The letter C converts to 70`);
            break;
        case "D":
            return alert(`The letter D converts to 60`);
            break;
        case "F":
            return alert(`The letter F converts to 50`);
            break;
        default:
            return alert(`Please enter a vaild letter grade (A, B, C, D, or F)`);
            break;
    }
}


// getting a button from html
document.getElementById("btnCheckGrade").addEventListener('click', function() {
    
    // result is getting an input from user from the textbox
    const result = document.getElementById("txtResult").value;
    // changing all lower case letters to upper case
    const output = result.toUpperCase();

    // Calling the functions 
    gradeCheck(output);
});

