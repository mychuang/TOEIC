import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { timeout } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { TOEIC } from 'src/app/model/TOEIC';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = [
    'VAR', 'CVAR', 'SENT', 'REMARK'
  ];
  dataSource: MatTableDataSource<TOEIC>;

  constructor(private service: HomeService) {
    this.dataSource = new MatTableDataSource<TOEIC>();
  }

  ngOnInit(): void {
    this.getTOEIC();
  }

  getTOEIC(){
    this.service.getTOEIC().pipe(timeout(2000)).subscribe({
      next: (res) =>{
        this.dataSource.data = res;
      },
      error: (e)=>{
        console.log(e);
        window.alert(`Oops! something went wrong, contact your IT specialist`);
      }
    })
  }

}
