import { Component } from '@angular/core';
import {QuienesSomosComponent} from './Quienes-Somos/quienes-somos.component';
/* lo anterior da problema solo porque tenemos un archivo que no se lee nunca*/

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class indexComponent {

}
