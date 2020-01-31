import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSort} from '@angular/material/sort';
import {Ibeer} from '../interfaces/ibeer';
import {BeerService} from '../beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'tagline', 'description', 'abv'];
  dataSource: MatTableDataSource<Ibeer>; //
  @ViewChild(MatSort , {static: true}) sort : MatSort; //

  constructor(private beerService : BeerService ) { }

  async ngOnInit() {
    const data = await this.beerService.getAll();
  
     this.dataSource= new MatTableDataSource(data);
     this.dataSource.sort= this.sort;
 

  }

}
