import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Country} from '../models/country';
import {FlagGameService} from '../service/flag-game.service';

@Injectable({
  providedIn: 'root',
})
export class FlagTrainingResolver implements Resolve<Country[]> {
  constructor(private countryApi: FlagGameService) {
  }

  resolve(): Observable<Country[]> {
    return this.countryApi.getAllCountries();
  }
}
