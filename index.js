fetch("./json.json")
    .then((response) => response.json()) //traer objeto y pasarlo a json
    .then((data) => bootcampData(data)) // traer el data para entonces iterarlo
    //.catch((error) => console.log(error)) //cachar error y dar respuesta


let bootcampData = (data) => {
    console.log(data.ourBootcamp)
    for (const friends of data.ourBootcamp) {
        console.log(friends)
        console.log(friends.name)
        document.getElementById("BootcampMembers").innerHTML += friends.name
    }
}