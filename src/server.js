//servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveclasses, saveClasses } = require("./pages")


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded ({ extended: true }))
//Configurar arquivos estáticos (CSS, SCRIPTS, IMAGENS)
.use(express.static("public"))
//rotas da Aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveclasses)
.post("/save-classes", saveClasses)
.listen(5100)




