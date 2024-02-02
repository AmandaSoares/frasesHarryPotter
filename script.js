let fraseElement = document.querySelector('.frase')
let autorElement = document.querySelector('.autor_frase')
document.querySelector('.botao_mudar_frase').addEventListener('click', mudarFrase)

const frases = [
    {
        frase : 'Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz', 
        autor: 'Albus Dumbledore'
    },
    
    {
        frase : 'É leviÔsa, e não leviosÁ!', 
        autor: 'Hermione Granger'
    },
    
    {
        frase : 'O mundo não se divide entre gente boa e Comensais da Morte. Todos temos luz e trevas dentro de nós, o que importa é o lado do qual decidimos agir', 
        autor: 'Sirius Black'
    },

    {
        frase : 'É preciso ter coragem para enfrentar os inimigos, e ainda mais para enfrentar os amigos', 
        autor: 'Albus Dumbledore'
    },

    {
        frase : 'São as nossas escolhas que revelam o que realmente somos, muito mais do que as nossas qualidades', 
        autor: 'Albus Dumbledore'
    },

    {
        frase : 'Por que aranhas? Por que não podia ser: sigam as borboletas?', 
        autor: 'Ron Weasley'
    },

    {
        frase : 'Juro solenemente não fazer nada de bom!', 
        autor: 'Os Marotos'
    },

    {
        frase : 'Que lindo lugar para estar com os amigos. Dobby está feliz porque está com o seu amigo… Harry Potter!', 
        autor: 'Dobby'
    },

    {
        frase : 'Não existe o bem e o mal. Somente o poder, e aqueles que são muito fracos para possuí-lo', 
        autor: 'Lord Voldemort'
    },

    {
        frase : 'Controle suas emoções e discipline sua mente', 
        autor: 'Severus Snape'
    },

    {
        frase: 'Aqueles que nos amam nunca nos deixam de verdade',
        autor: 'Sirius Black'
    },

    {
        frase: 'Eu não saio por aí procurando encrenca. Em geral as encrencas é que vêm ao meu encontro',
        autor: 'Harry Potter'
    },
    
]

let i

function mudarFrase() {
    i = Math.floor(Math.random() * frases.length)
    mostrarNaTela()
}

function mostrarNaTela() {
    fraseElement.textContent = `"${frases[i].frase}"`
    autorElement.textContent = `${frases[i].autor}` 
}
