import * as blessed from 'blessed';
import { Widgets } from 'blessed';

export function listFactory(
  options?: Widgets.ListOptions<Widgets.ListElementStyle>
): Widgets.BlessedElement {
  const list: Widgets.ListElement = blessed.list(options);
  return new Proxy(list, {
    set(target: any, prop, value) {
      if (prop === 'items') {
        target.setItems(value);
      } else {
        target[prop] = value;
      }
      return true;
    },
  });
}
