import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getTOEIC();
  }

  getTOEIC(){
    this.service.getTOEIC().pipe(timeout(2000)).subscribe({
      next: (res) =>{
        console.log(res);
      },
      error: (e)=>{
        console.log(e);
        window.alert(`Oops! something went wrong, contact your IT specialist`);
      }
    })
  }

}
