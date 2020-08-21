const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química", 
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hours, minutes ] = time.split(":")
    return Number((hours * 60) + minutes)

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}