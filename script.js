const front = document.querySelector(".front")
const back = document.querySelector(".back")
const cookie = document.querySelector(".shake-image")
const crackedCookie = document.querySelector(".cracked-cookie")
const btnTryAgain = document.querySelector(".try-again")
const luckContainer = document.querySelector(".luck")

const frasesMotivacionais = [
  "Acredite em você mesmo e em tudo que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
  "Nunca é tarde demais para ser o que você poderia ter sido.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não importa o quão devagar você vá, desde que você não pare.",
  "Lembre-se: cada dia é uma nova chance para se tornar quem você quer ser.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Se você quer algo que nunca teve, você precisa fazer algo que nunca fez.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "Não limite seus desafios, desafie seus limites.",
  "O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade.",
  "A jornada de mil milhas começa com um único passo."
];

function randomPhrase () {
  let fraseAleatoria = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)]
  luckContainer.querySelector("p").innerText = `${fraseAleatoria}`
}

function toggleCard () {
  front.classList.toggle('hidden')
  back.classList.toggle('hidden')
  luckContainer.classList.toggle('slide-in-fwd-bottom')
  randomPhrase()
}

cookie.addEventListener('click', toggleCard)
btnTryAgain.addEventListener('click', toggleCard)