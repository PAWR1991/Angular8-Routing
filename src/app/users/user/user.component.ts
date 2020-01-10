import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //param Obs
    //When you are already in this component and make changes to the same url with different param data
    //This is the safes way to make sure that angular refects the changes to the url to the DOM
    this.route.params.subscribe((params:Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

}
