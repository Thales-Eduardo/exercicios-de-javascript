/*) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const compare = (arr1, arr2) => {
    return arr1.lenght === arr2.lenght &&
    arr1.every((item, index) => item === arr2[index]);
};

console.log(compare(arr1,arr2));