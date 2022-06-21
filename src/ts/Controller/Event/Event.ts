abstract class AbstractEvent {
  constructor(events: Array<EventProperty>) {
    events.forEach((singleEvent) => this.binding(singleEvent));
  }
  binding({ eventTarget, eventType, eventFunction }: EventProperty) {
    eventTarget.addEventListener(eventType, eventFunction);
  }
}

export default AbstractEvent;
