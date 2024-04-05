import { Component } from '@angular/core';
import {PetResourceServerService} from "../pet-resource-server.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private petResourceServer: PetResourceServerService) {
  }

  getBreedsTest(): void {
    this.petResourceServer.breeds().subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error)
      }
    );
  }

}
