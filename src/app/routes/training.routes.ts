import { Route } from '@angular/router';
import {FlagTrainingComponent} from '../flag-training/flag-training.component';
import {FlagTrainingResolver} from '../flag-training/flag-training.resolver';

export const TRAINING_ROUTES: Route[] = [
  {
    path: 'training',
    component: FlagTrainingComponent,
    resolve: {
      countries: FlagTrainingResolver,
    },
  },
];
