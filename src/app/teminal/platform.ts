/*
 * @Author: your name
 * @Date: 2021-05-27 10:52:57
 * @LastEditTime: 2021-05-27 14:58:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /terminal-ng-demo/src/app/teminal/platform.ts
 */

// Dependency
import 'zone.js';
import 'core-js';
import 'blessed';
import 'blessed-contrib';

import {
  COMPILER_OPTIONS,
  createPlatformFactory,
  Sanitizer,
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';

import { TerminalElementSchemaRegistry } from './schema-registery';
import { TerminalSanitizer } from './santizer';

const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: TerminalSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        {
          provide: ElementSchemaRegistry,
          useClass: TerminalElementSchemaRegistry,
          deps: [],
        },
      ],
    },
    multi: true,
  },
];

export const platformTerminalDynamic = createPlatformFactory(
  platformCoreDynamic,
  'terminalDynamic',
  [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]
);
