import { Component } from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  myData = 'DATA';

  constructor(private postService: PostService){
    
  }

  ngOnInit(){
  }
  
}
