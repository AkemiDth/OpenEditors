// Sprear operator...

let lenguajes = ['JavaScript', 'PHP', 'Python']


let [ultimo] = [...lenguajes].reserve();


//con spread



console.log(lenguajes);
console.log(ultimo);


//Otro ejemplo

function suma(a,b,c) {

    console.log(a+b+c);

}

const numeros= [1,2,3];

suma(...numeros);
