import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  auto = true;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.getAutoTransaction();
  }

  logout(){
    this.sessionService.logout().subscribe(
      res => {
        console.log(res);
        // this.router.navigate(['login']);
        window.location.reload();
      },
      err => {
        console.log(err);
        
      }
    );

  }

  getAutoTransaction(){
    this.sessionService.getAuto().subscribe(
      res => {
        this.auto = res;
      },
      error => {
        this.auto = true;
      }
    );
  }

  setAutoTransaction(d: any){
    console.log('Entro', d);
    
    let data = {
      auto: !this.auto
    }
    this.sessionService.setAuto(data).subscribe(
      res => {
        console.log(res);
        this.auto = !this.auto
      },
      error => {
        this.auto = true;
      }
    );
  }

}
