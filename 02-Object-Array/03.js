calcularSalario = (horasTrabalhada, porHora) => {
    const salariobruto = horasTrabalhada * porHora;
    const imposto = 30 / 100 * salariobruto;
    const salarioLiquido = horasTrabalhada * porHora - imposto;
    return `Salário igual a R$ ${salarioLiquido}` ;
};
console.log(calcularSalario(180, 60));

// Ou assim

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
};
console.log(calcularSalarioLiquido(180, 60));