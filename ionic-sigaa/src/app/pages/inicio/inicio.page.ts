import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
  IonAvatar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonNote,
    IonAvatar,
    CommonModule,
    FormsModule
  ]
})
export class InicioPage implements OnInit {

  componentes = [
    'Atividade de Extensão | Sala 19:00',
    'Ciência de Dados I | Sala 19:00',
    'Empreendedorismo e Inovação | Sala 19:00',
    'Gerenciamento de Serviços para Internet | Sala 19:00',
    'Programação para Dispositivos Móveis I | Sala 19:00'
  ];

  constructor() { }

  ngOnInit() {
  }

}
