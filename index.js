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
            //     document.getElementById("BootcampMembers").innerHTML += friends.name + " "
            //     document.getElementById("cumpleaños").innerHTML += `<li>${friends.birthday}<li>`
    }
}



//Función para pintar datos iterados en el HTML
/*let imprimir = (name, age) = {

}*/