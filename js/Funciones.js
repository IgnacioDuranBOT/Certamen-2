define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var d = document;
    var form1 = d.getElementById('form1');
    var mensajeExito = d.getElementById('Exito');
    var correoReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var RutReg = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    var span1 = d.getElementById('spanNombre'); //aca guardamos los span que dicen 'Ingrese datos'
    var span5 = d.getElementById('spanEdad');
    var span3 = d.getElementById('spanRut');
    var span2 = d.getElementById('spanEmail');
    var span4 = d.getElementById('spannumber');
    var span6 = d.getElementById('spanEstatura');
    var span7 = d.getElementById('spanPeso');
    var span8 = d.getElementById('spanFCardio');
    var limpiaDatos = d.getElementById('limpiaDatos'); // ACA guardamos el boton que guarda los datos
    form1.addEventListener('submit', function (e) {
        alert("Validando formulario"); //Esto es para el caché
        e.preventDefault(); //Cuando se envia el formulario usamos esto para que la pagina no se recarge
        validar(); //Validamos el forumlario con la funcion validar
    });
    //FUNCIONES
    limpiaDatos.addEventListener('click', function (e) {
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
    function validar() {
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
        else {
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
        if (form1.number.value == "") {
            form1.number.classList.add("noValido");
            span4.classList.remove('hidden');
        }
        else {
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
});

var opt_1 = new Array("-", "San Joaquin", "Ñuñoa","...");
var opt_2 = new Array("-", "Viña del Mar", "Valparaíso","...");

function cambia(){
    var cosa;

    cosa = document.form1.cosa[document.form1.cosa.selectedIndex].value;

    if(cosa!=0){
        mis_opts = eval("opt_"+ cosa);
        num_opts = mis_opts.length;
        document.form1.opt.length = num_opts;

        for(i=0; i<num_opts;i++){
            document.form1.opt.options[i].value =mis_opts[i];
            document.form1.opt.options[i].text=mis_opts[i];
        }
        
    }else{
        document.form1.opt.length=1;
        document.form1.opt.options[0].value="-";
        document.form1.opt.options[0].text=mis_opts[0];

    }
    document.fomr1.opt.options[0].selectedIndex = true;
}