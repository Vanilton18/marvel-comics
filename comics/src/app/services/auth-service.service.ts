import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthServiceService {

  public URL_BASE = 'http://gateway.marvel.com/v1/public/';
  public PUBLIC_KEY = 'f6402c5405b5fafa9f723fcae30b75b7';
  public PRIVATE_KEY = '';

  constructor() {}
  // hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
  // ts=1&apikey=f6402c5405b5fafa9f723fcae30b75b7&hash=44887a3211e822b6f1d7233e2b29c8ac45946081

   public authHeaderHash(): string {
    const md5 = new Md5();
    const ts = Date.now();
    const hash = md5.appendStr(`${ts.toString()}${this.PRIVATE_KEY}${this.PUBLIC_KEY}`).end();
    const authHeader = `ts=${ts}&apikey=${this.PUBLIC_KEY}&hash=${hash}`;
    return authHeader;
  }

}
