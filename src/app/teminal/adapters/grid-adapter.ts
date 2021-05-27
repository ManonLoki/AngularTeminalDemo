/*
 * @Author: your name
 * @Date: 2021-05-27 10:46:22
 * @LastEditTime: 2021-05-27 10:48:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/adapter/grid-adapter.ts
 */
import { Widgets } from 'blessed';
import * as contrib from 'blessed-contrib';
import * as BlessedContrib from 'blessed-contrib';
import { Widgets as ContribWidgets } from 'blessed-contrib';

export function gridFactory(
  options?: ContribWidgets.GridOptions
): Widgets.BlessedElement {
  const grid: ContribWidgets.GridElement = new contrib.grid(options!);
  return new Proxy(grid, {
    set(
      target: BlessedContrib.Widgets.GridElement | any,
      p: PropertyKey,
      value: any,
      receiver: any
    ): boolean {
      if (p === 'rows' || p === 'cols') {
        target[p] = +value;
      } else {
        target[p] = value;
      }
      return true;
    },
  });
}
