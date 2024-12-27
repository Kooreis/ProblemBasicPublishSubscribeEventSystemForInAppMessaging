Here is a simple implementation of a publish-subscribe event system in TypeScript:

```typescript
class PubSub {
    private subscribers: { [key: string]: Function[] } = {};

    subscribe(event: string, callback: Function) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }

    publish(event: string, data: any) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback => callback(data));
    }

    unsubscribe(event: string, callback: Function) {
        if (!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(subscriber => subscriber !== callback);
    }
}

// Usage
let pubSub = new PubSub();

let callback = (data: any) => console.log(`Received data: ${data}`);
pubSub.subscribe('EVENT_NAME', callback);

pubSub.publish('EVENT_NAME', 'Hello, World!');

pubSub.unsubscribe('EVENT_NAME', callback);
```

This `PubSub` class maintains a list of subscribers for each event. The `subscribe` method adds a callback to the list of subscribers for a given event. The `publish` method calls all callbacks subscribed to a given event, passing them the provided data. The `unsubscribe` method removes a callback from the list of subscribers for a given event.