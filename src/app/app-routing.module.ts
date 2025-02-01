import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngerComponent } from './anger/anger.component';
import { JoyComponent } from './joy/joy.component';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { HopeComponent } from './hope/hope.component';
import { LoveComponent } from './love/love.component';
import { PeaceComponent } from './peace/peace.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anger', component: AngerComponent },
  { path: 'joy', component: JoyComponent },
  { path: 'anxiety', component: AnxietyComponent },
  { path: 'hope', component: HopeComponent },
  { path: 'love', component: LoveComponent },
  { path: 'peace', component: PeaceComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
