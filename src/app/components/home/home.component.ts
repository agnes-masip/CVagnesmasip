import { animate, stagger, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
        
    ]),
    trigger('shake',[
      transition('* => *', [
         
            
        animate(1000)
            
      ])
    ])
    
  ]
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  selectedBackend: string = 'Code';
  img1: string = '../../../assets/img/html.png';
  img2: string = '../../../assets/img/css.png';
  img3: string = '../../../assets/img/js.png';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedBackend = event.target.value;
    if(event.target.value == 'Code'){
      this.img1 = '../../../assets/img/html.png';
      this.img2 = '../../../assets/img/css.png';
      this.img3 = '../../../assets/img/js.png';
    }else if(event.target.value == 'Deployment'){
      this.img1 = '../../../assets/img/react.jpg';
      this.img2 = '../../../assets/img/html.png';
      this.img3 = '../../../assets/img/js.png';
    }else if(event.target.value == 'Databases'){
      this.img1 = '../../../assets/img/html.png';
      this.img2 = '../../../assets/img/react.jpg';
      this.img3 = '../../../assets/img/js.png';
    }else if(event.target.value == 'Documentation'){
      this.img1 = '../../../assets/img/html.png';
      this.img2 = '../../../assets/img/sagma.png';
      this.img3 = '../../../assets/img/upcrwth.png';
    }else if(event.target.value == 'Testing'){
      this.img1 = '../../../assets/img/js.png';
      this.img2 = '../../../assets/img/angular.jpg';
      this.img3 = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}


