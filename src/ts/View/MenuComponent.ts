import MenuCounter from '../Controller/MenuCounterEvent';

import View from './View';

class MenuComponent extends View {
  // private menuSubmitForm = selector('#menu-form') as HTMLFormElement;
  // private menuSubmitInput = selector('#menu-name') as HTMLInputElement;
  // private menuSubmitButton = selector('#menu-submit-button') as HTMLButtonElement;

  // menuList.innerHTML += MenuComponent.menuItemTemplate(menuSubmitInput.value);
  // menuSubmitInput.value = '';

  render(name: string) {
    return String.raw`
      <li id="menu-list-item" class="menu-list-item d-flex items-center py-2">
      <span id="menu-name" class="w-100 pl-2 menu-name">${name}</span>
      <button
        id="menu-edit-button"
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        id="menu-remove-button"
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
  `;
  }

  mount(element: HTMLUListElement, name: string) {
    element.innerHTML += this.render(name);
    MenuCounter.of().change(element);
  }

  initMenuName(element: HTMLInputElement) {
    element.value = '';
  }
}

export default MenuComponent;
