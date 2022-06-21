import { selector } from '../util/const';

abstract class View {
  abstract render(...value: string[]): string;
  abstract mount(element: HTMLElement, name: string): void;
}

export default View;
