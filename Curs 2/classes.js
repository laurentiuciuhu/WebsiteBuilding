class Animal {
    //constructorul este folosit pentru atribute
    constructor(age){
        this.age = age;
    }

}


//class - este un SABLON
class Cat extends Animal{

    // atribut
    //var age = 2;

    //metoda
    cry() {
        console.log("Miau");
    }
}

//inheritance
class RussianBlueCat extends Cat {
    cry() {
        console.log("Miau Miau Miau");
    }
}

// crearea unui obiect
let pisicaRino =new RussianBlueCat(2);
// crearea unui obiect
let pisicaTommy =new Cat(2);
//chem o functie din clasa
pisicaRino.cry();

pisicaTommy.cry();
