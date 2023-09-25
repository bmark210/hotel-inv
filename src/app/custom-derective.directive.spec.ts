import { ElementRef } from '@angular/core';
import { CustomDirective } from './custom-derective.directive';

describe('CustomDerectiveDirective', () => {
  it('should create an instance', () => {
    const elementRefMock: ElementRef = {} as ElementRef;
    const directive = new CustomDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
