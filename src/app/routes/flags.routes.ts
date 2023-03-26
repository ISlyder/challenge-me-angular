import { Route } from '@angular/router';
import { FlagPageComponent } from '../flag-page/flag-page.component';
import { FlagPageResolver } from '../flag-page/flag-page.resolver';

export const FLAGS_ROUTES: Route[] = [
  {
    path: 'flags',
    component: FlagPageComponent,
    resolve: {
      countries: FlagPageResolver,
    },
  },
];
