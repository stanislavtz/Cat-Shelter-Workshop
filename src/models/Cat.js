const { cats } = require('../utils/constants');

class Cat {
    constructor(_id, name, breed, description, imageUrl) {
        this._id = _id;
        this.name = name;
        this.breed = breed;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    static #collection = cats;

    static save = (id, name, breed, description, imageUrl) => {
        const cat = new Cat(id, name, breed, description, imageUrl);
        Cat.#collection[cat._id] = cat;
    }

    static getAll = () => Object.values({ ...Cat.#collection });

    static getSearched = (criteria) => Object.values({ ...Cat.#collection }).filter(cat => cat.breed.includes(criteria));

    static getById = (id) => Cat.#collection[id];

    static updateById = (id, data) => Cat.#collection[id] = { ...data, _id: id };

    static removeById = (id) => delete Cat.#collection[id];
}

module.exports = Cat;