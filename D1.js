/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* 
  string: Rappresenta una sequenza di caratteri 
    ES let saluto="Hello"
  number: Rappresentano numeri(Posso anche ottere valore Nan se quando inserite in un cotesto di un operazione matematica non possono restituire un numero)
    ES let n=42.3
  boolean: Rappresentano una valore che può essere o true(1) o false(0)
    ES let areYouDrunk=true
  NB le variabili posso anche avere un valore null, indicando un'assenza intenzionale del valore (!=0 cioè null non vuol dire che la variabile ha valore zero) nella logica boolena è come se fosse un false
    possono avere anche valore undefined ovvero che la variabile non ha un valore assegnato o non è definita (solitamente è un attributo che la macchina assegna alla variabile)
  */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
 */
/*
let myName = "Alessio Panconi";
console.log(myName);
*/
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/*Modo1 */
/*
let n1 = 12;
let n2 = 20;
console.log(n1 + n2);
*/
/*Modo2 */
/*
console.log(12 + 20);
*/
/*Modo3*/
/*
let n1 = 12;
let n2 = 20;
let n3 = n1 + n2;
console.log(n3);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/*Modo1 */
let x = 12;
/*Modo2 */
/*
let x;
x = 12;
*/
/*
console.log(x);
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*
let mySurname = "Panconi";
myName = mySurname;
*/
/*
const myName="Ale"
let myName="Alepanco"
*/
/*
console.log(myName);
*/
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
/*Metodo1*/
/*
console.log(4 - x);
*/
/*Metodo2 */
/*
let x2=4
*/
/*
console.log(x2 - x);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/*
let name1 = "john";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name1 == name2);
*/
/*Extra */
/*
console.log(name1 === name1);
console.log(name1.toLowerCase === name2.toLowerCase);
*/
