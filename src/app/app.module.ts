import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateCoinComponent} from './component/coin/create-coin/create-coin.component';
import {CoinListComponent} from './component/coin/list-coin/coin-list.component';
import { AddMarketComponent } from './component/market/add-market/add-market.component';
import { MarketListComponent } from './component/market/market-list/market-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoinComponent,
    CoinListComponent,
    AddMarketComponent,
    MarketListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
