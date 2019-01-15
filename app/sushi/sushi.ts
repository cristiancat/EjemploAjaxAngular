export class Sushi{
    nombre:string="";
    tipo:string="";
    precio:number=0;
    vegano:boolean=false;
    ingredients:Array<String>;

    constructor(nombre:string, tipo:string, 
                    precio:number, vegano:boolean
                    ,ingredients:Array<String> ){
        this.nombre=nombre;
        this.tipo=tipo;
        this.precio=precio;
        this.vegano=vegano;
        this.ingredients=ingredients;

    }
}
