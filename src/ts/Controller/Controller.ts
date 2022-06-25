import { selector } from '../util/const';

abstract class Controller {
  protected menuSubmitForm = selector('#menu-form') as HTMLDivElement;
  protected menuSubmitInput = selector('#menu-name-input') as HTMLInputElement;
  protected menuSubmitButton = selector('#menu-submit-button') as HTMLButtonElement;
  protected menuList = selector('#menu-list') as HTMLUListElement;
}

export default Controller;
