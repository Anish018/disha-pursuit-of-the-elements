// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navbarOpen = false;
  navItems = [
    { name: 'Home', slideIndex: 0 },
    { name: 'About', slideIndex: 1 },
    { name: 'Amenities', slideIndex: 3 },
    { name: 'Plans', slideIndex: 4 },
    { name: 'Location', slideIndex: 6 },
    { name: 'Contact Us', slideIndex: 8 }
  ];

  constructor(private sharedService: SharedService) {}

  emitSlideSelect(slideIndex: number) {
    console.log(`Emitting slide select for index: ${slideIndex}`);
    this.sharedService.changeSlide(slideIndex);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    this.navbarOpen = false;
  }
}
