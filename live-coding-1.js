// Math.abs(num) -> devuelve el valor absoluto de un número (lo hace positivo si es que es negativo)
console.log('--- Math.abs() ---');
console.log(Math.abs(-5));
console.log(Math.abs(-5) === Math.abs(5));
console.log(Math.abs(-3.14));

// Math.round(num) -> Redondea al entero más cercano
console.log('\n--- Math.round() ---');
console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.round(4.01));
console.log(Math.round(4.5));

// Math.ceil(num) -> Redondea SIEMPRE al enterio superior (o siguiente)
console.log('\n--- Math.ceil() ---');
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.1));

// Math.floor(num) -> Redondea SIEMPRE al entero inferior (anterior)
console.log('\n--- Math.floor() ---');
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(-4.1));

// 2. Explicar Math.random(), Math.pow(), Math.sqrt()
// Math.random() -> Genera un número decimal aleatorio entre 0 (inclusive) y 1 (no inclusive)
console.log('\n--- Math.random() ---');
console.log(Math.random());
console.log(Math.random().toFixed(2));

// Como generar números aleatorios dentro de un rango:
// Número aleatorio entre 0 y 9.9999
const numeroAleatorioSimple = Math.random() * 10;
console.log('Rango 0 - 0.999', numeroAleatorioSimple);

// Número aleatorio entre 1 y 10.9999
const numeroAleatorioSimple2 = Math.random() * 10 + 1;
console.log('Rango 1 y 10.9999', numeroAleatorioSimple2);

// Generar número aleatorio entre 1 y 10, usando Math.floor().
// Por qué? 10.9999 -> Math.floor(10.9999) = 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio);

// Con función para obtener números aleatorios en un rango
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //                                (10  -  1  + 1) + 1
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomIntInclusive(1, 10));

// Math.pow(base, exponente) Eleva la base al exponente
console.log('\n--- Math.pow() ---');
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
console.log(5 ** 2);

// Math.sqrt(num) -> Calcula la raíz cuadrada de un número
console.log('\n--- Math.sqrt() ---');
console.log(Math.sqrt(9));
console.log(Math.sqrt(25));
console.log(Math.sqrt(23));

// 3. Explicar indexOf(), lastIndexOf(), includes(), startsWith(), endsWith()

// indexOf() -> Devuelve la posición (índice) de la primera ocurrencia de un caracter o subcadena
console.log('\n--- indexOf() ---');
const texto = 'Que rico el día de hoy, no sé si habrá un mejor día';

console.log(texto.indexOf('o')); // 7
console.log(texto.indexOf('z')); // Si no encuentra el caracter, devuelve -1

// lastIndexOf() -> Devuelve la posición de la última ocurrencia de un caracter o subcadena
console.log('\n--- lastIndexOf() ---');
console.log(texto.lastIndexOf('o'));

// includes() -> Devuelve un booleano, true si la cadena contiene el caracter o subcadena, false en caso contrario
console.log('\n--- includes() ---');
console.log(texto.includes('hoy'));
console.log(texto.includes('mundo'));
console.log(texto.includes('oy'));
console.log(texto.includes('no sé si'));

// startsWith() -> Devuelve true si la cadena comienza con el caracter o subcadena especificado
console.log('\n--- startsWith() ---');
console.log(texto.startsWith('Que'));
console.log(texto.startsWith('Que rico'));
console.log(texto.startsWith('Q'));
console.log(texto.startsWith('Hola'));

// endsWith() -> Devuelve true si la cadena termina con el caracter o subcadena especificado
console.log('\n--- endsWith() ---');
console.log(texto.endsWith('día'));
console.log(texto.endsWith('mundo'));
console.log(texto.endsWith('a'));

// 4. Mostrar toUpperCase(), toLowerCase(), trim(), replace(), replaceAll()

// toUpperCase() -> Convierte toda la cadena a mayúsculas
console.log('\n--- toUpperCase() ---');
console.log(texto.toUpperCase());

// toLowerCase() -> Convierte toda la cadena a minúsculas
console.log('\n--- toLowerCase() ---');
console.log(texto.toLowerCase());

const ciudad = 'ISTANBUL';
console.log('Original ->', ciudad);
console.log('toLowerCase() ->', ciudad.toLowerCase());
console.log('toLocaleLowerCase(Turco) ->', ciudad.toLocaleLowerCase('tr'));

// trim() -> Limpiar o elimina espacios en blanco al inicio y fin de la cadena
console.log('\n--- trim() ---');
const palabra = '                     jiji                      ';
console.log(palabra);
console.log(palabra.trim());

// replace() -> Reemplaza la primera ocurrencia de un caracter o subcadena
console.log('\n--- replace() ---');
console.log(texto.replace('día', 'mes'));

// replaceAll() -> Reemplaza todas las ocurrencias de un caracter o subcadena
console.log('\n--- replaceAll() ---');
const textoNormalizado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // expresión regular para quitar tildes
console.log(texto.replaceAll('día', 'sol'));

// 5. Explicar slice(), substring(), split(), concat()

// slice() -> Extraer una sección de una cadena y devuelve una nueva cadena
console.log('\n--- replaceAll() ---');
console.log(texto.slice(0, 6));
console.log(texto.slice(20));
console.log(texto.slice(-10));

// substring() -> Extrae una sección de una cadena y devuelve una nueva cadena
console.log('\n--- substring() ---');
console.log(texto.substring(0, 6));
console.log(texto.substring(20));
console.log(texto.substring(-1));
console.log(texto.substring(-3));

// split() -> Divide una cadena en un array de cadenas
console.log('\n--- split() ---');
console.log(texto.split(' ')); // separar frase por palabras (se usa un separador de espacio)
console.log(texto.split(''));

console.log(texto.split('').reverse().join(''));

// Palabra es palíndromo?
let palabraEvaluar = 'palta';
let esPalindromo =
  palabraEvaluar.split('').reverse().join('') === palabraEvaluar;
console.log(esPalindromo);

console.log(texto.split(','));

// concat() -> une dos o más cadenas
console.log('\n--- concat() ---');
console.log(texto.concat('', '. Aunque ', 'no lo sé.'));
