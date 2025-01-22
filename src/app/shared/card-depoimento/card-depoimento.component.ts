import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard
  ],
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
