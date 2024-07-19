// objects

// const student={
//     fullName: "tanya grover",
//     marks:89.56,
//     printMarks: function(){
//         console.log("marks= ",this.marks)// stydent marks
//     }
// }

//,,,,,,,,,,,,,,,,,,,Prototype,,,,,,,,,,,,,,,,,,,,,
const employee={
    
    calTax1() {
        console.log(" the rate is 10% ")
    }
}

    // calTax() {
    //     console.log(" the rate is 10% ")
    // }

    const a = {
        salary:8000,
    };
    
    const b= {
        salary:8000,
    };
    
    const c = {
        salary:8000,
    };

    a.__proto__=employee//we set our own prototype
    // here we can used employee object in the a pnject
    b.__proto__=employee

    c.__proto__=employee