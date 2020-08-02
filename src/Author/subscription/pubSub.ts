import { PubSub } from 'graphql-subscriptions'
export const pubSub = new PubSub();

export const payload = {
  commentAdded: {
    id: '1',
    content: 'Hello!',
  }
};
