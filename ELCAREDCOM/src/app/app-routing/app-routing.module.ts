import { Routes } from '@angular/router';
import { PrincBrotherComponent } from '../princ-brother/princ-brother.component';
import { ToshibaComponent } from '../toshiba/toshiba.component';
import { IndexComponent } from '../principal/principal.component';
import { KyoceraComponent } from '../kyocera/kyocera.component';
import { QuienesSomosComponent } from '../principal/Quienes-Somos/quienes-somos.component';

export const routes: Routes = [
    { path: 'brother', component: PrincBrotherComponent },
    { path: 'toshiba', component: ToshibaComponent },
    { path: 'kyocera', component: KyoceraComponent },
    { path: 'index', component: IndexComponent },
    { path: 'QuienesSomos', component: QuienesSomosComponent },
];


