/**
 * Created by Blagojevic Milica on 08-May-17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent  {

  proveri (ime: string, prezime: string, naslov: string, tekst: string, telefon: string) {
    if (ime === '') {
      alert('Polje za ime je prazno!');
    }
    if (prezime === '') {
      alert('Polje za prezime je prazno!');
    }
    if (naslov === '') {
      alert('Polje za naslov je prazno!');
    }
    if (tekst === '') {
      alert('Polje za tekst je prazno!');
    }
    if (telefon === '') {
      alert('Polje za telefon je prazno!');
    }
    if (ime !== '' && prezime !== '' && naslov !== '' && tekst !== '' && telefon !== '') {
      alert('Uspesno ste poslali poruku!');
    }
  }

}
