/*
 * @Author: your name
 * @Date: 2021-05-27 10:52:24
 * @LastEditTime: 2021-05-27 11:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/error-handler.ts
 */

import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class TerminalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    console.error(error.message, error.stack);
    process.exit(0);
  }
}
