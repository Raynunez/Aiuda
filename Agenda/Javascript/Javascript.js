function enviarDatos(){

    var name = document.getElementById('Nombre');
    var lastname = document.getElementById('Apellido');
    var number = document.getElementById('Numero');

    var detalle = {
      method: "POST",
      body: JSON.stringify({
        "nombre" : name.value,
        "apellido" : lastname.value,
        "telefono" : number.value,
      })
    }

    fetch('http://www.raydelto.org/agenda.php', detalle)
    .then((respuesta) => {
      console.log(name.value);
      console.log(lastname.value);
      console.log(number.value);
      return respuesta.json();

    })
}