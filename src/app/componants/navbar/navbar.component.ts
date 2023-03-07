import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  colapse(){
    const colapse = document.getElementById('navbar-default')
    if(colapse?.classList.contains('hidden')==true){
      colapse.classList.add('block')
      colapse.classList.remove('hidden')
    }else{
      colapse?.classList.add('hidden')
      colapse?.classList.remove('block')
    }
    
  }
}
