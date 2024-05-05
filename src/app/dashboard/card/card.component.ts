import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Output() getCard = new EventEmitter();
  @Output() getLink = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
    this.getCard.emit(card);

  }

  onShare(){
    this.getLink.emit(true);
  }

  getClass(likes: number){
    if (likes >= 5 && likes <= 10) 
      return 'primary'
    else if (likes > 10) 
      return 'warn'
    else 
      return ''
  }

}
