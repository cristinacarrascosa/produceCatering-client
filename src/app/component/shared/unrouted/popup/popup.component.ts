import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

declare var bootstrap: any;


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() show: Observable<string>;
  @Input() title: string = "Produce Catering";
  @Input() body: string = "";
  @Input() size: string = "";
  @Input() icon: string = "";
  @Output() close = new EventEmitter<Event>();

  private eventsSubscriptionShow: Subscription;

  myPopup: any;
  strMsg:string = "";

  constructor() { }

  ngOnInit() {
    this.eventsSubscriptionShow = this.show.subscribe((str:string) => this.showModal(str));
  }

  ngOnDestroy() {
    this.eventsSubscriptionShow.unsubscribe();
  }

  showModal = (str:string) => {
    this.strMsg = str;
    this.myPopup = new bootstrap.Modal(document.getElementById('myPopup'), {
      keyboard: false
    })
    var myPopupEl = document.getElementById('myPopup');
    myPopupEl.addEventListener('hidden.bs.modal', (event): void => {
      this.close.emit(event);
    })
    this.myPopup.show()
  }



}
