import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes:Personne[]
  constructor() {
    this.personnes= 
    [
    new Personne(1,"sliti","khalil",22,"assets/images/rotating_card_profile3.png","xxxxxxxx","Devops and Cloud engineer","AWS , Microsoft Azure , Linux , CCNA","I solve problems in creative ways."),
    new Personne(2,"hajji","wafa",22,"assets/images/rotating_card_profile.png","xxxxxxxx","Chemical engineer","Water treatment, Nuclear Chemistry","I solve problems in creative ways."),
    new Personne(3,"testing default image pipe ","testing default image pipe ",2,"","xxxxxxxx","","", "")
    ]
   }
  getpersonnes()
  {
    return this.personnes;
  }
  getpersonne(id:number):Personne
  {
    const perso=this.personnes.find((perso)=>{return perso.id==id});
    return perso;
  }
  addpersonne(x)
  {
    x.id=this.personnes[this.personnes.length -1].id +1
    this.personnes.push(x)
  }
 
 
}
