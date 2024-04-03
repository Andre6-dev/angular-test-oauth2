import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {PetResourceServerService} from "./pet-resource-server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'floofle-ui';

  constructor(private primengConfig: PrimeNGConfig,
              private petResourceServer: PetResourceServerService ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
