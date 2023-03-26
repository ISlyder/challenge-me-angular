import {Component, Inject, OnInit} from '@angular/core';
import {Country} from '../models/country';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';
import {VictoryDialogComponent} from './victory-dialog/victory-dialog.component';

@Component({
  selector: 'chal-flag-game',
  templateUrl: './flag-game.component.html',
  styleUrls: ['./flag-game.component.scss']
})
export class FlagGameComponent implements OnInit {
  countries: Country[];
  sortedArray: Country[];
  currentCountry: Country;
  victory: boolean;
  answer = '';
  counter: number;
  seconds: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data.countries))
      .subscribe((countries) => {
        this.countries = countries;
        this.sortedArray = this.countries.sort(() => Math.random() > .5 ? 1 : -1);
      });
    this.victory = false;
    this.currentCountry = this.sortedArray[0];
    this.counter = 0;
    this.seconds = 0;
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  nextFlag(): void {
    const translatedCountryName: string = this.translate.instant(`COUNTRY.${this.currentCountry.name}`);
    if (this.isAnswerCorrect(translatedCountryName)) {
      this.sortedArray.shift();
      this.currentCountry = this.sortedArray[0];
      this.answer = '';
      this.counter++;
    } else if (this.sortedArray && this.sortedArray.length === 0) {
      this.victory = true;
      this.openDialog();
    }
  }

  openDialog(): void {
    const game = JSON.parse(localStorage.getItem('savedGame'));
    const dialogRef = this.dialog.open(VictoryDialogComponent, {
      data: {
        currentGame: game
      },
      width: '75%',
    });
    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        localStorage.removeItem('test');
      }
    });
  }

  skip(): void {
    if (this.sortedArray) {
      this.sortedArray.sort(() => Math.random() > .5 ? 1 : -1);
      this.currentCountry = this.sortedArray[0];
    }
  }

  isAnswerCorrect(name: string): boolean {
    return this.sortedArray
      && this.sortedArray.length > 0
      && !this.victory
      && this.answer.toLowerCase() === name.toLowerCase();
  }
}
