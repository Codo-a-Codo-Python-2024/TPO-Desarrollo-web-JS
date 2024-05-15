
let selectServicio = document.getElementById("servicio");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let tel = document.getElementById("telefono");

let errorServicio = document.getElementById("errorServicio");
let errorNombre = document.getElementById("errorNombre");
let errorEmail = document.getElementById("errorEmail");
let errorTel = document.getElementById("errorTel");

const form = document.getElementById("formu");



form.addEventListener("submit", e=> {

    e.preventDefault();
    let expRegularCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    let expRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let expRegularTel = /^\d{7,14}$/

    //validacion Select
    if (selectServicio.value == "vacio") {
        errorServicio.innerHTML= 'Por Favor seleccione un servicio';
    }

    //validacion de nombre
    if(((nombre.value.length < 3)) || (nombre.value =='') || (nombre.value === null))  {
        errorNombre.innerHTML= 'Por Favor complete su nombre';
        
    }else{
        if (!(expRegularNombre.test(nombre.value)) ){
            errorNombre.innerHTML ='El nombre no es valido';
            
        }
    }
    

    
    //validacion de correo
    if (((email.value == '') || (email.value === null))) {
        errorEmail.innerHTML='Por favor ingrese su Email';
    }else{
        if (!(expRegularCorreo.test(email.value))) {
        
            errorEmail.innerHTML= 'El Email no es válido';
            
        }
    }

    

    //validacion de telefono
    if ((tel.value == '') || (tel.value === null)) {
        errorTel.innerHTML='Por favor complete ingrese su número de celular';
        
    }
    else{
        
        if (!(expRegularTel.test(tel.value))) {
        errorTel.innerHTML='Telefono inválido';
   
    }



}
    
    
    


})
