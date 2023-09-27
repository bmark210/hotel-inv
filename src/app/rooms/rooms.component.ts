import { RoomsService } from './services/rooms.service';
import { Component, DoCheck, ViewChild, OnInit } from '@angular/core';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
// view child , templateRef , dinamic load component
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Hotel Colorado';
  title = 'Rooms List';
  roomList: RoomList[] = [];
  slectedRoom!: RoomList;
  selectRoom(room: RoomList): void {
    this.slectedRoom = room;
  }
  hideRoomsList = true;
  addNewRoom(): void {
    const room = {
      roomNumber: 1,
      roomType: 'Single',
      amenities: ['Wifi', 'Air Conditioning', 'Heating'],
      price: 100,
      photos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_DFbqY3yZbWhQ3Vez2y6LBwjqskIEWB2PIxV4ogC6w&s',
      ],
      checkIn: new Date('2020-01-01'),
      checkOut: new Date('2020-01-02'),
      rate: 4,
    };
    this.roomList = [...this.roomList, room];
  }

  ngDoCheck(): void {
    // этот метод очень затратный для приложения
    // не выполнять ngDoCheck и ngOnChanges в одном компоненте
    //этот метод обнаруживает любые изминениях внутри приложения
    // стараться использовать его минимально насколько возможно
    console.log('ngDoCheck');
  }

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent; //использование ViewChild
  // это создание нового экземпляра header компонента и мы можем получить доступ к его свойствам и методам внутри этого компонента(rooms)
  // если мы изминяем данные в компоненте то и в экземпляре он тоже обновляется
  // {static:true} для разрешения результатов запроса до запуска обнаружения изменений
  // по умолчанию false и данные экземпляра дают 'undefined'
  ngAfterContentInit(): void {
    // метод срабатывает после инициализации Content template -
    console.log(this.headerComponent); // кстати ViewChild срабатывает только после вызова ngAfterContentInit
  }
  ngAfterViewInit(): void {
    // метод срабатывает после инициализации предстоаления(DOM-структура, созданная на основе шаблона(template))
    console.log(this.headerComponent);
  }
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // метод срабатывает до игициализации предстовления
    this.roomList = this.roomsService.getRooms();
  }
}
