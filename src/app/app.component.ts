import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel invirement';
  @ViewChild('rooms', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innerText = 'This is div that we created by templateRef';
  }
  // ngAfterViewInit(): void {
    // const rooms = this.vcr.createComponent(RoomsComponent);
    // rooms.instance.title = 'RoomscdspdcdscsdCDATASection,cm,dc';
  // }
}
