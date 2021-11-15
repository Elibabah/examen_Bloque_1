fetch("./json.json")
    .then((response) => response.json()) //traer objeto y pasarlo a json
    .then((data) => bootcampData(data)) // traer el data para entonces iterarlo
    //.catch((error) => console.log(error)) //cachar error y dar respuesta


//Función para iterar datos del JSON
let bootcampData = (data) => {
    console.log(data.ourBootcamp)
    for (const friends of data.ourBootcamp) {
        console.log(friends)
        console.log(friends.name)
        console.log(friends.birthday)

        //Pintar dinámicamente en HTML

        //Integrantes Bootcamp
        let myMates = document.getElementById("BootcampMembers")
        myMates.innerHTML += friends.name + " "

        //Fechas de cumpleaños
        let ourBirthdays = document.getElementById("cumpleaños")
        ourBirthdays.innerHTML += `<li>${friends.birthday}<li>`
    }
}