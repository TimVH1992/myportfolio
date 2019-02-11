// Class Book with its properties, getters and methods
class Book {
    constructor(title, author, pages){
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
    get ratings(){
        return this._ratings;
    }
    addRating(newRating){
        this.ratings.push(newRating);
    }
}

