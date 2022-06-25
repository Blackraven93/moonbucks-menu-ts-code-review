import AbstractEvent from './Event';

class MenuEvent extends AbstractEvent {
  protected eventLists: any[] = [];

  constructor(events: Array<EventProperty>) {
    super(events);
    events.forEach((event) => {
      this.eventLists.push(event);
      this.binding(event);
    });
  }

  binding(property: EventProperty) {
    if (
      this.eventLists.some(
        (event) =>
          event.eventTarget === property.eventTarget && event.eventType === property.eventType
      )
    ) {
      return;
    }

    this.eventLists.push(property);
    property.eventTarget.addEventListener(property.eventType, property.eventFunction);
  }

  push(eventProperty: Array<EventProperty> | EventProperty) {
    // TODO: 여기서도 중복들어감!!
    if (Array.isArray(eventProperty)) {
      eventProperty.forEach((prop) => {
        this.binding(prop);
      });
      return;
    }
  }
}

export default MenuEvent;
