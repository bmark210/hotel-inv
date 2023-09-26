export interface RoomList {
  roomNumber: number;
  roomType: string;
  amenities: string[];
  price: number;
  photos: string[];
  checkIn: Date;
  checkOut: Date;
  rate: number;
  selected?: boolean;
}
