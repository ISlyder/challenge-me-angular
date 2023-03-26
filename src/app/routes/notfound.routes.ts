import { Route } from '@angular/router';
import { NotfoundComponent } from '../utils/notfound/notfound.component';

export const NOT_FOUND_ROUTES: Route[] = [
  {
    path: '**',
    component: NotfoundComponent,
  },
];
