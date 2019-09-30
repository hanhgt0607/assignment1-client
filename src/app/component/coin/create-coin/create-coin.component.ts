import {Component, OnInit} from '@angular/core';
import {CoinService} from '../coin.service';
import {Observable} from 'rxjs';
import {Coin} from 'src/app/model/coin';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css']
})
export class CreateCoinComponent implements OnInit {
  coin: Coin = {
    name: '',
    lastPrice: '',
    baseAsset: '',
    quoteAsset: '',
    volumn24h: '',
    createdAtMLS: 0,
    id: 0,
    marketId: 0,
    updatedAtMLS: 0,
    status: 0
  };

  constructor(
    private coinService: CoinService
  ) {
  }

  onSubmit() {
    this.coinService.addCoin(this.coin).subscribe();
  }

  ngOnInit() {
  }


}
