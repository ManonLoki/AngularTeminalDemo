/*
 * @Author: your name
 * @Date: 2021-05-27 10:38:19
 * @LastEditTime: 2021-05-27 11:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/app.component.ts
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pl-root',
  template: `
    <!-- <pl-1-plain-text></pl-1-plain-text> -->
    <!-- <pl-2-text-in-box></pl-2-text-in-box>  -->
    <pl-3-dashboard></pl-3-dashboard>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
