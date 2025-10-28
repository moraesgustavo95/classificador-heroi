// Desafio: Classificador de Nível de Herói

// Variáveis principais
let heroi = "Gustavo"; // nome do herói (poderia vir de um prompt)
let xp = 0; // experiência inicial

// Simulando ganho de XP com laço de repetição
for (let i = 0; i < 10; i++) {
  xp += Math.floor(Math.random() * 1500); // cada missão dá entre 0 e 1500 XP
  console.log(`Missão ${i + 1} concluída! XP atual: ${xp}`);
}

// Estrutura de decisão para classificar o herói
let nivel = "";

if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Resultado final
console.log(`\nO Herói de nome ${heroi} está no nível de ${nivel}!`);