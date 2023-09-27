import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnChanges {
  @Input() rooms: RoomList[] = [];
  @Output() roomSelected = new EventEmitter<RoomList>();

  @Input() title: string = '';
  ngOnChanges(changes: SimpleChanges): void { // можно использовать только в компонентах
    // ngOnChanges метод обнарудит любые изменения ваших входных значений
    // где есть данные получаемые с помощью декоратора @Input
    // if (changes['title']) { // указывает на изменение в поле title
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
  }

  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }
  constructor() {}
}
