import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  PRODUCT_PATH,
  SECTION_BASIC_APPS,
  SECTION_COMPLEX_APPS,
  SectionItem,
} from './applications.data';
import { Router } from '@angular/router';
import { LogoSwiper } from '../../components/logo-swiper/logo-swiper';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, LogoSwiper],
  templateUrl: './applications.html',
  styleUrl: './applications.scss',
})
export class Applications {
  private router = inject(Router);

  readonly productPath = PRODUCT_PATH;
  readonly sectionBasicApps: SectionItem[] = SECTION_BASIC_APPS;
  readonly sectionComplexApps: SectionItem[] = SECTION_COMPLEX_APPS;

  openDetails(item: SectionItem) {
    this.router.navigate(['/', PRODUCT_PATH, item.productId], { state: item });
  }
}
