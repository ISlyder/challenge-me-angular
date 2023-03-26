import {Route} from '@angular/router';
import {FlagGameComponent} from '../flag-game/flag-game.component';
import {FlagPageResolver} from '../flag-page/flag-page.resolver';
import {StartGameComponent} from '../flag-game/start-game/start-game.component';

export const FLAGS_GAME_ROUTES: Route[] = [
  {
    path: 'start-game',
    component: StartGameComponent
  },
  {
    path: 'flag-challenge/:id',
    component: FlagGameComponent,
    resolve: {
      countries: FlagPageResolver,
    },
  },
];
