const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    // Iserir Dados
    proffyValue = {
        name: "Mayk Evangelista",
        avatar:"https://avatars2.githubusercontent.com/u/31623370?s=460&u=02a661997f2b0a7809138daea25224a69d019de8&v=4", 
        whasapp:"9 885599", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrarmos a aula
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220    
        },
        {
            weekday: 1, 
            time_from: 520, 
            time_to: 1220    
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos
    
    //Todos os Proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor

    const selectedAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedAndProffys)

    // o horario que a pessoa trabalha, por exempplo, é das 8h até as 18h
    // o horário do time_from 8h() precisa ser menor ou igual ao horário solicitado
    //o time_to precisa acima
    const selectClassSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "1"  
        AND class_schedule.time_from <= "520"      
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassSchedule)
})


