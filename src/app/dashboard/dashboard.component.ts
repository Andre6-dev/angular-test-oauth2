import { Component } from '@angular/core';
import { PetResourceServerService } from '../pet-resource-server.service';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private petResourceServer: PetResourceServerService,
    private cookieService: CookieService
  ) {}

  getBreeds(): void {
    this.petResourceServer.breeds().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
    });
  }

  authenticate(): void {
    this.petResourceServer
      .authenticate()
      .pipe(
        tap((data) => {
          this.cookieService.set('token', data.accessToken);
        })
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
      });
  }
}
