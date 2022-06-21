import { selector } from '../util/const';

abstract class Controller {
  protected menuSubmitForm = selector('#menu-form') as HTMLFormElement;
  protected menuSubmitInput = selector('#menu-name') as HTMLInputElement;
  protected menuSubmitButton = selector('#menu-submit-button') as HTMLButtonElement;
  protected menuList = selector('#menu-list') as HTMLUListElement;
}

export default Controller;
