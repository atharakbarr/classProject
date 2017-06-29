
export class ProductItems{
    private Id : number;
    private Name : string;
    private Category : string;
    private Price : number;

    constructor(private _id : number, private _nm : string, private _cat : string, private _price : number)
    {
        this.Id = _id;
        this.Name = _nm;
        this.Category = _cat;
        this.Price = _price;
    }
}