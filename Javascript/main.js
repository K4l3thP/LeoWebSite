window.onload = CargarTodo;
function CargarTodo(){
    annioActual();
    CargaDatos();
}
function annioActual(){
    let annio = new Date().getFullYear();
    let texto = "© " + annio + " Salud Terapeútica y Deportiva Leo";
    document.getElementById("pCopyright").innerHTML = texto;
}
