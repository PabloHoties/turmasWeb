import { Routes } from '@angular/router';
import { CadastroTurmasComponent } from './cadastro-turmas/cadastro-turmas.component';
import { ConsultaTurmasComponent } from './consulta-turmas/consulta-turmas.component';
import { EdicaoTurmasComponent } from './edicao-turmas/edicao-turmas.component';

export const routes: Routes = [
    {
        path: 'turmas-cadastro',
        component: CadastroTurmasComponent

    },
    {
        path: 'turmas-consulta',
        component: ConsultaTurmasComponent
    },
    {
        path: 'turmas-edicao/:id',
        component: EdicaoTurmasComponent
    }
];
