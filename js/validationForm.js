
    // GETTING ALL INPUT TEXT OBJECTS
    var nombre = document.forms["vform"]["nombre"];
    var email = document.forms["vform"]["email"];
    var mensaje = document.forms["vform"]["mensaje"];
    
    // GETTING ALL ERROR DISPLAY OBJECTS
    var nombre_error = document.getElementById("nombre_error");
    var email_error = document.getElementById("email_error");
    var mensaje_error = document.getElementById("mensaje_error");
    
    // SETTING ALL EVENT LISTENERS
    nombre.addEventListener("blur", nombreVerify, true);
    email.addEventListener("blur", emailVerify, true);
    mensaje.addEventListener("blur", mensajeVerify, true);
    
    // VALIDATION FUNCTION
    
    function Validate(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var numero_errores = 0;
        
        // nombre validation
        if (nombre.value == "") 
        {
            nombre.className = "form-control is-invalid";
            nombre_error.className = "invalid-feedback";
            nombre_error.textContent = "El Nombre es necesario";
            nombre.focus();
            numero_errores++;
        }
    
        // email validation
        if (email.value == "") 
        {
            email.className = "form-control is-invalid";
            email_error.className = "invalid-feedback";
            email_error.textContent = "El Email es necesario";
            email.focus();
            numero_errores++;
    
        }else if(!mailformat.test(email.value)){
            email.style.border = "1px solid red";
            email_error.textContent = "El email no cumple el formato correcto";
            numero_errores++;
        }
        
        // mensaje validation
        if (mensaje.value == "") 
        {
            mensaje.className = "form-control is-invalid";
            mensaje_error.className = "invalid-feedback";
            mensaje_error.textContent = "El Mensaje es necesario";
            mensaje.focus();
            numero_errores++;
        }
       
        if(numero_errores>0)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }
    
    // EVENT HANDLER FUNCTIONS
    
    function nombreVerify()
    {
        if(nombre.value !="")
        {
            nombre.className = "form-control is-valid";
            nombre_error.innerHTML = "";
            return true;
        }
    }
    
    function emailVerify()
    {
        if(email.value !="")
        {
            email.className = "form-control is-valid";
            email_error.innerHTML = "";
            return true;
        }
    }
    
    function mensajeVerify()
    {
        if(mensaje.value !="")
        {
            mensaje.className = "form-control is-valid";
            mensaje_error.innerHTML = "";
            return true;
        }
    }
