/*
 * @Author: your name
 * @Date: 2021-05-27 11:05:12
 * @LastEditTime: 2021-05-27 11:12:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/components/text-inbox.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'pl-2-text-in-box',
  template: `
    <box top="center" left="center" height="5" width="21" [style]="style">
      <box top="2" left="1" [style]="style"> BOXES ARE BORING! </box>
    </box>
  `,
})
export class TextInBoxComponent {
  style = {
    fg: 'white',
    bg: 'green',
    border: {
      fg: 'red',
    },
  };
}
