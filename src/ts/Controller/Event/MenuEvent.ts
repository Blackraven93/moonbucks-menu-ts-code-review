import AbstractEvent from './Event';

class MenuEvent extends AbstractEvent {
  constructor(events: Array<EventProperty>) {
    super(events);
  }
}

export default MenuEvent;
