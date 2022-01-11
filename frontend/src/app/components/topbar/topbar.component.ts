import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
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

}
