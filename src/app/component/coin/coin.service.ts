import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ApiResult} from '../../model/api-result';
import {Coin} from '../../model/coin';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) {
  }

  CONST_API_URL = environment.apiHost + '/api/coin';

  getList(): Observable<ApiResult<Coin[]>> {
    return this.http.get(this.CONST_API_URL).pipe(
      map(response => {
        return response as ApiResult<Coin[]>;
      })
    );
  }

  findByMarketId(marketId: number): Observable<ApiResult<Coin[]>> {
    return this.http.get(`${this.CONST_API_URL}/marketId/${marketId}`).pipe(
      map(response => {
        return response as ApiResult<Coin[]>;
      })
    );
  }

  findByName(name: string): Observable<ApiResult<Coin[]>> {
    return this.http.get(`${this.CONST_API_URL}/name/${name}`).pipe(
      map(response => {
        return response as ApiResult<Coin[]>;
      })
    );
  }

  addCoin(coin: Coin): Observable<ApiResult<Coin>> {
    return this.http.post(this.CONST_API_URL, coin).pipe(
      map(response => {
        return response as ApiResult<Coin>;
      })
    );
  }
}
