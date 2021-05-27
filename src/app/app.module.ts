/*
 * @Author: your name
 * @Date: 2021-05-27 10:38:19
 * @LastEditTime: 2021-05-27 11:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/app.module.ts
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TransactionsService } from './transactions.service';

import { SparklineService } from './sparkline.service';
import { ServerUtilizationService } from './server-utilization.service';
import { ProcessManagerService } from './process-manager.service';
import { DashboardComponent } from './components/dashboard.component';
import { PlainTextComponent } from './components/pain-text.component';
import { TextInBoxComponent } from './components/text-inbox';
import { TerminalModule } from './teminal/teminal.module';

@NgModule({
  declarations: [
    AppComponent,
    PlainTextComponent,
    TextInBoxComponent,
    DashboardComponent,
  ],
  imports: [TerminalModule, CommonModule],
  providers: [
    TransactionsService,
    SparklineService,
    ServerUtilizationService,
    ProcessManagerService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
