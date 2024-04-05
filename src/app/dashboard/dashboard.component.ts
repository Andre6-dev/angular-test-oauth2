import { Component } from '@angular/core';
import {PetResourceServerService} from "../pet-resource-server.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private petResourceServer: PetResourceServerService) {
  }

  getBreeds(): void {
    this.petResourceServer.breeds().subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error)
      }
    );
  }

  authenticate(): void {
    this.petResourceServer.authenticate().subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error)
      }
    );
  }

}
