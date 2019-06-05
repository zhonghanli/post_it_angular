import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Postdata} from '../postdata';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'; 


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Observable<Postdata[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.posts; 
    this.postService.getPosts();
  }

  deletePost(post : Postdata){
    console.log(post.id+" clicked.")
    this.postService.deletePost(post).subscribe(() =>{
      this.posts= this.posts.pipe(map(items => items.filter(x=>{return x.id != post.id})));
    });
  }
}
