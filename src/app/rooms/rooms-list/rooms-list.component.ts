import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  OnInit(): void {
    console.log(this.rooms);
  }

  constructor() {}
}
