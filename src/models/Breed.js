class Breed {
    constructor(name) {
        this.name = name;
    }

    static #collection = [
        { name: 'Angora' },
        { name: 'Persian' },
        { name: 'Tiger' },
    ];

    static save = (breedName) => {
        const breed = new Breed(breedName);
        Breed.#collection.push(breed);
    }

    static getAll = () => Breed.#collection.slice();
}

module.exports = Breed;