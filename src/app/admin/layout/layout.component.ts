import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  public sidemenuOpen = true;
  public classSidemenu:any;
  public classContent:any;
  public headerMenuItem : MenuItem[];
  public user = 'Hi, User'
  
  constructor(
    private router : Router
  ) 
  {
    console.log(window.innerWidth)
    if (window.innerWidth<=480){
      this.sidemenuOpen = false;
      this.classSidemenu = 'sidemenu-close';
      this.classContent = 'content-full';
    }else{
      this.classSidemenu = 'sidemenu-open';
      this.classContent = 'content-normal';
    }

    this.headerMenuItem = [
      {
        items : [
          {
            label   : 'Profil', 
            icon    : 'pi pi-user'
          },{
            label   : 'Setting', 
            icon    : 'pi pi-cog'
          },{
            label   : 'Logout', 
            icon    : 'pi pi-sign-out',
            command : () => {
              this.onSignOut();
            }
          }
        ]
      }
      
    ];
  }

  ngOnInit(): void {
    
  }

  onMenuToggle(){
    this.sidemenuOpen = !this.sidemenuOpen;

    if (window.innerWidth<=480){
      if(this.sidemenuOpen){
        this.classSidemenu = 'sidemenu-overlay';
        this.classContent = 'content-full';
      }else{
        this.classSidemenu = 'sidemenu-close';
        this.classContent = 'content-full';
      }
    }else{
      if(this.sidemenuOpen){
        this.classSidemenu = 'sidemenu-open';
        this.classContent = 'content-normal';
      }else{
        this.classSidemenu = 'sidemenu-minimize';
        this.classContent = 'content-wide';
      }
    }
  }

  onSignOut(){
    // alert('Logout')
    this.router.navigate(['/login'])
  }

}

