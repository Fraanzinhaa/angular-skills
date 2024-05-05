import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  link = 'https://www.linkedin.com/in/francielle-fernandes-a5466054/';
  loading: boolean = false;
  skeleton = [1, 2, 3, 4, 5, 6];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret
      this.loading = false;
    });
  }

  likeItem(item: any) {
    let idx = this.cards.findIndex(card => card.id === item.id);
    this.cards[idx].likes++
  }

  share() {
    window.open(this.link, '_blank')
  }

}
