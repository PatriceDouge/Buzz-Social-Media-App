import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  
  constructor() { }

  ngOnInit() {
    //this.posts$= "{\"user\": {\"username\": \"kelkft\",\"firstName\": \"Kelvin\",\"lastName\": \"Ferreiras\"},\"content\": {\"text\": \"Hello World\"},\"details\": {\"date\": \"2018-06-25T00:00:00.000Z\"}}"
    this.posts$= [
      {"user": {"username": "kelkft","firstName": "Kelvin","lastName": "Ferreiras"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-06-28T00:00:00.000Z"}},
      {"user": {"username": "hjotot","firstName": "John","lastName": "Doe"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-07-11T00:00:00.000Z"}},
      {"user": {"username": "kfkkfk","firstName": "Jane","lastName": "Doe"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-08-12T00:00:00.000Z"}},
      {"user": {"username": "hdfood","firstName": "Charlie","lastName": "Brown"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-09-13T00:00:00.000Z"}},
      {"user": {"username": "gjkfkfo","firstName": "Hommer","lastName": "Simpson"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-03-25T00:00:00.000Z"}},
      {"user": {"username": "kfkkfkf","firstName": "Jose","lastName": "Perez"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-05-21T00:00:00.000Z"}},
      {"user": {"username": "uuyutur","firstName": "Maria","lastName": "Jones"},"content": {"text": "Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World"},"details": {"date": "2018-09-01T00:00:00.000Z"}}
    ]

  }

}
