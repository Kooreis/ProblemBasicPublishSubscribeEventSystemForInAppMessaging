# Question: How do you create a basic publish-subscribe event system for in-app messaging? JavaScript Summary

The provided JavaScript code creates a basic publish-subscribe event system for in-app messaging. The code defines a class named `PubSub` with a constructor that initializes an empty `events` object. This object will store the events and their corresponding callback functions. The `subscribe` method allows other parts of the application to subscribe to a specific event and provide a callback function to be executed when that event is published. If the event does not exist in the `events` object, it is added with an empty array as its value. The callback function is then added to the array of callbacks for that event. The `publish` method allows the application to publish an event with associated data. If the event exists in the `events` object, it executes all the callback functions associated with that event, passing the data as an argument. If the event does not exist, it returns an empty array. The last part of the code creates an instance of the `PubSub` class, subscribes to an event named 'message', and then publishes the 'message' event with 'Hello, World!' as the data.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and structure. Both versions use a class to encapsulate the publish-subscribe system, and both use a dictionary-like object to store event names and their corresponding callback functions.

However, there are a few differences:

1. TypeScript uses static types: In the TypeScript version, types are explicitly declared for variables and function parameters. For example, the `subscribers` object is declared as a dictionary with string keys and array of Function values. This helps to catch type-related errors at compile time.

2. The TypeScript version includes an `unsubscribe` method: This method allows a callback to be removed from an event's list of subscribers. This is not present in the JavaScript version.

3. Different handling of non-existent events: In the JavaScript version, if an event is published that doesn't exist in the `events` object, an empty array is returned. In the TypeScript version, the function simply returns without doing anything.

4. Different handling of callbacks: In the JavaScript version, the `publish` method uses `map` to call each callback and returns an array of the results. In the TypeScript version, `forEach` is used instead to call each callback, and nothing is returned.

5. Different naming: The JavaScript version uses `events` to store the callbacks, while the TypeScript version uses `subscribers`. This is a minor difference and doesn't affect the functionality of the code.

---

# C++ Differences

The C++ version of the solution uses a similar approach to the JavaScript version, but there are some differences due to the language features and syntax.

1. Data Structures: In JavaScript, an object is used to store the events and their corresponding callbacks. In C++, a `std::map` is used for the same purpose. The keys of the map are the event names (strings), and the values are vectors of `std::function` objects, which represent the callbacks.

2. Callbacks: In JavaScript, callbacks are just functions that can be passed around and invoked later. In C++, `std::function` is used to represent a callable entity. It can store, copy, and invoke any Callable target -- functions, lambda expressions, bind expressions, or other function objects.

3. Lambda Expressions: In the JavaScript version, an arrow function is used as a callback. In the C++, a lambda expression is used instead. The lambda captures `this` so it can call member functions `onEvent1` and `onEvent2`.

4. Method Definitions: In JavaScript, methods are defined inside the class using the method shorthand. In C++, methods are defined inside the class using traditional function syntax.

5. Type Checking: JavaScript is a dynamically-typed language, so there's no need to specify the types of variables, parameters, or return values. C++, on the other hand, is statically-typed, so types must be specified.

6. Event Publishing: In JavaScript, when an event is published, the data is passed to the callback. In the C++ version, no data is passed to the callback when an event is published.

7. Object Instantiation: In JavaScript, the `new` keyword is used to create an instance of a class. In C++, an object is instantiated without the `new` keyword.

8. Main Function: In C++, the `main` function is the entry point of the program. In JavaScript, there's no equivalent of a `main` function. The script is run from top to bottom.

---
