import {Component, Input} from '@angular/core';
import {MatMiniFabButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-botao-controle',
  standalone: true,
  imports: [
    MatMiniFabButton,
    NgClass
  ],
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
