import { Routes } from '@angular/router';
import { NepHoodComponent } from './components/nep-hood/nep-hood.component';
import { OurTeamComponent } from './our-team/our-team.component';


export const routes: Routes = [
    { path:"", pathMatch:"full", redirectTo: "home" },
    { path:"nephood", title:"NepHood | Zest", component:NepHoodComponent },
    { path:"ourteam", title:"OurTeam | Zest", component:OurTeamComponent }
];