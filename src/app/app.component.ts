import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaTurmasComponent } from './consulta-turmas/consulta-turmas.component';
import { CadastroTurmasComponent } from './cadastro-turmas/cadastro-turmas.component';
import { EdicaoTurmasComponent } from './edicao-turmas/edicao-turmas.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConsultaTurmasComponent,
    CadastroTurmasComponent,
    EdicaoTurmasComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turmasWeb';
}
