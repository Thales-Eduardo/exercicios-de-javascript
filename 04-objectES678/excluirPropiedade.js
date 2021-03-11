function excluirPropiedade(obj) {
    delete obj.rollno
    return obj
}

console.log(excluirPropiedade({
    nome : "David Rayy",
    sclass : "VI",
    rollno : 12 
}))