import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'addItems', component: AdditemsComponent},
    {path: 'editItems/:id', component: AdditemsComponent},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}