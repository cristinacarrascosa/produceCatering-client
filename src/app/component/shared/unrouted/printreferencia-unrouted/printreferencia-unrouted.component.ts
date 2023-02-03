import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import  autotable from 'jspdf-autotable';


@Component({
  selector: 'app-printreferencia-unrouted',
  templateUrl: './printreferencia-unrouted.component.html',
  styleUrls: ['./printreferencia-unrouted.component.css']
})
export class PrintreferenciaUnroutedComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}

