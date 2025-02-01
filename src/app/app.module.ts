import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoyComponent } from './joy/joy.component';
import { LoveComponent } from './love/love.component';
import { AngerComponent } from './anger/anger.component';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { HopeComponent } from './hope/hope.component';
import { LoginComponent } from './login/login.component';
import { PeaceComponent } from './peace/peace.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoyComponent,
    LoveComponent,
    AngerComponent,
    AnxietyComponent,
    HopeComponent,
    LoginComponent,
    PeaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
