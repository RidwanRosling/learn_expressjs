const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        //  save all information in products array 
        //{title: "Keyboard"}
        products.push(this)
    }

    static fetchAll(){
        // why products is not used keywoard this?
        // bc it's outsife the class
        return products
    }
}