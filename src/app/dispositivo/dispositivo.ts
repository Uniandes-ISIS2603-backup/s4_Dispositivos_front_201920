export class Dispositivo{

    id: Number; 

    nombre: String;

    precio: Number; 

    imagen: String; 

    constructor(id:Number, nombre:String, precio:Number, imagen:String){
        this.id = id; 
        this.nombre = nombre; 
        this.precio = precio; 
        this.imagen = imagen; 
    }
}