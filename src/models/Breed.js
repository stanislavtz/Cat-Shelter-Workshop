class Breed {
    constructor(name) {
        this.name = name;
    }

    static collection = [
       {name:  'Angora'},
        {name: 'Persian'},
        {name: 'Tiger'},
    ];

    static save = (breed) => this.collection.push(breed);
    
    static getAll = () => this.collection.slice();
}

module.exports = Breed;