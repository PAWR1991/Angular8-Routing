import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubs: Subscription;
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //param Obs
    //When you are already in this component(not reloaded) and make changes to the same url with different param data
    //This is the safes way to make sure that angular refects the changes to the url to the DOM
    this.paramsSubs = this.route.params.subscribe((params:Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
  /**
   * For Routes, Angular already does this but 
   * if you create your own Observables then
   * you have to unsubscribe from it
   */
  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe();
  }



}
