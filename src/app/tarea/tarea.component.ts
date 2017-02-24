import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tag-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input() valTarea:any;
  @Input() itemDelete: number; 
  @Output() deleteItem = new EventEmitter();

  lanzarDelItem(event){
    this.deleteItem.emit({numero: this.itemDelete});
  }

}
