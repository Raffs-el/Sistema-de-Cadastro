let listaDeParticipantes = ["Rafael", "Mayara", "Marta", "Gabriel", "Carla", "Yuri", "Elisabete", "Joel", "Timótio"];
let quantidadeDeParticipantes = listaDeParticipantes.length;
let idade = 26;

if (quantidadeDeParticipantes < 100 && idade >= 18) {
    listaDeParticipantes.push("Matheus");
    console.log(listaDeParticipantes);
    console.log("Cadastro realizado!");
} else if (idade < 18) {
    console.log("Cadastro não concluído, pois a sua idade é inferior a 18 anos.");
} else {
    console.log("Cadastro não concluído, pois o número de participantes excedeu o limite.");
}