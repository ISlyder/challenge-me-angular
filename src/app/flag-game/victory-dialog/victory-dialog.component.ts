import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {FlagGame} from "../../flag/model/flagGame";

@Component({
  selector: 'chal-victory-dialog',
  templateUrl: './victory-dialog.component.html',
  styleUrls: ['./victory-dialog.component.scss']
})
export class VictoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VictoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/flags').catch(error => console.log(error));
  }
}
