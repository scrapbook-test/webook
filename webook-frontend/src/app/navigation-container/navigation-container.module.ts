import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaIconsModule } from '@shared/components';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { NavigationContainerComponent } from './navigation-container.component';

@NgModule({
  declarations: [NavigationContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    FaIconsModule,
    FormsModule,

    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzPopoverModule,
  ],
  exports: [NavigationContainerComponent],
})
export class NavigationContainerModule { }
