// Interface automatically generated by schemas-to-ts

import { Event } from '@strapi/database/lib/lifecycles/index';

export interface BeforeRunEvent<TState> extends Event {
    state: TState;
}
