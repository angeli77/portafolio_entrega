var persons = [
    {
        nombre : "Manuela",
        correo : "manuela@gmail.com",
        genero : "femenino",
        password : "password",
        images : [
             './images/img-1.jpg',
             './images/img-2.jpeg',
             './images/img-3.jpg',
             './images/img-4.jpg',
             './images/img-5.webp',
             './images/img-6.jpg',
             './images/img-7.jpg',
             './images/img-8.jpg',
             './images/img-9.webp',
             './images/img-10.jpeg',
        ]
    },
    {
        nombre : "Samuel",
        correo : "samuel@gmail.com",
        genero : "masculino",
        password : "password",
        images : [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            './images/img-20.jpg',
        ]
    }
];
let nombre = sessionStorage.getItem('nombre');
let auth = sessionStorage.getItem('authe');
document.getElementById('nombre').innerText = nombre;

if(nombre != "Manuela"){
    persons[1].images.forEach(function(image) {
        document.getElementById('body').classList.add("samuel");
        let row = document.getElementById('row');
        let col = document.createElement('div');
        col.classList.add("col-md-3", "mt-3");
        row.appendChild(col);

        let img  = document.createElement('img');
        img.setAttribute('src', image);
        img.classList.add('img-fluid');
        col.appendChild(img);  
        
        document.getElementById('fondoNombre').classList.add('centrarSamuel');
    });
} else {
    persons[0].images.forEach(function(image) {
        document.getElementById('body').classList.add("manuela");
        let row = document.getElementById('row');
        let col = document.createElement('div');
        col.classList.add("col-md-3", "mt-3");
        row.appendChild(col);

        let img  = document.createElement('img');
        img.setAttribute('src', image);
        img.classList.add('img-fluid');
        col.appendChild(img)
        document.getElementById('fondoNombre').classList.add('centrarManuela');

        
    });
}

function regresar(){
    wilocation.href = "index.html";

}