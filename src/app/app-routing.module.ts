import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RecipieComponent } from './pages/recipie/recipie.component';
import { RecipeItaComponent } from './componants/recipe-ita/recipe-ita.component';
import { RecipeJapComponent } from './componants/recipe-jap/recipe-jap.component';
import { RecipeMahComponent } from './componants/recipe-mah/recipe-mah.component';
import { RecipeMexComponent } from './componants/recipe-mex/recipe-mex.component';
import { RecipePjbComponent } from './componants/recipe-pjb/recipe-pjb.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'recipie', component: RecipieComponent},
  { path: 'repIta', component: RecipeItaComponent},
  { path: 'repJap', component: RecipeJapComponent},
  { path: 'repMah', component: RecipeMahComponent},
  { path: 'repMex', component: RecipeMexComponent},
  { path: 'repPjb', component: RecipePjbComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
