import AbstractEvent from './Event';

class CategoryEvent extends AbstractEvent {
  constructor(events: Array<EventProperty>) {
    super(events);
  }

  binding({ eventTarget, eventType, eventFunction }: EventProperty): void {
    console.log(eventTarget);
  }

  push(eventProperty: EventProperty | EventProperty[]): void {}
}

export default CategoryEvent;
