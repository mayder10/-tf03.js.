// ===============================
// 1. Criação do objeto principal
// ===============================

const empresa = {
    nome: "Tech Solutions",
    cidade: "São Paulo",
    anoFundacao: 2015,
    funcionarios: ["Denise ", "Carina", "luiza"]
};

console.log("=== Objeto Principal ===");
console.log(empresa);

// ===============================
// 2. Acessando propriedades
// ===============================

console.log("\n=== Acessando propriedades ===");
console.log("Nome:", empresa.nome);
console.log("Cidade:", empresa.cidade);
console.log("Ano de Fundação:", empresa.anoFundacao);

// ===============================
// 3. Iteração com for...in (objeto)
// ===============================

console.log("\n=== Iterando propriedades (for...in) ===");
for (let chave in empresa) {
    console.log(chave + ":", empresa[chave]);
}

// ===============================
// 4. Iteração com for...of (array)
// ===============================

console.log("\n=== Iterando array (for...of) ===");
for (let funcionario of empresa.funcionarios) {
    console.log(funcionario);
}

// ===============================
// 5. Comparação entre objetos (referência)
// ===============================

console.log("\n=== Comparação de objetos ===");

const empresa2 = empresa;

console.log("empresa === empresa2 ?", empresa === empresa2); // true

// ===============================
// 6. Cópia por referência
// ===============================

console.log("\n=== Cópia por referência ===");

empresa2.nome = "Nova Tech";

console.log("empresa.nome:", empresa.nome); // ALTERA também
console.log("empresa2.nome:", empresa2.nome);

// ===============================
// 7. Cópia com spread operator
// ===============================

console.log("\n=== Cópia com spread ===");

const empresa3 = { ...empresa };

empresa3.nome = "Empresa Independente";

console.log("empresa.nome:", empresa.nome); // não muda
console.log("empresa3.nome:", empresa3.nome);

// ===============================
// 8. Transformação em JSON
// ===============================

console.log("\n=== JSON.stringify ===");

const empresaJSON = JSON.stringify(empresa);

console.log("Objeto em JSON:");
console.log(empresaJSON);