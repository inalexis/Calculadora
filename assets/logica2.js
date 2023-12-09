var menu = 0
var resultado;
    
while(menu!=7){
    menu = parseInt(prompt("\n1.-Calcular cual numero es mayor \n2.-Sumar \n3.-Restar \n4.-Multiplicar \n5.-Dividir \n6.-Mostrar numeros ingresados \n7.-Salir"))
switch (menu) {

    case 1: 
    var numero1 = Number(prompt("Ingrese primer numero"));
    var numero2 = Number(prompt("Ingrese segundo numero"));
    if (menu == 1 && numero2>numero1) {
        alert(numero2 + " es mayor que " + numero1);
    } else {
        alert(numero1 + " es mayor que " + numero2)
    }
    break;

    case 2: 
    var numero1 = Number(prompt("Ingrese primer numero"));
    var numero2 = Number(prompt("Ingrese segundo numero"));
    resultado = suma(numero1, numero2);
    alert("El resultado de la suma es " + resultado)
    break;

    case 3:
        var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = resta(numero1, numero2);
        alert("El resultado de la resta es " + resultado)
        break; 
        
        case 4:
            var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = multiplicar(numero1, numero2);
        alert("El resultado de la multiplicacion es " + resultado)
        break;
        
        case 5: 
        try {
        var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = dividir(numero1, numero2);
        alert("El resultado de la division es " + resultado)
        if(numero1, numero2!=0) throw new Error("No dividir 0")
        } catch (error) {
            console.error("No se puede dividir con0, error");
        } 
        break; 
        

        case 6:
            
            var numero1 = prompt("Ingrese primer numero");
            var numero2 = prompt("Ingrese segundo numero");
            alert("Los numeros que ingreso son " + numero1 + " y " + numero2)
    
            break;

            case 7:
                alert("Gracias por participar")
                break;

                  //funciones
    function suma(numero1, numero2) {
        resultado = numero1 + numero2;
        return resultado;
    }
    
    
    function resta(numero1, numero2) {
        resultado = numero1 - numero2;
        return resultado;
    }

    function multiplicar(numero1, numero2) {
        resultado = numero1 * numero2;
        return resultado;
    }
    function dividir(numero1, numero2) {
        resultado = numero1 / numero2;
        return resultado;
        
    }




    
    }


}

