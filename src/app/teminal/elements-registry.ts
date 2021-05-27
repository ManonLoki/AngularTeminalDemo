/*
 * @Author: your name
 * @Date: 2021-05-27 10:50:16
 * @LastEditTime: 2021-05-27 10:56:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/elements-registy.ts
 */
import * as blessed from 'blessed';
import { Widgets } from 'blessed';
import * as contrib from 'blessed-contrib';

import { gridFactory } from './adapters/grid-adapter';
import { deferredElement } from './adapters/deferred';

export type ElementFactory = (a: any) => Widgets.BoxElement;

export const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('text', blessed.text)
  .set('box', blessed.box)
  .set('table', blessed.table)
  .set('line', deferredElement(contrib.line))
  .set('sparkline', deferredElement(contrib.sparkline))
  .set('bar', deferredElement(contrib.bar))
  .set('table', deferredElement(contrib.table))
  .set('map', deferredElement(contrib.map))
  .set('grid', gridFactory);
