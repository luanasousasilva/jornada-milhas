import { Component } from '@angular/core';
import {BannerComponent} from "../../shared/banner/banner.component";
import {ContainerComponent} from "../../shared/container/container.component";
import {CardBuscaComponent} from "../../shared/card-busca/card-busca.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
