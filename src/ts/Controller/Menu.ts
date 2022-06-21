import Controller from './Controller';
import MenuEvent from './Event/MenuEvent';

import MenuComponent from '../View/MenuComponent';

import { selector } from '../util/const';
import MenuCounter from './MenuCounterEvent';

const handleMenuClick = (event: MouseEvent) => {
  if (!event.target) return;

  const button = event.target as Element;

  if (button.id === 'menu-remove-button') {
    const menuName = button.closest('li')?.querySelector('#menu-name');
    if (confirm(`${menuName?.textContent} 품목을 삭제하시겠습니까?`)) {
      button.closest('#menu-list-item')?.remove();
      MenuCounter.of().change(event.target as HTMLUListElement);
      return;
    }
  }

  if (button.id === 'menu-edit-button') {
    const menuName = button.closest('li')?.querySelector('#menu-name');
    if (menuName) {
      menuName.textContent = prompt('수정사항을 적어주세요', String(menuName.textContent));
      return;
    }
  }
};
class Menu extends Controller {
  private readonly menuAddEvents: Array<EventProperty> = [
    {
      eventTarget: this.menuSubmitForm,
      eventType: 'submit',
      eventFunction: this.handleSubmit,
    },
    {
      eventTarget: this.menuSubmitInput,
      eventType: 'keydown',
      eventFunction: this.handleKeyboard,
    },
    {
      eventTarget: this.menuSubmitButton,
      eventType: 'click',
      eventFunction: this.handleSubmitClick,
    },
  ];
  private menuComponent;
  private menuEvent;

  constructor() {
    super();
    this.menuComponent = new MenuComponent();
    this.menuEvent = new MenuEvent(this.menuAddEvents);
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
  }

  handleKeyboard(event: KeyboardEvent) {
    this.menuSubmitInput = selector('#menu-name') as HTMLInputElement;
    this.menuList = selector('#menu-list') as HTMLUListElement;
    this.menuComponent = new MenuComponent();

    if (this.menuSubmitInput.value.trim() === '') return; // TODO: Domain 분리

    if (event.key !== 'Enter') return;

    this.menuComponent.mount(this.menuList, this.menuSubmitInput.value);
    this.menuComponent.initMenuName(this.menuSubmitInput);

    // const menu = Array.from(selectorAll('#menu-name'))
    //   .filter((node) => node.textContent === value)
    //   .pop() as HTMLSpanElement;

    this.menuList.addEventListener('click', handleMenuClick);
  }

  handleSubmitClick(event: MouseEvent) {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const button = event.target;

    this.menuSubmitInput = selector('#menu-name') as HTMLInputElement;
    this.menuList = selector('#menu-list') as HTMLUListElement;
    this.menuComponent = new MenuComponent();

    if (button.id === 'menu-submit-button') {
      if (this.menuSubmitInput.value === '') return; // TODO: Domain 분리

      this.menuComponent.mount(this.menuList, this.menuSubmitInput.value);
      this.menuComponent.initMenuName(this.menuSubmitInput);

      this.menuList.addEventListener('click', handleMenuClick);
    }
  }

  // handleMenuClick(event: MouseEvent) {
  //   if (!event.target) return;

  //   const button = event.target as Element;

  //   if (button.id === 'menu-remove-button') {
  //     const menuName = button.closest('li')?.querySelector('#menu-name');
  //     if (confirm(`${menuName?.textContent} 품목을 삭제하시겠습니까?`)) {
  //       button.closest('#menu-list-item')?.remove();
  //       MenuCounter.of().change(this.menuList);
  //       return;
  //     }
  //   }

  //   if (button.id === 'menu-edit-button') {
  //     const menuName = button.closest('li')?.querySelector('#menu-name');
  //     if (menuName) {
  //       menuName.textContent = prompt('수정사항을 적어주세요', String(menuName.textContent));
  //       return;
  //     }
  //   }
  // }
}

export default Menu;
