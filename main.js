const pizzas = [
    {
        id:1,
        nombre:'Primavera',
        ingredientes:['salsa de tomate','tomates en rodajas', 'mozzarella','huevo duro','provolone','oregano','aceituna'],
        precio : 1100,
    },
    {
        
        id:2,
        nombre:'Mozzarella',
        ingredientes:['salsa de tomate','queso mozzarella','aceitunas verdes'],
        precio:800,
    },
    {
        id:3,
        nombre:'Rúcula con jamón crudo',
        ingredientes:['salsa de tomate','mozzarella','jamón crudo','rúcula fresca','tomates secos','queso parmesano'],
        precio:1100,
    },
    {
        id:4,
        nombre:'Especial',
        ingredientes:['salsa de tomate','jamón cocido','mozzarella','pimiento rojo asado'],
        precio:950,
    },
    {
        id:6,
        nombre:'4 Quesos',
        ingredientes:['salsa de tomate','queso mozzarella','queso sardo','queso roquefort','queso pategrás','aceitunas verdes'],
        precio:1100,
    },
    {
        id:7,
        nombre:'Napolitana',
        ingredientes:['salsa de tomate','mozzarella','tomates frescos','aceitunas verdes'],
        precio:900,
    },
    {
        id:8,
        nombre:'Fugazzeta',
        ingrediente:['salsa de tomate','cebolla','mozzarella','aceitunas negras'],
        precio:950,
    },
    {
        id:9,
        nombre:'Calabresa',
        ingredientes:['salsa de tomate','queso mozzarella','longaniza calabresa en rodajas','queso provolone rallado','aceitunas verdes'],
        precio:950,
    },
];

/*a) Las pizzas que tengan un id impar.*/

const pizzasImpar = pizzas.filter((pizza)=> pizza.id %2 !=0);
console.log(pizzasImpar);

/*b) ¿Hay alguna pizza que valga menos de $600?*/

const pizzasMenor600 =() =>{
    if (pizzas.some((pizza)=> pizza.precio.length < 600)){
        return 'Hay al menos alguna pizza con precio menor a $600';
    }
    else{
        return 'No hay ninguna pizza con precio menor a $600';
    }
};
console.log(pizzasMenor600());

/*c) Los nombres de todos las pizzas.*/

const nombrePizzas = pizzas.map(({nombre})=> nombre);
console.log(nombrePizzas);


/*d) Los precios de las pizzas.*/

const precioPizzas = pizzas.map(({precio}) => precio);
console.log(precioPizzas);


/*e) El nombre de cada pizza con su respectivo precio.
*/

const imprimirNombreYPrecio = () => pizzas.forEach((pizza)=>console.log(`La pizza ${pizza.nombre} cuesta $${pizza.precio}`));
imprimirNombreYPrecio();



