import Controller from './Controller';

import { selector } from '../util/const';

// TODO: Domain 분리
class MenuCounter extends Controller {
  private readonly menuCount = selector('#menu-count') as HTMLSpanElement;

  constructor() {
    super();
  }

  static of() {
    return new MenuCounter();
  }

  change(menuList: HTMLUListElement) {
    const reg = /[0-9]/g;

    this.menuCount.textContent &&
      (this.menuCount.textContent = this.menuCount.textContent?.replace(reg, String(menuList.children.length)));
  }
}

export default MenuCounter;
