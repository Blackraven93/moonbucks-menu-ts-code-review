type EventProperty = {
  eventAction: CRUD | CRUD[];
  eventTarget:
    | HTMLFormElement
    | HTMLInputElement
    | HTMLButtonElement
    | HTMLUListElement
    | HTMLSpanElement;
  eventType: string;
  eventFunction(event: Event): void;
};

type CRUD = 'create' | 'read' | 'update' | 'delete';
