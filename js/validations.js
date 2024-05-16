// capturo los datos:
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let tel = document.getElementById("telefono");
const form = document.getElementById("form");
const selectServicio = document.getElementById("servicio");
const radiosHorario = document.querySelectorAll('input[name="horario"]');
const botonEnviar = document.getElementById("btnForm");


//regex
const expRegularCorreo = /^[a-zA-Z0-9._%+-]+@(hotmail|outlook|yahoo|gmail)\.(com|es|net|org)$/
const expRegularNombreyApellido = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s']+$/
const expRegularTel = /^\+?\d{7,14}$/

// Función para verificar si hay mensajes de error
const errorsExist = () => {
    const errorMessages = document.querySelectorAll('.error');
    return Array.from(errorMessages).some(error => error.innerHTML.trim() !== '');
};

const disabledButton = () => {
    botonEnviar.disabled = errorsExist();
  
};



// Función para validar nombre y apellido
const validarNombreApellido = (field, fieldValue) => {
    if (!fieldValue) {
       
        field.classList.add('is-invalid');
        return `Por favor ingrese un ${field.name}`
    } else if ((fieldValue.length < 3 || fieldValue.length > 20) && !expRegularNombreyApellido.test(fieldValue)) {
     
        field.classList.add('is-invalid');
        return `Por favor ingrese un ${field.name} válido`;
    } else if (fieldValue.length < 3) {
        field.classList.add('is-invalid');
        return `El ${field.name} debe tener al menos 3 caracteres`;
    } else if (fieldValue.length > 20) {
        field.classList.add('is-invalid');
        return `El ${field.name} debe tener una longitud máxima de 20 caracteres`;
    } else if (!expRegularNombreyApellido.test(fieldValue)) {
       
        field.classList.add('is-invalid');
        return 'Solo se permiten letras, espacios, tildes y apóstrofes';
    } else {
        
        field.classList.remove('is-invalid');
        return '';
    }
};

// Función para validar correo electrónico
const validarEmail = (field, fieldValue) => {
    if (!fieldValue) {
        field.classList.add('is-invalid');      
        return 'Por favor ingrese su correo electrónico';
    } else if (fieldValue.length < 5 && !expRegularCorreo.test(fieldValue)) {
        field.classList.add('is-invalid');
        return 'Por favor ingrese un correo electrónico válido';
    } else if (!expRegularCorreo.test(fieldValue)) {
        field.classList.add('is-invalid');
        return 'Por favor ingrese un correo electrónico válido';
    } else {
        field.classList.remove('is-invalid');
        return '';
    }
};

// Función para validar número de teléfono
const validarTelefono = (field, fieldValue) => {
    if (!fieldValue) {
        field.classList.add('is-invalid');
        return 'Por favor ingrese un número de teléfono';
    } else if (fieldValue.length < 10 || fieldValue.length > 14 && !expRegularTel.test(fieldValue)) {
        field.classList.add('is-invalid');
        return 'Por favor ingrese un número de teléfono válido';
    } else if (fieldValue.length < 10) {
        field.classList.add('is-invalid');
        return 'El teléfono debe tener al menos 7 caracteres';
    } else if (fieldValue.length > 14) {
        field.classList.add('is-invalid');
        return 'El teléfono debe tener máximo 14 caracteres';
    } else if (!expRegularTel.test(fieldValue)) {
        field.classList.add('is-invalid');
        return 'Solo se permiten números y el signo + en el teléfono';
    } else {
        field.classList.remove('is-invalid');
        return '';
    }
};

// Función para validar el select (servicio)
const validarSelect = (field) => {
    if (field.value === "vacio") {
        field.classList.add('is-invalid');
        return "Por favor seleccione un servicio";
    } else {
        field.classList.remove('is-invalid');
        return '';
    }
};

