import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() src: string =''
  @Input() alt: string = ''
}
