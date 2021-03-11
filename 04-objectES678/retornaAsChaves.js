function student(obj) {
    return Object.keys(obj).toString()
}

console.log( student({
    nome : "David Rayy",
    sclass : "VI", 
    rollno : 12
}))