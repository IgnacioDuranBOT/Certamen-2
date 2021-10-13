import jquery = require('jquery');

const $:JQueryStatic=jquery;
 
const d = document;

let form1:any = d.getElementById('form1');
let mensajeExito:any=d.getElementById('Exito');
let correoReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let RutReg =  /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
let span1: any = d.getElementById('spanNombre'); //aca guardamos los span que dicen 'Ingrese datos'
let span5: any = d.getElementById('spanEdad');
let span3: any = d.getElementById('spanRut');
let span2: any = d.getElementById('spanEmail');
let span4: any = d.getElementById('spannumber');
let span6: any = d.getElementById('spanEstatura');
let span7: any = d.getElementById('spanPeso');
let span8: any = d.getElementById('spanFCardio');

let limpiaDatos: any = d.getElementById('limpiaDatos'); // ACA guardamos el boton que guarda los datos


form1.addEventListener('submit', (e: Event) => {//Esto siempre se ejecutara cuando se envie el formulario
  alert("Validando formulario");//Esto es para el caché
  e.preventDefault();//Cuando se envia el formulario usamos esto para que la pagina no se recarge
  validar(); //Validamos el forumlario con la funcion validar

});



//FUNCIONES


limpiaDatos.addEventListener('click', (e:Event) => { //Cuando se haga click en el botton se ejecutara este codigo que basicamente limpia los valores de los input
  form1.nombre.value = "";
  form1.Email.value = "";
  form1.rut.value = "";
  form1.number.value = "";
  form1.opinionTexto.value = "";
  form1.nombre.classList.remove("noValido"); //quitamos el color rojo porq se quitan los datos
  form1.Email.classList.remove("noValido");
  form1.rut.classList.remove("noValido");
  form1.number.classList.remove("noValido");
  
  
});

function validar(): void{ 

  if (form1.nombre.value == "") { //Pregunta si hay nada en el input
    form1.nombre.classList.add("noValido");
    span1.classList.remove('hidden');
  }
  else {
    form1.nombre.classList.remove("noValido");
    span1.classList.add('hidden');
  }
  if (form1.Edad.value == "") { 
    form1.Edad.classList.add("noValido");
    span5.classList.remove('hidden');
  }
  else {
    form1.Edad.classList.remove("noValido");
    span5.classList.add('hidden');
  }
  if (RutReg.exec(form1.rut.value)) {
    form1.rut.classList.remove("noValido");
    span3.classList.add('hidden');
  }
  else{
    form1.rut.classList.add("noValido");
    span3.classList.remove('hidden');
  }
  if (correoReg.exec(form1.Email.value)) {
    form1.Email.classList.remove("noValido");
    span2.classList.add('hidden');
  }
  else {
    form1.Email.classList.add("noValido");
    span2.classList.remove('hidden');
  }
  if (form1.number.value ==""){
    form1.number.classList.add("noValido");
    span4.classList.remove('hidden');
  }
  else{
    form1.number.classList.remove("noValido");
    span4.classList.add('hidden');
  }
  if (form1.Estatura.value == "noValido") { 
    form1.Estatura.classList.add("noValido");
    span6.classList.remove('hidden');
  }
  else {
    form1.Estatura.classList.remove("noValido");
    span6.classList.add('hidden');
  }
  if (form1.Peso.value == "") { 
    form1.Peso.classList.add("noValido");
    span7.classList.remove('hidden');
  }
  else {
    form1.Peso.classList.remove("noValido");
    span7.classList.add('hidden');
  }
  if (form1.FCardio.value == "") { 
    form1.FCardio.classList.add("noValido");
    span8.classList.remove('hidden');
  }
  else {
    form1.FCardio.classList.remove("noValido");
    span8.classList.add('hidden');
  }

}

