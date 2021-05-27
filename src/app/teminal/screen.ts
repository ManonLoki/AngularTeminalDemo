/*
 * @Author: your name
 * @Date: 2021-05-27 10:55:02
 * @LastEditTime: 2021-05-27 10:55:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/screen.ts
 */
import { Injectable } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

import { ElementFactory, elementsFactory } from './elements-registry';

@Injectable()
export class Screen {
  private screen: Widgets.Screen | null = null;

  constructor() {
    this.init();
  }

  createElement(name: string, options: any = {}): Widgets.BoxElement {
    let elementFactory: ElementFactory = elementsFactory.get(name)!;

    if (!elementFactory) {
      elementFactory = elementsFactory.get('box')!;
    }

    return elementFactory({ ...options, screen: this.screen });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen!;
  }

  private init() {
    this.screen = blessed.screen({ smartCSR: true });
    this.setupExitListener();
  }

  private setupExitListener() {
    this.screen!.key(['escape', 'q', 'C-c'], () => process.exit(0));
  }
}