// Función para validar los campos de radio (horario)
const validarRadios = (fields) => {
    let radioSelected = false;
    fields.forEach(radio => {
        if (radio.checked) {
            radioSelected = true;
        }
    });
    if (!radioSelected) {
        errorHorario.innerHTML = "Por favor seleccione un rango horario";
        return false;
    } else {
        errorHorario.innerHTML = "";
        return true;
    }
};

//validacion adicional
const validarFormulario = () => {
    let formularioValido = true;

    // Validar nombre
    const nombreValue = nombre.value.trim();
    if (!nombreValue) {
        errorNombre.innerHTML = 'Por favor ingrese su nombre';
        formularioValido = false;
    } else {
        errorNombre.innerHTML = '';
    }

    // Validar apellido
    const apellidoValue = apellido.value.trim();
    if (!apellidoValue) {
        errorApellido.innerHTML = 'Por favor ingrese su apellido';
        formularioValido = false;
    } else {
        errorApellido.innerHTML = '';
    }

    // Validar email
    const emailValue = email.value.trim();
    if (!emailValue) {
        errorEmail.innerHTML = 'Por favor ingrese su correo electrónico';
        formularioValido = false;
    } else if (!expRegularCorreo.test(emailValue)) {
        errorEmail.innerHTML = 'Por favor ingrese un correo electrónico válido';
        formularioValido = false;
    } else {
        errorEmail.innerHTML = '';
    }

    // Validar teléfono
    const telValue = tel.value.trim();
    if (!telValue) {
        errorTel.innerHTML = 'Por favor ingrese su número de teléfono';
        formularioValido = false;
    } else if (!expRegularTel.test(telValue)) {
        errorTel.innerHTML = 'Por favor ingrese un número de teléfono válido';
        formularioValido = false;
    } else {
        errorTel.innerHTML = '';
    }

    // Validar select (servicio)
    if (selectServicio.value === 'vacio') {
        errorSelect.innerHTML = 'Por favor seleccione un servicio';
        formularioValido = false;
    } else {
        errorSelect.innerHTML = '';
    }

    // Validar radios (horario)
    const radioSelected = Array.from(radiosHorario).some(radio => radio.checked);
    if (!radioSelected) {
        errorHorario.innerHTML = 'Por favor seleccione un rango horario';
        formularioValido = false;
    } else {
        errorHorario.innerHTML = '';
    }

    return formularioValido;
};



// Evento blur para el campo nombre
nombre.addEventListener("blur", (event) => {  
    const field = event.target; 
    const fieldValue = field.value.trim(); 
    
    errorNombre.innerHTML = validarNombreApellido(field, fieldValue);
   disabledButton();

});

// Evento blur para el campo apellido
apellido.addEventListener("blur", (event) => {    
    const field = event.target;
    const fieldValue = field.value.trim(); 
    
    errorApellido.innerHTML = validarNombreApellido(field, fieldValue);
   disabledButton();
});

// Evento blur para el campo email
email.addEventListener("blur", (event) => {
    const field = event.target;
    const fieldValue = field.value.trim();
    
    errorEmail.innerHTML = validarEmail(field, fieldValue);
    disabledButton();
});

// Evento blur para el campo teléfono
tel.addEventListener("blur", (event) => {
    const field = event.target;
    const fieldValue = field.value.trim();
    
    errorTel.innerHTML = validarTelefono(field, fieldValue);
    disabledButton();    
});

// Evento blur para el campo select (servicio)
selectServicio.addEventListener("blur", (event) => {
    const field = event.target;
    errorSelect.innerHTML = validarSelect(field);
    disabledButton();
});


// Evento change para el campo select (servicio)
selectServicio.addEventListener("change", (event) => {  
    const field = event.target; 
    errorSelect.innerHTML = validarSelect(field);
   disabledButton();
});

// Evento change para los campos de radio (horario)
radiosHorario.forEach(radio => {
    radio.addEventListener("change", () => {
        validarRadios(radiosHorario);
        disabledButton();
    });
});


form.addEventListener("submit", event => {

    event.preventDefault();
    if (validarFormulario()) {
        
        form.submit(); 
    }
})
    
    
    



