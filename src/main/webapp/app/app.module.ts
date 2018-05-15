import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { EsperasentadoSharedModule, UserRouteAccessService } from './shared';
import { EsperasentadoAppRoutingModule} from './app-routing.module';
import { EsperasentadoHomeModule } from './home/home.module';
import { EsperasentadoAdminModule } from './admin/admin.module';
import { EsperasentadoAccountModule } from './account/account.module';
import { EsperasentadoEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        EsperasentadoAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EsperasentadoSharedModule,
        EsperasentadoHomeModule,
        EsperasentadoAdminModule,
        EsperasentadoAccountModule,
        EsperasentadoEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EsperasentadoAppModule {}
