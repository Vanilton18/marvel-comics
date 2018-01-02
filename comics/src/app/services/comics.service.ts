import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ComicsService {

  constructor(
    private authServiceService: AuthServiceService,
    private httpClient: HttpClient
  ) { }

  public getComics() {
    return this.httpClient.get(`${this.authServiceService.URL_BASE}comics?${this.authServiceService.authHeaderHash()}`);
  }

}
