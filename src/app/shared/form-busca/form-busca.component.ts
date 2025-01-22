import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    MatChipListbox,
    MatChipOption
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {

}
