import { Component, OnInit, Input } from '@angular/core';
import { StarwarsService } from '../../../services/starwars.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {
  @Input()
  public url = '';
  public person$: Observable<any>;
  constructor(
    private starwarsService: StarwarsService
  ) { }

  ngOnInit() {
    this.person$ = this.starwarsService.fetchPersonByUrl(this.url);
    console.log(this.url);
  }

}
