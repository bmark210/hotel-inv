import {
  Directive,
  ElementRef,
  OnDestroy,
  AfterContentInit,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[hinvCustomDerective]',
})
export class CustomDirective implements OnInit, AfterContentInit {
  constructor(private el: ElementRef) {
    // Add an event listener in the constructor
    this.el.nativeElement.addEventListener('click', this.onClick.bind(this));
  }

  ngAfterContentInit() {
    this.el.nativeElement.addEventListener('click', this.onClick.bind(this));
    console.log('Element AfterContentInit.');
  }

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', this.onClick.bind(this));
    console.log('Element OnInit.');
  }

  onClick() {
    console.log('Element clicked.');
  }
}
