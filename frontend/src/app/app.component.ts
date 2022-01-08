import { Component } from '@angular/core';
import { LoadScriptsService } from './services/load-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  filesScripsts = [
    '../../../assets/vendor/jquery/jquery.min.js',
    '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '../../../assets/vendor/jquery-easing/jquery.easing.min.js',
    '../../../assets/js/sb-admin-2.min.js',
    '../../../assets/vendor/chart.js/Chart.min.js',
    '../../../assets/js/demo/chart-area-demo.js',
    '../../../assets/js/demo/chart-pie-demo.js',
  ];

  filesLinks = [
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '../../../assets/vendor/fontawesome-free/css/all.min.css'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'  
    },
    {
      rel: 'stylesheet',
      type: '',
      href: '../../../assets/css/sb-admin-2.min.css'  
    }

  ];

  constructor(private _loadScripts: LoadScriptsService) { 
    _loadScripts.load(this.filesScripsts);
    _loadScripts.loadLinks(this.filesLinks);
  }


}
