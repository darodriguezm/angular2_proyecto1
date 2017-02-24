import { Injectable } from '@angular/core';

@Injectable()
export class tareasService {
    public arrTareas: any[]=[];
    public cantItem: number;

    addTarea(itemValue: string){
        if(itemValue.length>0){
            this.arrTareas.push({value: itemValue, selected: false});
            this.cantItem=this.arrTareas.length;
        }else{
            alert("Debe ingresar el valor del item");
        }
    }

    delTarea(numero: number){
        this.arrTareas.splice(numero,1);
        this.cantItem=this.arrTareas.length;
    }
}