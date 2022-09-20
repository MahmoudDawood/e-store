export class Product {
    name: string;
    image: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    _id: number;
    constructor(id = 0, name: string = '', category = '', description = '', price = 0, stock = 0, image = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000'){
        this._id = id;    
        this.name = name;
        this.image = image;
        this.category = category;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}