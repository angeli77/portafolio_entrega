let estudiante = {
    nombre: 'zura',
    edad: 19,
    familia: 'villada',
    linaje: 'Sangre pura',
    casa: '',
    animalPatronus: '',
    cualidades: ['Valor', 'fuerza', 'audacia'],
}

let clases = {
    transformaciones: 'Profesor Kevin Slughorn',
    herbologia: 'Profesor Maria Umbridge',
    pociones: 'Profesor Liliana McGonagall',
    encantamientos: 'Profesora Jackie',
    defensaContraLasArtesOscuras: 'Profesor Robinson Snape ',
    animalesMagicos: 'Profesor David Filch',
    historiaDeMagia: 'Profesor Ronald Sprout',
}

class casas {
    constructor(cualidades, linaje) {
        this.cualidades = cualidades
        this.linaje = linaje
    }
}

const Gryffindor = new casas(
    ['Valor', 'fuerza', 'audacia'],
    ['Mestizo', 'muggle', 'Sangre pura']
)
const Hufflepuff = new casas(
    ['Justicia', 'Lealtad', 'Paciencia'],
    ['Mestizo', 'muggle']
)
const Ravenclaw = new casas(
    ['Creatividad', 'Erudición', 'Inteligencia'],
    ['Mestizo', 'muggle', 'sangre pura']
)
const Slytherin = new casas(
    ['Ambición', 'Determinación', 'Astucia'],
    ['sangre pura']
)

if (String(Gryffindor.cualidades) == String(estudiante.cualidades) && Gryffindor.linaje.includes(estudiante.linaje)){
        estudiante.casa = 'Gryffindor'
}
else if (String(Hufflepuff.cualidades) == String(estudiante.cualidades) && Hufflepuff.linaje.includes(estudiante.linaje)){
    estudiante.casa = 'Hufflepuff'
}
else if (String(Ravenclaw.cualidades) == String(estudiante.cualidades) && Ravenclaw.linaje.includes(estudiante.linaje)){
    estudiante.casa = 'Ravenclaw'
}
else if (String(Slytherin.cualidades) == String(estudiante.cualidades) && Slytherin.linaje.includes(estudiante.linaje)){
    estudiante.casa = 'Slytherin'
}
console.log(estudiante)

let claseDetransformaciones ={
    Profesor: 'Kevin Slughorn',
    horario: '3pm',
    boggart: 'arañas',
    realizarTransformacionRiddikulus (boggartExiste){
        if (boggartExiste){
            this.enfrentarBoggart(this.boggart)
        
        }
        else {
        console.log("el boggart no existe")    
        }

    },

    enfrentarBoggart (boggart){
        this.boggart = "patoDonal"
        return "memes"
    },
    

}

let boggartEjemplo = {
    apariencia: "payaso"

    
}
claseDetransformaciones.realizarTransformacionRiddikulus(true)
console.log(claseDetransformaciones.boggart)

boggartEjemplo.apariencia = claseDetransformaciones.enfrentarBoggart()
console.log(boggartEjemplo.apariencia)

let animales = ["ciervo", "perro", "zorro", "nutria", "liebre", "caballo"]
let animal =animales[Math.floor(Math.random()*animales.length)];
console.log(animal)

let defensaContraLasArtesOscuras = {
Profesor: 'Profesor Robinson Snape ',
asignarPatronus(){
    let animales = ["ciervo", "perro", "zorro", "nutria", "liebre", "caballo"]
let animal = animales[Math.floor(Math.random()*animales.length)];
estudiante.animalPatronus = animal
},

}
defensaContraLasArtesOscuras.asignarPatronus();
function dementor(){
    if (estudiante.animalPatronus != ""){
    console.log("el estudiante logra detener al dementor")
} 
else {
    console.log("el estudiante es absorbido por el dementor y es llevado a enfermeria")
}

}
dementor()
console.log(estudiante)



//paso 5
  
let patronus = document.getElementById("patronus");

patronus.addEventListener("click", ()=>{
  animal = ["murcielago", "toro", "gato", "cabra", "caballo", "conejo", "escorpión", "serpiente",""];
    const aleatorio = animal[Math.floor(Math.random() * animal.length)];
    aprendiz.animalPatronus = aleatorio
    document.getElementById("enfermeria").innerText = ""
    document.getElementById("demento").innerHTML = `<img class="demento" src="./Img/destello.png" alt="">`
    if (aleatorio == "toro") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/toro2.png" alt="" />`
    }else if (aleatorio == "murcielago") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/murcielago.png" alt="" />`
    }else if (aleatorio == "gato") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/gato.png" alt="" />`
    }else if (aleatorio == "cabra") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/cabra.png" alt="" />`
    }else if (aleatorio == "caballo") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/caballo.png" alt="" />`
    }else if (aleatorio == "serpiente") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/serpiente.png" alt="" />`
    }else if (aleatorio == "escorpión") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/escorpion.png" alt="" />`
    }else if (aleatorio == "conejo") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/conejo.png" alt="" />`
    }else if (aleatorio == "") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/perdiste.png" alt="" />`
      document.getElementById("enfermeria").innerText = "PERDISTE VAS PARA LA ENFERMERIA"
      document.getElementById("demento").innerHTML = `<img class="demento" src="./Img/dementorgif.gif" alt="">`
    }
    document.getElementById("animalAleatorio").innerText = aprendiz.animalPatronus
} );
let defensaContraLasArtesOscuras = {
    animal_patronus() {
    animal = ["murcielago", "toro", "gato", "cabra", "caballo", "conejo", "escorpión", "serpiente"];
    const aleatorio = animal[Math.floor(Math.random() * animal.length)];
    aprendiz.animalPatronus = aleatorio
    
    if (aleatorio == "toro") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/toro2.png" alt="" />`
    }else if (aleatorio == "murcielago") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/murcielago.png" alt="" />`
    }else if (aleatorio == "gato") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/gato.png" alt="" />`
    }else if (aleatorio == "cabra") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/cabra.png" alt="" />`
    }else if (aleatorio == "caballo") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/caballo.png" alt="" />`
    }else if (aleatorio == "serpiente") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/serpiente.png" alt="" />`
    }else if (aleatorio == "escorpión") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/escorpion.png" alt="" />`
    }else if (aleatorio == "conejo") {
      document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/conejo.png" alt="" />`
    }
    document.getElementById("animalAleatorio").innerText = aprendiz.animalPatronus
  }, 
};



// Paso 6

function mostrarDatos() {
document.getElementById("nombre2").innerText = `Nombre: ${aprendiz.nombre}`;
(document.getElementById("edad").innerText = `Edad: ${aprendiz.edad}`),
  (document.getElementById("familia2").innerText = `Familia: ${aprendiz.familia}`),
  (document.getElementById("linaje").innerText = `Linaje: ${aprendiz.linaje}`),
  (document.getElementById("casa").innerText = `Casa: ${aprendiz.casa}`),
  (document.getElementById("animal").innerText = `Animal: ${aprendiz.animalPatronus}`),
  (document.getElementById("cualidades").innerText = `Cualidades: ${aprendiz.cualidades}`);
}*/