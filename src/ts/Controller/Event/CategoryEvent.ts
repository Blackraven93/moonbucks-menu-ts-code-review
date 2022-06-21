import AbstractEvent from './Event';

class CategoryEvent extends AbstractEvent {
  constructor(events: Array<EventProperty>) {
    super(events);
  }
}

export default CategoryEvent;
