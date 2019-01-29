import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  frase: string;

  fraseSub: Subscription;


  constructor(private http: Http) { }

  ngOnInit() {
    this.fraseSub = this.http.get('http://quotes.stormconsultancy.co.uk/random.json')
        .pipe(map((dado: any) => dado.json()))
        .subscribe((dado: any) => this.frase = dado.quote);
  }

  ngOnDestroy(): void {
    this.fraseSub.unsubscribe();
  }

}
