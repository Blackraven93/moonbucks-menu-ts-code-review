import { selector } from '../util/const';

import menuItemTemplate from '../View/Item';

const menuAppendForm = selector('#espresso-menu-form') as HTMLFormElement;
const menuAppendInput = selector('#espresso-menu-name') as HTMLInputElement;
const menuAppendButton = selector(
  '#espresso-menu-submit-button'
) as HTMLButtonElement;
const menuList = selector('#espresso-menu-list') as HTMLUListElement;
const menuCount = selector('#menu-count') as HTMLSpanElement;

export const menuSubmitHandler = (event: SubmitEvent) => {
  event.preventDefault();
};

export const menuKeyboardHandler = (event: KeyboardEvent) => {
  if (menuAppendInput.value === '') return;

  if (event.key === 'Enter') {
    // validation 체크하기 (null 값인지 아닌지)
    menuList.innerHTML += menuItemTemplate(menuAppendInput.value);
    menuAppendInput.value = '';

    // 이벤트 바인딩 부분
    changeMenuCount();
    menuList?.addEventListener('click', menuItemHandler);
    return;
  }
};

export const menuClickHandler = (event: MouseEvent) => {
  console.log(event);
  if (menuAppendInput.value === '') return;

  menuList.innerHTML += menuItemTemplate(menuAppendInput.value);
  menuAppendInput.value = '';

  // 이벤트 바인딩 부분
  changeMenuCount();
  menuList?.addEventListener('click', menuItemHandler);
  return;
};

const menuItemHandler = (event: MouseEvent) => {
  if (
    event.target instanceof HTMLButtonElement &&
    event.target.id === 'menu-remove-button'
  ) {
    const menuName = event.target.closest('li')?.querySelector('#menu-name');
    if (confirm(`${menuName?.textContent} 품목을 삭제하시겠습니까?`)) {
      event.target.closest('#menu-list-item')?.remove();
      changeMenuCount();
      return;
    }
  }

  if (
    event.target instanceof HTMLButtonElement &&
    event.target.id === 'menu-edit-button'
  ) {
    const menuName = event.target.closest('li')?.querySelector('#menu-name');

    if (menuName) {
      menuName.textContent = prompt(
        '수정사항을 적어주세요',
        String(menuName.textContent)
      );
      return;
    }
  }
};

const changeMenuCount = () => {
  menuCount.textContent &&
    (menuCount.textContent = menuCount.textContent?.replace(
      /[0-9]/g,
      String(menuList.children.length)
    ));
};
