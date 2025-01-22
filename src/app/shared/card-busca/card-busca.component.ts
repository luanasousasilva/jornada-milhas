import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage
  ],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {

}
