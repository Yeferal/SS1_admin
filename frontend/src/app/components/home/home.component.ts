import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _loadScripts: LoadScriptsService) { 
    // _loadScripts.load(this.filesScripsts);
    // _loadScripts.loadLinks(this.filesLinks);
  }

  ngOnInit(): void {
  }

}
