import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecargaEletronica } from 'src/app/domain/RecargaElectronica';
import { RecargaElectronicaService } from 'src/app/services/recarga-electronica.service';

@Component({
  selector: 'app-recarga-electronica',
  templateUrl: './recarga-electronica.component.html',
  styleUrls: ['./recarga-electronica.component.css']
})
export class RecargaElectronicaComponent implements OnInit {
  nuevaRecarga: RecargaEletronica = new RecargaEletronica();

  constructor(private recargaService: RecargaElectronicaService) {}

  ngOnInit(): void {}

  realizarRecarga(): void {
    this.recargaService
      .realizarRecarga(this.nuevaRecarga)
      .subscribe(
        (response) => {
          console.log('Recarga realizada con éxito:', response);
          alert('Recarga realizada con éxito');
          // Puedes realizar otras acciones aquí, como redirigir a otra página
        },
        error => {
          console.error('Error al realizar recarga:', error);
          alert('Error al realizar recarga');
        }
      );
  }
}
