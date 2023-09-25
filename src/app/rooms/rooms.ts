export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  amenities: string[];
  price: number;
  photos: string[];
  checkIn: Date;
  checkOut: Date;
}