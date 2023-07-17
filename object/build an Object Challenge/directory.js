let html = '';
const main =  document.querySelector("main");
for( let listAnimals in pets){
    console.log(listAnimals);
    // const dogName = pets[listAnimals].name;
    // const dogType = pets[listAnimals].type;
    // const dogBreed = pets[listAnimals].breed;
    // const dogAge = pets[listAnimals].age;
    // const dogPhoto = pets[listAnimals].photo;
    const animals = pets[listAnimals];
    html+= `<h2>${animals.name}</h2>
            <h3>${animals.type} | ${animals.breed}</h3> 
            <p>Age: ${animals.age}</p>
            <img src="${animals.photo}" alt="${animals.breed}">`;
    
    }
    //document.querySelector("main").innerHTML = html;
    //  insertAdjacentHTML() method method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
    main.insertAdjacentHTML('beforeend', html)