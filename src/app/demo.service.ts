import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class DemoService {
    user = { id : 1, name : 'Hello'};

     constructor(private http: HttpClient) { }

     postData(formDetails:any){
        console.log('Demo Service is Executing');
        
    //     this.http.post('http://localhost:3000/api/upload', JSON.stringify(this.user)
    // .subscribe((response) => {
    //      console.log('response received is ', response);
    // })

    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');


    // this.http.post('http://localhost:3000/api/upload', JSON.stringify(this.user), {
    //     headers: headers
    //   })
    //   .subscribe(data => {
    //     console.log(data);
    //   });

      this.http.post('http://localhost:3000/api/user-ins', JSON.stringify(formDetails), {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });



        console.log('Demo Service is Terminating');
     }

     getData(){
       
      this.http.get('http://localhost:3000/api/user-ret')
      .subscribe(data => {
        console.log('retreiving users...');
        console.log(data);
      });


     }

     

}