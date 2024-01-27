// Desafio Classificador de nível de Herói

// constantes e variáveis
const alfaNote = "O Herói de nome "
const omegaNote = " está no nível de "

let nomeHeroi = "Cris do Blog"
let xpHeroi = 13231

// estruturas de decisões
if(xpHeroi < 1000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Ferro")
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Bronze")
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Prata")
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Ouro")
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Platina")
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Ascendente")
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
  console.log(alfaNote + nomeHeroi + omegaNote + "Imortal")
}else if(xpHeroi >= 10001){
  console.log(alfaNote + nomeHeroi + omegaNote + "Radiante")
}

// saída conforme desafio