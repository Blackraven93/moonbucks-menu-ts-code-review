import '../css/index.css';

import Item from './View/Item';

import { selector } from './util/const';
import menuItemTemplate from './View/Item';

const init = () => {
  const menuAppendForm = selector('#espresso-menu-form') as HTMLFormElement;
  const menuAppendInput = selector('#espresso-menu-name') as HTMLInputElement;
  const menuAppendButton = selector(
    '#espresso-menu-submit-button'
  ) as HTMLButtonElement;
  const menuList = selector('#espresso-menu-list') as HTMLUListElement;

  const isEmpty = (): Boolean => {
    return menuAppendInput.value.trim() === '' ? true : false;
  };

  const menuSubmitHandler = (event: Event) => {
    event.preventDefault();
  };

  const menuKeyboardHandler = (event: KeyboardEvent) => {
    if (menuAppendInput.value === '') return;

    if (event.key === 'Enter') {
      // validation 체크하기 (null 값인지 아닌지)
      menuList.innerHTML += menuItemTemplate(menuAppendInput.value);
      menuAppendInput.value = '';

      // event 추가
    }
  };

  const menuClickHandler = (event: MouseEvent) => {
    if (menuAppendInput.value === '') return;

    menuList.innerHTML += menuItemTemplate(menuAppendInput.value);
    menuAppendInput.value = '';

    // event 추가
  };

  menuAppendForm?.addEventListener('submit', menuSubmitHandler);
  menuAppendInput?.addEventListener('keyup', menuKeyboardHandler);
  menuAppendButton?.addEventListener('click', menuClickHandler);
};

init();

/** Event type 종류
 * MouseEvent, TouchEvent, FocusEvent, KeyboardEvent, WheelEvent, InputEvent, and CompositionEvent.
 */
