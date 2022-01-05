import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesScripsts = [
    'https://www.googletagmanager.com/gtag/js?id=UA-119386393-1',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    '../../assets/vendors/scripts/core.js',

    '../../assets/vendors/scripts/script.min.js',

    '../assets/vendors/scripts/process.js',
    '../../assets/vendors/scripts/layout-settings.js',
    '../../assets/plugins/apexcharts/apexcharts.min.js',
    '../../assets/plugins/datatables/js/jquery.dataTables.min.js',
    '../../assets/plugins/datatables/js/dataTables.bootstrap4.min.js',
    '../../assets/plugins/datatables/js/dataTables.responsive.min.js',
    '../../assets/plugins/datatables/js/responsive.bootstrap4.min.js',
    '../../assets/vendors/scripts/dashboard3.js'
  ];

  filesLinks = [
    {
      rel: 'stylesheet',
      type: '',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'  
    },
    {
      rel: '',
      type: 'text/css',
      href: '../../../assets/vendors/styles/core.css'  
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '../../../assets/vendors/styles/icon-font.min.css'  
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '../../../assets/plugins/datatables/css/dataTables.bootstrap4.min.css'  
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '../../../assets/plugins/datatables/css/responsive.bootstrap4.min.css'  
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '../../../assets/vendors/styles/style.css'  
    },
  ];

  constructor(private _loadScripts: LoadScriptsService) { 
    _loadScripts.load(this.filesScripsts);
    _loadScripts.loadLinks(this.filesLinks);
  }

  ngOnInit(): void {
  }

}
