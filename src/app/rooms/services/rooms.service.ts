import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root', // позже объяснит
})
export class RoomsService {
  constructor() {}

  roomList: RoomList[] = [
    {
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
    },
    {
      roomNumber: 2,
      roomType: 'Double',
      amenities: ['Wifi', 'Air Conditioning', 'Heating'],
      price: 200,
      photos: [
        'https://lh6.googleusercontent.com/LAbDs9JrwGjxAAQoHT1lNnKt4a5_OXDqw7S3hZQajGS30XvPwjynPOA8-afixA6QqxL_g7iPn12dRWTO40GhEyPS7n7CDzRYg61Ib334yCK6ZIPjLNZbZExrLk_8BPvf83fq1Qte',
      ],
      checkIn: new Date('2020-01-01'),
      checkOut: new Date('2020-01-02'),
      rate: 5,
    },
    {
      roomNumber: 3,
      roomType: 'Suite',
      amenities: ['Wifi', 'Air Conditioning', 'Heating'],
      price: 300,
      photos: [
        'https://baikaltrain.ru/upload/iblock/407/407569dcfbe6cb69a9099f18f044d2f7.jpg',
      ],
      checkIn: new Date('2020-01-01'),
      checkOut: new Date('2020-01-02'),
      rate: 3,
    },
    {
      roomNumber: 4,
      roomType: 'Deluxe',
      amenities: ['Wifi', 'Air Conditioning', 'Heating'],
      price: 400,
      photos: [
        'https://mardhiyyahhotel.com/wp-content/uploads/sites/18/2021/03/CORPORATE-FLOOR-DELUXE-ROOM_KING-1.png',
      ],
      checkIn: new Date('2020-01-01'),
      checkOut: new Date('2020-01-02'),
      rate: 2,
    },
  ];

  getRooms(): RoomList[] {
    return this.roomList;
  }
} // Сервис это переиспользуемый класс, в который вы
// можете поместить некоторую бизнес логику, а затем просто получить доступ к ней внутри вашего компонента.

// мы переместим бизнес логику в сервис
// нужно отделять бизнес логику от остальной
