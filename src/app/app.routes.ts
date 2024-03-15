import { Routes } from '@angular/router';
import { NepHoodComponent } from './components/nep-hood/nep-hood.component';


export const routes: Routes = [
    { path:"", pathMatch:"full", redirectTo: "home" },
    { path:"nephood", title:"NepHood | Zest", component:NepHoodComponent },
];