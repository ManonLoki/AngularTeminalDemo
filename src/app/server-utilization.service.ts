/*
 * @Author: your name
 * @Date: 2021-05-27 11:03:21
 * @LastEditTime: 2021-05-27 11:03:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/server-utilization.service.ts
 */
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const servers = ['US1', 'US2', 'EU1', 'AU1'];

function getServersUtilization() {
  const arr = [];
  for (let i = 0; i < servers.length; i++) {
    arr.push(Math.round(Math.random() * 10));
  }
  return { titles: servers, data: arr };
}

@Injectable()
export class ServerUtilizationService {
  readonly serversUtilization$: Observable<any> = interval(750).pipe(
    map(() => getServersUtilization())
  );
}
