import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mStorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router, private mStorageService: mStorageService) { }
  
  ngOnInit() {
    //alert(this.router.url); 
    //this.logged = this.mStorageService.isLogged();

  }

  
  logout() {
    //this.mStorageService.removeLocalStorage();
    //this.router.navigate(['']);
  }
}
