import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconsModule } from '@shared/components';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { DocumentListModule } from '../document-list/document-list.module';
import { DocumentService } from '../services/document.service';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,

    FaIconsModule,
    DocumentListModule,

    NzButtonModule,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule,
    NzSpinModule,
    NzSpaceModule,
    NzTypographyModule,

    HomePageRoutingModule
  ],
  providers: [
    DocumentService
  ]
})
export class HomePageModule { }
