import {Component, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';

@Component({
  selector: 'chal-flag-game',
  templateUrl: './flag-page.component.html',
  styleUrls: ['./flag-page.component.scss'],
})
export class FlagPageComponent implements OnInit {
  countries: Country[];
  displayedCountries: Country[];
  continents: string[] = [
    'All',
    'Asie',
    'Afrique',
    'Amerique',
    'Europe',
    'Oceanie',
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data.countries))
      .subscribe((countries) => (this.countries = countries));
    this.displayedCountries = this.countries;
  }

  checkValue(event): void {
    if (event.target.checked) {
      if (event.target.value === 'All') {
        this.displayedCountries = this.countries;
      } else {
        this.displayedCountries = this.countries.filter(
          (e) => e.continent === event.target.value.toUpperCase()
        );
      }
    } else {
      this.displayedCountries = this.countries;
    }
  }
}
