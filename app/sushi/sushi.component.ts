import { Component, OnInit } from "@angular/core";
import {Sushi} from "./sushi";
import {SushisService} from "./sushi.service";
//codi per la clase
@Component(
    {
        selector: 'sushi-tag',
        templateUrl: './sushi.component.html',
        styleUrls: ['./sushi.component.css']
        ,
        providers:[SushisService]
    }
)
export class SushiComponent implements OnInit {
    ngOnInit(): void {
        this._serviceSushis.getSushisAjax().subscribe(
            (result)=>{
                console.log(result);
                this.sushis=result.sushis;
                
            },
            (error)=>{
                console.log("ERRORR");
            }
        );
    }
    titulo: string = "SOY EL SUSHI COMPONENT!";
    sushiSelected=0;
    nouIngredient="";
    calorias=[];

    constructor(private _serviceSushis:SushisService){


    }
    sushi:Sushi=new Sushi("","",0,false,[]);
    sushis=this._serviceSushis.getSushis();

    borraIngredient(index){
        //this.sushis[this.sushiSelected].ingredients.splice(index,1);

        let sushiPerBorrar= this.sushis[this.sushiSelected];
        sushiPerBorrar.ingredients.splice(index,1);
        
    }

    borraSushi(index){
        //this.sushis.splice(index,1);
        this._serviceSushis.delSushi(index);
        this.sushis= this._serviceSushis.getSushis();
    }

    addSushi(){
        this.sushis.push( JSON.parse(JSON.stringify(this.sushi) ) );
    }

    addIngredient(){
        let sushiAfegir = this.sushis[this.sushiSelected];
        sushiAfegir.ingredients.push(this.nouIngredient);
    }
    getCalorias(calorias){
        this.calorias=calorias;
    }
  
}
