import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Postdata} from '../postdata';
import { Observable } from 'rxjs';


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
    this.posts = this.postService.getPosts();
    console.log(this.posts)
  }

  deletePost(post : Postdata){
    // console.log(post.id+" clicked.")
    // this.posts= this.posts.filter(x=>{return x.id != post.id});
    // this.postService.deletePost(post);
  }

  // createPost(post: Postdata){
  //   this.postService.createPost(post);
  // }
}
