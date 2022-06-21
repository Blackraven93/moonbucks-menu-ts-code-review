type EventProperty = {
  eventTarget: HTMLFormElement | HTMLInputElement | HTMLButtonElement | HTMLUListElement | HTMLSpanElement;
  eventType: string;
  eventFunction(event: Event): void;
};
