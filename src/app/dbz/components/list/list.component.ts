import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Characters[] = [{

    name: 'Satanas Cor Petit',
    power: 2500
  }]


  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personatge

    if(!id ) return
    this.onDelete.emit(id)
  }
}
