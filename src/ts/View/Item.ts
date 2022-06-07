// webcomponent

const menuItemTemplate = (name: string) => String.raw`
  <li id="menu-list-item" class="menu-list-item d-flex items-center py-2">
    <span id="menu-name" class="w-100 pl-2 menu-name">${name}</span>
    <button
      type="button"
      id="menu-edit-button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    >
      수정
    </button>
    <button
      type="button"
      id="menu-remove-button"
      class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    >
      삭제
    </button>
  </li>
`;

export default menuItemTemplate;
