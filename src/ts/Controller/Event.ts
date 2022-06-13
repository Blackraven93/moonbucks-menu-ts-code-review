import { selector } from '../util/const';
import {
  menuSubmitHandler,
  menuKeyboardHandler,
  menuClickHandler,
} from './Menu';

class Event {
  constructor() {}

  init() {
    const menuAppendForm = selector('#espresso-menu-form') as HTMLFormElement;
    const menuAppendInput = selector('#espresso-menu-name') as HTMLInputElement;
    const menuAppendButton = selector(
      '#espresso-menu-submit-button'
    ) as HTMLButtonElement;

    menuAppendForm?.addEventListener('submit', menuSubmitHandler);
    menuAppendInput?.addEventListener('keyup', menuKeyboardHandler);
    menuAppendButton?.addEventListener('click', menuClickHandler);
  }
}

export { Event };
