import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * CARDS
   */
  singleCard: any[];
  viewCard: any[] = [500, 200];

  // options
  showLegendCard: boolean = true;
  showLabelsCard: boolean = true;

  colorSchemeCard = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  /**
  * GRÁFICO
  */
  single: any[];
  multi: any[];

  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Total';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event) {
    console.log(event);
  }


  /**
   * GRID
   */

  displayedColumns: string[] = ['name', 'squad', 'status'];
  dataSource = new MatTableDataSource<usuarios>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * GERAL
   */

  constructor() {
    Object.assign(this, {single});
    Object.assign(this, {singleCard});
  }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }
}

//Card
export var singleCard = [
  {
    "name": "BMG",
    "value": 4
  },
  {
    "name": "Metlife",
    "value": 3
  },
  {
    "name": "Funcesp",
    "value": 3
  }
];

//Grafico
export var single = [
  {
    "name": "Logados",
    "value": 5
  },
  {
    "name": "Ausentes",
    "value": 2
  },
  {
    "name": "Indisponível",
    "value": 1
  },
  {
    "name": "Ocupado",
    "value": 2
  }
];

//Grid
const ELEMENT_DATA: usuarios[] = [
  {name: 'Francisco', squad: 'BMG', status: 'Logado'},
  {name: 'José', squad: 'BMG', status: 'Ausente'},
  {name: 'Lorena', squad: 'Metlife', status:'Ausente'},
  {name: 'João', squad: 'Funcesp', status: 'Logado'},
  {name: 'Fábio', squad: 'BMG', status: 'Logado'},
  {name: 'Fernanda', squad: 'Metlife', status: 'Indisponível'},
  {name: 'Ana Paula', squad: 'Metlife', status:'Logado'},
  {name: 'Guilherme', squad: 'Funcesp', status: 'Indisponível'},
  {name: 'Luis', squad: 'Funcesp', status: 'Ocupado'},
  {name: 'Francielle', squad: 'BMG', status: 'Ocupado'},
];

export interface usuarios {
  name: string;
  squad: string;
  status: string;
}

