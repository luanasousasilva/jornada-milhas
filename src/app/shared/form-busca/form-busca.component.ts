import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    MatChipListbox,
    MatChipOption,
    MatFormField,
    MatInput,
    MatFormFieldModule, // Para usar <mat-form-field> e <mat-label>
    MatInputModule,     // Para usar <input matInput>
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {

}
