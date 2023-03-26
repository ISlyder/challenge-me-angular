import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FlagGame} from '../../flag/model/flagGame';
import {Player} from '../../models/player';

@Component({
  selector: 'chal-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  gameForm: FormGroup;
  game: FlagGame;

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      pseudo: ['', [Validators.required]]
    });
    this.initGame();
  }

  initGame(): void {
    if (localStorage.length > 0) {
      this.game = JSON.parse(localStorage.getItem('test'));
      this.pseudo.setValue([this.game.player.username]);
    }
    else {
      this.game = {
        id: 'test',
        player: {
          id: '',
          username: ''
        },
        percentage: 0,
        scoreTime: 0
      };
    }
  }

  get pseudo(): FormArray {
    return this.gameForm.get('pseudo') as FormArray;
  }

  startGame(): void {
    if (this.gameForm.valid) {
      const player: Player = {
        id: 'fakeId',
        username: this.pseudo.value
      };
      this.game.id = 'test';
      this.game.player = player;
      localStorage.setItem(this.game.id, JSON.stringify(this.game));
      this.router.navigateByUrl(`/flag-challenge/${this.game.id}`).catch(error => console.error(error));
    }
  }
}
