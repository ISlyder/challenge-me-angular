import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './ui/navbar/navbar.component';
import {FooterComponent} from './ui/footer/footer.component';
import {NotfoundComponent} from './utils/notfound/notfound.component';
import {FlagPageComponent} from './flag-page/flag-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FlagTrainingComponent} from './flag-training/flag-training.component';
import {FlagComponent} from './flag/flag.component';
import {FlagGameComponent} from './flag-game/flag-game.component';
import {MatInputModule} from '@angular/material/input';
import {StartGameComponent} from './flag-game/start-game/start-game.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TimerPipe} from './utils/pipe/timer.pipe';
import {VictoryDialogComponent} from './flag-game/victory-dialog/victory-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    FlagPageComponent,
    FlagTrainingComponent,
    FlagComponent,
    FlagGameComponent,
    StartGameComponent,
    TimerPipe,
    VictoryDialogComponent
  ],
  entryComponents: [VictoryDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
