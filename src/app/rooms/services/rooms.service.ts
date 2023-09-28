import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.servise';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
} // Сервис это переиспользуемый класс, в который вы
// можете поместить некоторую бизнес логику, а затем просто получить доступ к ней внутри вашего компонента.

// мы переместим бизнес логику в сервис
// нужно отделять бизнес логику от остальной
