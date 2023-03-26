import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../models/country';

@Component({
  selector: 'chal-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit{
  @Input()
  country: Country;
  @Input()
  defaultDisplay: boolean;
  display: boolean;

  constructor() { }

  ngOnInit(): void {
    this.display = this.defaultDisplay;
  }

  displayInfos(): void {
    this.display = true;
  }
  hideInfos(): void {
    this.display = false;
  }

}
