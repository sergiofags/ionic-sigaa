import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonIcon,     // <-- Adicione este
    IonHeader,
    IonTitle,
    IonToolbar,
  ]
})
export class DisciplinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
