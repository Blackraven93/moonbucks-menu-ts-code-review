import MenuEvent from './MenuEvent';

abstract class AbstractEvent {
  constructor(protected readonly events: Array<EventProperty>) {}

  abstract binding({ eventTarget, eventType, eventFunction }: EventProperty): void;
  abstract push(eventProperty: Array<EventProperty> | EventProperty): void;
}

export default AbstractEvent;
