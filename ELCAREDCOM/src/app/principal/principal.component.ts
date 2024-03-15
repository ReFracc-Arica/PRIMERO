import { Component } from '@angular/core';
/* lo anterior da problema solo porque tenemos un archivo que no se lee nunca*/

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class IndexComponent {

}
