import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ErrorSearchService {

  
  constructor(private http: HttpClient) { }

  getTagByTagName(tag: any): Observable<any> {
    console.log('Request is sent!');
    let url = environment.wordpress_server + "/tags?slug=" + tag;
    return this.http.get(url);
  }

  getContentTagName(tagId: number): Observable<any> {
    console.log('Request is sent!');
    let url = environment.wordpress_server + "/posts?tags=" + tagId;
    return this.http.get(url);
  }

  getContentTagNameLambda(tagId: string): Observable<any> {
    console.log('Request is sent!');
    let url = environment.lambda_api + "?tags=" + tagId;
    return this.http.get(url);
  }

  getContentFromLambda(channel: string, application: string, module: string, tagIds: string[]): Observable<any> {
    console.log('Request is sent!');
    // let url = environment.lambda_api + "?tags=" + tagId;

    let url = environment.lambda_post_api;
    var body = 
      {
        "application": application,
        "channel": channel,
        "module": module,
        "tags": tagIds
      }
    
    return this.http.post(url, body);
  }
}
