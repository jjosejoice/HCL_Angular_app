import { Component, OnInit, Input } from '@angular/core';

export interface detail {
  name: string;
  capital: string;
  population: number;
  currencies: any;
  flag: string;
}

const detail_DATA: detail[] = [];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  @Input() dataSource: detail[] = detail_DATA;
  constructor() { }

  ngOnInit(): void { 
  }

}
