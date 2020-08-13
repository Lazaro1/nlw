const proffys = [
    {
         name: "Diego Fernandes",
         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
         whasapp:"9 885599", 
         bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
         subject: "Quimica", 
         cost: "20", 
         weekday: [0], 
         time_from: [720], 
         time_to: [1200]
    },
    {
        name: "Mayk Evangelista",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whasapp:"9 885599", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Quimica", 
        cost: "20", 
        weekday: [4], 
        time_from: [720], 
        time_to: [1200]
   },
   {
    name: "Lázaro Lima",
    avatar:"https://avatars2.githubusercontent.com/u/31623370?s=460&u=02a661997f2b0a7809138daea25224a69d019de8&v=4" , 
    whasapp:"9 885599", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Quimica", 
    cost: "20", 
    weekday: [4], 
    time_from: [720], 
    time_to: [1200]
}

]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    return res.render("study.html", {proffys})
}

function pageGiveclasses (req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configurar arquivos estáticos (CSS, SCRIPTS, IMAGENS)
server.use(express.static("public"))
//rotas da Aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveclasses)
.listen(5100)




