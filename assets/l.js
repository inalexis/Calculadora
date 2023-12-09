var menu = parseInt(prompt("\n1.-Calcular cual numero es mayor \n2.-Sumar \n3.-Restar \n4.-Multiplicar \n5.-Dividir \n6.-Mostrar numeros ingresados \n7.-Salir" ));
var resultado;




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

    case 3:
        var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = resta(numero1, numero2);
        alert("El resultado de la resta es " + resultado) 
        
        case 4:
            var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = multiplicar(numero1, numero2);
        alert("El resultado de la multiplicacion es " + resultado) 
        
        case 5: 
        var numero1 = Number(prompt("Ingrese primer numero"));
        var numero2 = Number(prompt("Ingrese segundo numero"));
        resultado = dividir(numero1, numero2);
        alert("El resultado de la division es " + resultado) 

        case 6:
            var numero1 = prompt("Ingrese primer numero");
            var numero2 = prompt("Ingrese segundo numero");
            alert("Los numeros que ingreso son " + numero1 + " y " + numero2)

            case 7:
                alert("Gracias por participar")



    
    }

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


