import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDirective } from './custom-derective.directive';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http'; // отсюда нужно импортировать http
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.servise';

@NgModule({
  declarations: [AppComponent, RoomsComponent, CustomDirective, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
