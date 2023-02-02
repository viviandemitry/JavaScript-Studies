//Estruturas de controle

//Instruções condicionais são tratadas com if...else e switch.Laços são tratados com as contruções while, do...while e for.

//exemplos:

if (num === 1) {
  num--;
 } else {
  num++;
  }
  
  //ou:
  
  (num === 1) ? num-- : num++;
  
  //Laços
  
  //Exemplos de como exibir valores entre 0 a 9 no console com diferentes funções
  
  
  //ex1
  
  for (var i = 0; i<10; i++) {
  console.log(i);
  }
  
 //ex2

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//ex3

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);



//Sintaxe básica de um função

function sayHello() {
  console.loh('Hello');
}

sayHello();

//Programação Orientada a Objetos em Javascript (POO)

//Maneiras de criar um objeto simples:

var obj = new Object();

var obj = {};

//ou podemos crair um completo

obj = {
  name: {
    first: 'Ana',
    Last: 'Yas'
  },
  adress: 'Middle Earth'
};


function book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new book('title', 'pag', 'isbn');






























