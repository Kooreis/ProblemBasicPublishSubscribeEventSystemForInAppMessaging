```cpp
#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <functional>

class EventManager {
public:
    void subscribe(const std::string& event, std::function<void()> func) {
        subscribers[event].push_back(func);
    }

    void publish(const std::string& event) {
        for (const auto& func : subscribers[event]) {
            func();
        }
    }

private:
    std::map<std::string, std::vector<std::function<void()>>> subscribers;
};

class App {
public:
    App() {
        eventManager.subscribe("event1", [this]() { this->onEvent1(); });
        eventManager.subscribe("event2", [this]() { this->onEvent2(); });
    }

    void onEvent1() {
        std::cout << "Event 1 has been published." << std::endl;
    }

    void onEvent2() {
        std::cout << "Event 2 has been published." << std::endl;
    }

    void triggerEvent1() {
        eventManager.publish("event1");
    }

    void triggerEvent2() {
        eventManager.publish("event2");
    }

private:
    EventManager eventManager;
};

int main() {
    App app;
    app.triggerEvent1();
    app.triggerEvent2();

    return 0;
}
```