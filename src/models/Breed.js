const { breeds } = require("../utils/constants");

class Breed {
    constructor(name) {
        this.name = name;
    }

    static #collection = breeds;

    static save = (breedName) => {
        const breed = new Breed(breedName);
        Breed.#collection.push(breed);
    }

    static getAll = () => Breed.#collection.slice();
}

module.exports = Breed;