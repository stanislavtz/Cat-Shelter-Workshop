class Cat {
    constructor(_id, name, breed, description, imageUrl) {
        this._id = _id;
        this.name = name;
        this.breed = breed;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    static collection = {
        asd345sdf: {
            _id: 'asd345sdf',
            name: 'Test1',
            breed: 'Angora',
            description: 'Little cute kitty cat',
            imageUrl: 'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg'
        },
        asd575sda: {
            _id: 'asd575sda',
            name: 'Test2',
            breed: 'Persian',
            description: 'Little cute kitty cat, but little bit too angry',
            imageUrl: 'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg'
        }
    }

    static save = (cat) => Cat.collection[cat._id] = cat;
    
    static getAll = () => Object.values({...Cat.collection});

    static getSearched = (criteria) => Object.values({...Cat.collection}).filter(cat => cat.breed.includes(criteria));

    static getById = (id) => Cat.collection[id];
}

module.exports = Cat;