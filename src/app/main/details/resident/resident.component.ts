import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { StarwarsService } from '../../../services/starwars.service';
import { Observable } from 'rxjs/Observable';
import { FLY_IN_OUT } from '../../../config/animations';
import { DATEFORMAT } from '../../../utility/date.format';
import * as Moment from 'moment';
@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss'],
  animations: [
    FLY_IN_OUT()
  ]
})
export class ResidentComponent implements OnInit {
  @Input()
  public url = '';
  public person$: Observable<any>;
  @HostBinding('@flyInOut') animState = 'out';
  constructor(
    private starwarsService: StarwarsService
  ) { }

  ngOnInit() {
    this.person$ = this.starwarsService.fetchPersonByUrl(this.url)
    // .delay(90)
    // .do(() => this.slideInOutAnimation = 'in');
    .do(() => this.animState = 'in');
  }

  formatDate(data) {
    return Moment(data).calendar(null, DATEFORMAT);
  }

}
