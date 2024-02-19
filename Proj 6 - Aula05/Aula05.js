/*Operadores relacionais JavaScript
>  maior
<  menor
>= maior ou igual
<= menor ou igual
== esse é o valor utilizado como igual em JavaScript
   o = é utilizado para atribuição.
!= diferente
! poser representado como NOT*/

let num1 = 10;
let num2 = 5;
let num3 = 10;

console.log(num1 > num2);     // verifica se num1 é maior que num2        | (irá retornar true. Devido num1 ser maior que num2)
console.log(num1 < num2 );    // verifica se num1 é menor que num2        | (irá retornar false. Devido num1 ser maior que num2)
console.log(num1 == num3);    // verifica se num1 é igual a num3          | (irá retornar true. Devido num1 ser igual a num3)
console.log(!(num1 == num3)); // verifica se num1 não é igual a num3      | (irá retornar false. Devido num1 ser igual a num3)
console.log(num1 != num3);    // verifica se num1 é diferente de num3     | (irá retornar false. Devido num1 ser igual a num3)
console.log(!(num1 != num3))  // verifica se num1 não é diferente de num3 | (irá retornar true, devido num1 ser igual a num3)