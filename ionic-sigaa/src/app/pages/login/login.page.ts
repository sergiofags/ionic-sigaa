import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonIcon,
  ]
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';

  entrar() {
    if (this.usuario && this.senha) {
      alert('Login realizado (simulação)');
      // Aqui você pode navegar para a página principal, ex:
      // this.router.navigate(['/home']);
    } else {
      alert('Por favor, preencha usuário e senha.');
    }
  }

  recuperarSenha() {
    alert('Funcionalidade de recuperação de senha ainda não implementada.');
    // Aqui você pode abrir um modal, enviar e-mail, etc.
  }

  cadastrar() {
    alert('Funcionalidade de cadastro ainda não implementada.');
    // Aqui você pode navegar para página de cadastro futuramente
  }
}
