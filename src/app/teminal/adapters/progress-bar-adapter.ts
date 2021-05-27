/*
 * @Author: your name
 * @Date: 2021-05-27 10:47:00
 * @LastEditTime: 2021-05-27 11:12:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/adapters/progress-bar-adapter.ts
 */
/*
 * @Author: your name
 * @Date: 2021-05-27 10:47:00
 * @LastEditTime: 2021-05-27 10:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/adapter/progress-bar-adapter.ts
 */
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

export function progressBarFactory(
  options?: Widgets.ProgressBarOptions
): Widgets.BlessedElement {
  const progressbar: Widgets.ProgressBarElement = blessed.progressbar(options);
  return new Proxy(progressbar, {
    set(target: any, prop, value) {
      if (prop === 'filled') {
        target.setProgress(value);
      } else {
        target[prop] = value;
      }
      return true;
    },
  });
}
