import { Component, Input } from '@angular/core';
import {Postdata} from '../postdata';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() postdata : Postdata;
  constructor() { }
}
