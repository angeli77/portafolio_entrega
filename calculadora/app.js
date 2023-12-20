function operacion(){
    let operaciones = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if(operaciones == 'suma'){
        let suma = parseFloat(num1) + parseFloat(num2);
        document.getElementById('resultado').innerHTML =  "El resultado de la suma es: "+suma;
    }else if (operaciones== 'resta') {
        let resta = parseFloat(num1) - parseFloat(num2);;
        document.getElementById('resultado').innerHTML = "El resultado de la resta es:  "+resta;
    }else if  (operaciones== 'multi') {
        let multi  = parseFloat(num1) * parseFloat(num2);;
        document.getElementById('resultado').innerHTML = "El resultado de la multiplicación es:  "+multi;
    } else if (operaciones== 'divi') {
        let divi= parseFloat(num1) / parseFloat(num2);;
        document.getElementById('resultado').innerHTML = "El resultado de la división es: "+divi;
    }
    if(operaciones !="" ){
        document.getElementById('operacion').classList.add('is-valid');
        document.getElementById('operacion').classList.remove('is-invalid');
        document.getElementById('operacion').value = "";

    }else{
        document.getElementById('operacion').classList.add('is-invalid');
        document.getElementById('operacion').classList.remove('is-valid');
        document.getElementById('campo-1').innerText = "Para iniciar, debes seleccionar una operación.";
      
    }
    if(num1 !="" ){
        document.getElementById('num1').classList.add('is-valid');
        document.getElementById('num1').classList.remove('is-invalid');
        document.getElementById('num1').value = "";
    }else{
        document.getElementById('num1').classList.remove('is-valid');
        document.getElementById('num1').classList.add('is-invalid');
        document.getElementById('campo-2').innerText = "Elegir un primer número es obligatorio."
    }
    if(num2!=""){
        document.getElementById('num2').classList.add('is-valid');
        document.getElementById('num2').classList.remove('is-invalid'); 
        document.getElementById('num2').value = "";
    } else {
        document.getElementById('num2').classList.add('is-invalid');
        document.getElementById('num2').classList.remove('is-valid');
        document.getElementById('campo-3').innerText = "Elegir un segundo número es obligatorio.";
    }
}