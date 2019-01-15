import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";



 @Component(
     {selector:"calorias-tag",
     templateUrl:"./calorias.component.html",
     styleUrls:['./calorias.component.css']

     }
 )
 export class CaloriasComponent implements OnInit{
     titulo="Componente de calorias";
     calorias= {"arros":33,"mango":80,"vinagre":22,"azucar":99};
     numCalorias=[];

     @Input() productoSelected;
    @Output() onGetCalorias = new EventEmitter();

     ngOnInit(){  
         this.sendCalorias();
        if(this.productoSelected==undefined){
            this.productoSelected= {
                nombre: "maqui de mango",
                tipo: 'maqui',
                precio: '2€',
                vegano: 'si',
                ingredients:["arros","mango","alga nori","vinagre"]
            }
        }
      }
    setCalorias(nombreProducto){
        this.calorias[nombreProducto] = this.numCalorias[nombreProducto];
    }
    sendCalorias(){
        this.onGetCalorias.emit(this.calorias);
    }

 }