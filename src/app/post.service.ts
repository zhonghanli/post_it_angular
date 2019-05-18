import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postdata } from './postdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts : Postdata[];

  constructor(private http: HttpClient) {

  }

  getPosts() : Observable<Postdata[]>{
    return this.http.get<Postdata[]>("http://localhost:8080/posts");
  } 

  deletePost(post : Postdata){
    console.log("attempting to delete: " + post.id)
    return this.http.post("http://localhost:8080/deletepost", post).subscribe();
  }   

  createPost(post : Postdata){
    return this.http.post("http://localhost:8080/createpost", post).subscribe((res : Postdata) => {
      
    });
  }
}
