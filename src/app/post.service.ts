import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postdata } from './postdata';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _posts : BehaviorSubject<Postdata[]>;
  private Store:{
    posts : Postdata[];
  }

  constructor(private http: HttpClient) {
    this._posts= <BehaviorSubject<Postdata[]>>new BehaviorSubject([]);
    this.Store={
      posts : []
    }
  }
  
  get posts(){
    return this._posts.asObservable();
  }

  getPosts(){
    return this.http.get<Postdata[]>("http://localhost:8080/posts").subscribe(
      (res)=>{
        this.Store.posts = res;
        this._posts.next(Object.assign({},this.Store).posts);
      }, error => console.log('Error in loading Posts')
      );
  } 

  deletePost(post : Postdata){
    console.log("attempting to delete: " + post.id)
    return this.http.post("http://localhost:8080/deletepost", post);
  }   

  createPost(post : Postdata){
    return this.http.post("http://localhost:8080/createpost", post).subscribe(
      (res : Postdata)=>{
        this.Store.posts.push(res);
        this._posts.next(Object.assign({},this.Store).posts);
      }
    );
  }
}
