import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Output() roomSelected = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }

  constructor() {}
}
