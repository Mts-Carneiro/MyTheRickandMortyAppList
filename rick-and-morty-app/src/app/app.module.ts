import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    CharacterCardComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
