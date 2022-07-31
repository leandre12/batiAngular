import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'batiAngular';
  auteur = 'Léandre ANDRIANIAINA';
  textBouton ='Créer une nouvelle intervention';
  

  //Pour changer les text du bouton
  clickOnButton(boutonText: string){

    this.textBouton = boutonText;

  }
}
 