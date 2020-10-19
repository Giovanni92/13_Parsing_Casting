//gli passo una stringa contenente un num
var num = new Number("2");
console.log(num);

//il suo valore primitivo è number
console.log(num.valueOf());

//Il problema con gli oggetti numerici è che se li compariamo a un numero
console.log(num==2);    //true
console.log(num===2);   //false 

console.log(typeof(num));   //object

//In JS due oggetti sono uguali se puntano entrambi alla stessa istanza dell'oggetto
//Il balore primitivo 2 paragonato a il valore tipo object non sarà MAI uguale



//      il succo della lezione è qua:

var eta = "22";
//se voglio castarlo a numero:
//metodo 1
eta = +eta;
//metodo 2
eta = parseInt(eta);


//Per dimostrare che js quando usiamo i numeri:

//trasf in stringa
(2).toString();     //"2"

//trasf a due decimali
(2).toFixed(2);     //2.00

//se facessimo:+
// 2.toFixed(2);   //ci darebbe errore, con un solo punto dopo 2

2..toFixed(3);  //sintassi regolare con due punti dopo numero

//posso farlo anche con un decimale con un solo punto dopo separatore decimale
2.0.toFixed(10); 


//Number tutti i metodi e proprietà:
Number.MAX_VALUE
Number.MIN_VALUE
2/0;    //Infinity
typeof(Infinity);   //"number"
-2/0;   //-Infinity
typeof(-Infinity);   //"number"


//Non istanziare mai un oggetto Number per parsificare numero


//per parsificare velocemente possiamo
num = "2.34";
num = num * 1;  //2.34

//nel caso avessi numeri con lettere
num2 = "234.342 fudshhjaba";
num3 = parseFloat(num2);
console.log(num3);  //234.342


//Se js trova prima le lettere e poi il numero il parse non viene fatto
var proof = parseInt("asjdkaj 34");
console.log(proof);     //NaN    -  perchp sto favendo il parsing di una stringa