import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  experienciaList: any;
  educacionList: any;
  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(1).subscribe(data => {
      this.experienciaList = data.experience;
      this.educacionList = data.education;
    })
    
  }

  delete(id?: number) {
    if (id != undefined) {
      this.datosPortfolio.delete(id);
    }
  }

}
