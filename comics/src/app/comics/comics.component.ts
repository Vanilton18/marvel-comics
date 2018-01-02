import { ComicsService } from './../services/comics.service';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsService: ComicsService) { }

  public comics = {};

  public getAllComics() {
    this.comicsService.getComics().subscribe(response => {
      this.comics = response;
      return this.comics;
    },
    (errors) => {
      console.error(errors);
    });
  }

  ngOnInit() {
    this.getAllComics();
  }

  public listComics() {
    return this.comics.data.results;
  }

}
