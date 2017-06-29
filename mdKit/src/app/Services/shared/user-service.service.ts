import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

private urlToGet = 'http://localhost:42713/api/product';  // URL to web API

  constructor(private http : Http) { 

  }

 getData(){
    this.http.get(this.urlToGet)
    .subscribe(
      (res : Response) => {
        console.log(res.json());
      }
    );
           

}

  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body.data || { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
