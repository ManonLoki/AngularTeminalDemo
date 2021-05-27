/*
 * @Author: your name
 * @Date: 2021-05-27 11:05:48
 * @LastEditTime: 2021-05-27 16:51:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/components/dashboard.component.ts
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TransactionsService } from '../services/transactions.service';
import { SparklineService } from '../services/sparkline.service';
import { ServerUtilizationService } from '../services/server-utilization.service';
import { ProcessManagerService } from '../services/process-manager.service';

@Component({
  selector: 'pl-3-dashboard',
  template: `
    <grid rows="12" cols="12">
      <line
        [row]="0"
        [col]="0"
        [rowSpan]="3"
        [colSpan]="3"
        label="Total Transactions"
        [data]="transactions$ | async"
      >
      </line>
      <bar
        [row]="0"
        [col]="3"
        [rowSpan]="3"
        [colSpan]="3"
        label="Server Utilization (%)"
        [barWidth]="4"
        [barSpacing]="6"
        [xOffset]="3"
        [maxHeight]="9"
        [data]="serversUtilization$ | async"
      >
      </bar>
      <line
        [row]="0"
        [col]="6"
        [rowSpan]="6"
        [colSpan]="6"
        label="Total Transactions"
        [data]="transactions$ | async"
      >
      </line>
      <table
        [row]="3"
        [col]="0"
        [rowSpan]="3"
        [colSpan]="6"
        fg="green"
        label="Active Processes"
        [keys]="true"
        [columnSpacing]="1"
        [columnWidth]="[28, 20, 20]"
        [data]="process$ | async"
      ></table>
      <map
        [row]="6"
        [col]="0"
        [rowSpan]="6"
        [colSpan]="9"
        label="Servers Location"
      >
      </map>
      <sparkline
        row="6"
        col="9"
        rowSpan="6"
        colSpan="3"
        label="Throughput (bits/sec)"
        [tags]="true"
        [style]="{ fg: 'blue', titleFg: 'white', border: {} }"
        [data]="sparkline$ | async"
      >
      </sparkline>
    </grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  transactions$ = this.transactionsService.transactions$;
  sparkline$ = this.sparklineService.sparkline$;
  serversUtilization$ = this.serversUtilization.serversUtilization$;
  process$ = this.processManager.process$;

  constructor(
    private transactionsService: TransactionsService,
    private sparklineService: SparklineService,
    private serversUtilization: ServerUtilizationService,
    private processManager: ProcessManagerService
  ) {}
}
