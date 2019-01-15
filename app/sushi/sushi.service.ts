import { Injectable } from "@angular/core";
import {Sushi} from "./sushi";
import {Http,Response,Headers} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable()
export class SushisService{
    constructor( private _conexHttp:Http ){}
    sushis = [
        new Sushi("niguiri de salmon",'niguiri',
                    2,false,["arros","salmon","vinagre","azucar","sal"] )
        ,
        new Sushi("niguiri de atun", 'niguiri',
                    2.5,false,["arros","atun","vinagre","azucar","sal"])
        ,
        new Sushi("maqui de mango",'maqui',
                2,true,["arros","mango","alga nori","vinagre"])
    ];
    /////
    getSushisAjax(){
        let url="http://localhost:8081/sushiEjemploServiceAjax01/php/getSushis.php";
        return this._conexHttp.get(url)
                    .pipe(map(res=>res.json()));
    }
    getSushis(){
        return this.sushis;
    }
    /////
    getSushi(numSushi:number){
        return this.sushis[numSushi];
    }
    delSushi(numSushi:number){
        this.sushis.splice(numSushi,1);
    }
    createSushi( nombre:string, tipo:string, 
                precio:number,vegano:boolean, ingredients:Array<String>){
        this.sushis.push(new Sushi(nombre,tipo,precio,vegano,ingredients));
    }
    addNewSushi(sushi:Sushi){
        this.sushis.push(sushi);
    }

}