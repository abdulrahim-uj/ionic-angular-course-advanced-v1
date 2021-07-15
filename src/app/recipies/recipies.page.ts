import { Component, OnDestroy, OnInit } from '@angular/core';

import { RecipiesService } from './recipies.service';
import { Recipie } from './recipie.model';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit, OnDestroy {

  rs_recipies: Recipie[];

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit() {
    console.log("This is ngOnInit");
    console.log(this.rs_recipies);
  }

  ionViewWillEnter() {
    this.rs_recipies = this.recipiesService.getAllRecipies();
    console.log("This is ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("This is ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("This is ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("This is ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("This is ngOnDestroy");
  }

}
