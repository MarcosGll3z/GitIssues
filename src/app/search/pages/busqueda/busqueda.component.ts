import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  arrIssues: any = []

  constructor(
    private ss: SearchService,
  ) { }

  ngOnInit(): void {
  }

  handleDebounce(event: any){
    this.ss.getIssues(event).subscribe( ({items}) => {
      this.arrIssues = items
    })
  }
}
