import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecargaEletronica } from '../domain/RecargaElectronica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaElectronicaService {
  private baseUrl = 'http://localhost:8080/examen_final/rs/recargas/procesar';

  constructor(private httpClient: HttpClient) {}

  realizarRecarga(recarga: RecargaEletronica): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, recarga);
  }

  actualizarRecarga(recarga: RecargaEletronica): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}`, recarga);
  }

  getRecargaPorId(recargaId: number): Observable<RecargaEletronica> {
    return this.httpClient.get<RecargaEletronica>(`${this.baseUrl}/${recargaId}`);
  }

  eliminarRecarga(recargaId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/elim/${recargaId}`);
  }

  getRecargas(): Observable<RecargaEletronica[]> {
    return this.httpClient.get<RecargaEletronica[]>(`${this.baseUrl}/list`);
  }
}
