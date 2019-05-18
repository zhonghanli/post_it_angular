import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Postdata } from '../postdata';
import { PostService } from '../post.service';

@Component({
  selector: 'app-reactive-post-form',
  templateUrl: './reactive-post-form.component.html',
  styleUrls: ['./reactive-post-form.component.css']
})
export class ReactivePostFormComponent{
  constructor(private postService : PostService){}
  postData = new FormGroup({
    title : new FormControl(''),
    content : new FormControl('')
  })

  onSubmit() {
    console.log(this.postData.value);
    this.postService.createPost(this.postData.value);
  }
}
