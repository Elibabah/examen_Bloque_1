fetch("./json.json")
    .then((response) => response.json()) //traer objeto y pasarlo a json
    .then((data) => console.log(data)) // traer el data para entonces iterarlo
    .catch((error) => console.log(error)) //cachar error y dar respuesta