import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { RecipieComponent } from './pages/recipie/recipie.component';
import { RecipeMahComponent } from './componants/recipe-mah/recipe-mah.component';
import { RecipeJapComponent } from './componants/recipe-jap/recipe-jap.component';
import { RecipeItaComponent } from './componants/recipe-ita/recipe-ita.component';
import { RecipePjbComponent } from './componants/recipe-pjb/recipe-pjb.component';
import { RecipeMexComponent } from './componants/recipe-mex/recipe-mex.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    RecipieComponent,
    RecipeMahComponent,
    RecipeJapComponent,
    RecipeItaComponent,
    RecipePjbComponent,
    RecipeMexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
