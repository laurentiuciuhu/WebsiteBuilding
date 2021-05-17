let a: string = "abcd"

function add(a: any, b?: number) {
    return a + b
}

add("3", 3)
add(3)

/////////////////////////////////////////////////////

interface Masina {
    greutate: Number
    kilometraj: Number
    start() : void
}

interface Tehnic {
    sasiu: string
}

interface Conducere {
    merge( kilometrii: Number) : void
}

class BMW implements Masina, Tehnic {
    greutate: 1000
    kilometraj: 2000
    sasiu: "1HGCM82633A004352"
    start() {

    }
}

class Dacia implements Masina, Conducere {
    greutate: Number
    kilometraj: Number
    constructor() {
        this.greutate = 0
        this.kilometraj = 0
    }
    merge(kilometrii: Number) {
        this.kilometraj = +this.kilometraj + +kilometrii
    }
    start() {

    }
}

class Mecanic {
    repara(masina: Masina) {
        masina.start()
    }
}