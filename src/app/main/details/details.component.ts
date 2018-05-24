import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StarwarsService } from '../../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public person$: Observable<any>;
  public planet$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private starwarsService: StarwarsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.person$ = this.starwarsService.fetchPerson(params.id);
        this.person$.subscribe((data) => {
          if (data.homeworld) {
            this.planet$ = this.starwarsService.planet(data.homeworld);
          }
        });
      }
    })
  }

  gotoDetails(url: string) {
      const urlId = url.replace('https://swapi.co/api/people/', '').replace('/', '');
      this.router.navigate(['/details', urlId])
  }

}
