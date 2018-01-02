import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authServiceService: AuthServiceService
  ) { }

  ngOnInit() {
    console.log(this.authServiceService.authHeaderHash());
  }

}
