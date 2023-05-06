import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  misDatos: any;
  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(1).subscribe(data => {
      this.misDatos = data;
    })
    
  }

}
