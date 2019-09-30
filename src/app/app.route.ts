import {Routes} from '@angular/router';
import {MarketListComponent} from './component/market/market-list/market-list.component';
import {AddMarketComponent} from './component/market/add-market/add-market.component';
import {CoinListComponent} from './component/coin/list-coin/coin-list.component';
import {CreateCoinComponent} from './component/coin/create-coin/create-coin.component';

export const appRoutes: Routes = [
  {path: 'coin/list', component: CoinListComponent},
  {path: 'coin/add', component: CreateCoinComponent},
  {path: 'market/list', component: MarketListComponent},
  {path: 'market/add', component: AddMarketComponent}
  ];
