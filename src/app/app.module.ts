/*
 * @Author: your name
 * @Date: 2021-05-27 10:38:19
 * @LastEditTime: 2021-05-27 16:54:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/app.module.ts
 */
import { TransactionsService } from './services/transactions.service';
import { SparklineService } from './services/sparkline.service';
import { ServerUtilizationService } from './services/server-utilization.service';
import { ProcessManagerService } from './services/process-manager.service';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

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
  providers: [
    ProcessManagerService,
    ServerUtilizationService,
    SparklineService,
    TransactionsService,
  ],
  imports: [TerminalModule, CommonModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
