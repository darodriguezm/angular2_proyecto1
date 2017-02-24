import { Component, Output, EventEmitter } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { tareasService } from './servicios/tarea.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [tareasService]
})

export class AppComponent {
  private title="A checkList";
  private arrTareas: any[]=[];
  cantItems: number=0;

  constructor(private serviceParam: tareasService){
      this.arrTareas=serviceParam.arrTareas;
  }

  addTarea(itemValue: string){
    this.serviceParam.addTarea(itemValue);
    this.cantItems=this.serviceParam.cantItem;
  }

  delTarea(event):void{
    this.serviceParam.delTarea(event.numero);
    this.cantItems=this.serviceParam.cantItem;
    }

}


