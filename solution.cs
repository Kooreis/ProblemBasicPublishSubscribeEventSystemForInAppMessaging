```javascript
class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }

        return this.events[event].push(callback);
    }

    publish(event, data = {}) {
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }

        return this.events[event].map(callback => callback(data));
    }
}

const pubSub = new PubSub();

pubSub.subscribe('message', data => console.log(`Received data: ${data}`));

pubSub.publish('message', 'Hello, World!');
```