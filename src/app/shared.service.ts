// shared.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  scrollToSlideEvent = new EventEmitter<number>();

  constructor() {}
  
  changeSlide(index: number) {
    console.log(`Change slide event emitted for index: ${index}`);
    this.scrollToSlideEvent.emit(index);
  }
}
