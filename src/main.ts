/*
 * @Author: your name
 * @Date: 2021-05-27 10:38:19
 * @LastEditTime: 2021-05-27 15:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/main.ts
 */

import { AppModule } from './app/app.module';
import { platformTerminalDynamic } from './app/teminal/platform';

platformTerminalDynamic()
  .bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
