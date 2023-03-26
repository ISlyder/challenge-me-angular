import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlagGameService {
  private readonly BACK_URL = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.BACK_URL}/countries`);
  }
}
