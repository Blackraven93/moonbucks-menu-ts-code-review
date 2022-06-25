import Controller from './Controller';
import MenuEvent from './Event/MenuEvent';

import MenuComponent from '../View/MenuComponent';

import { selector, selectorAll } from '../util/const';
import MenuCounter from './MenuCounterEvent';

class Menu extends Controller {
  // private menuEvents: Array<EventProperty> = [];
  // private menuEvent: MenuEvent;
  private menuComponent;
  // private menuEvent;

  constructor() {
    super();
    // this.menuEvents = [
    //   ...this.menuEvents,
    //   {
    //     eventAction: 'create',
    //     eventTarget: this.menuSubmitInput,
    //     eventType: 'keyup',
    //     eventFunction: this.handleSubmitKeyboard.bind(this),
    //   },
    //   {
    //     eventAction: 'create',
    //     eventTarget: this.menuSubmitButton,
    //     eventType: 'click',
    //     eventFunction: this.handleSubmitClick.bind(this),
    //   },
    // ];
    this.menuComponent = new MenuComponent();
    // this.menuEvent = new MenuEvent(this.menuEvents);
    this.menuSubmitInput.addEventListener('keyup', this.handleSubmitKeyboard);
    this.menuSubmitButton.addEventListener('click', this.handleSubmitClick);
  }

  handleSubmitKeyboard = (event: KeyboardEvent) => {
    this.menuSubmitInput = selector('#menu-name-input') as HTMLInputElement;
    this.menuList = selector('#menu-list') as HTMLUListElement;
    this.menuComponent = new MenuComponent();

    if (this.menuSubmitInput.value.trim() === '') return; // TODO: Domain 분리

    if (event.key !== 'Enter') return;

    //FIXME: 중복 제거

    if (this.menuList.children.length !== 0) {
      if (
        Array.from(selectorAll('#menu-name'))
          .map((element) => element.textContent)
          .some((text) => text === this.menuSubmitInput.value)
      ) {
        alert('중복된 이름이 있습니다.');
        return;
      }
    }

    this.menuComponent.mount(this.menuList, this.menuSubmitInput.value);
    this.menuComponent.initMenuName(this.menuSubmitInput);
    console.log(this.menuList);
    this.menuList.addEventListener('click', this.handleMenuClick);

    // this.menuEvent.push([
    //   {
    //     eventAction: ['update', 'delete'],
    //     eventTarget: this.menuList,
    //     eventType: 'click',
    //     eventFunction: this.handleMenuClick.bind(this),
    //   },
    // ]);
  };

  handleSubmitClick = (event: MouseEvent) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const button = event.target;

    this.menuSubmitInput = selector('#menu-name-input') as HTMLInputElement;
    this.menuList = selector('#menu-list') as HTMLUListElement;
    this.menuComponent = new MenuComponent();

    if (button.id === 'menu-submit-button') {
      if (this.menuSubmitInput.value === '') return; // TODO: Domain 분리

      this.menuComponent.mount(this.menuList, this.menuSubmitInput.value);
      this.menuComponent.initMenuName(this.menuSubmitInput);

      console.log(this.menuList);
      if (this.menuList.children.length !== 0) {
        if (
          Array.from(selectorAll('#menu-name'))
            .map((element) => element.textContent)
            .some((text) => text === this.menuSubmitInput.value)
        ) {
          alert('중복된 이름이 있습니다.');
          return;
        }
      }

      this.menuList.addEventListener('click', this.handleMenuClick);
      // this.menuEvent.push([
      //   {
      //     eventAction: ['update', 'delete'],
      //     eventTarget: this.menuList,
      //     eventType: 'click',
      //     eventFunction: this.handleMenuClick.bind(this),
      //   },
      // ]);
    }
  };

  handleMenuClick = (event: MouseEvent) => {
    console.log(event);
    if (!event.target) return;

    const button = event.target as Element;

    if (button.id === 'menu-remove-button') {
      console.log(event.target);
      const menuName = button.closest('li')?.querySelector('#menu-name');
      if (confirm(`${menuName?.textContent} 품목을 삭제하시겠습니까?`)) {
        button.closest('#menu-list-item')?.remove();
        MenuCounter.of().change(this.menuList);
        return;
      }
    }

    if (button.id === 'menu-edit-button') {
      const menuName = button.closest('li')?.querySelector('#menu-name');
      //FIXME: 중복 제거
      if (menuName) {
        const changedText = prompt('수정사항을 적어주세요', String(menuName.textContent));

        if (
          Array.from(selectorAll('#menu-name'))
            .map((element) => element.textContent)
            .some((text) => text === changedText)
        ) {
          alert('중복된 값이 있습니다.');
          return;
        }

        menuName.textContent = changedText;
        return;
      }
    }
  };
}

export default Menu;
