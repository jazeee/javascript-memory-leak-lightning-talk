# Publisher Subscriber Memory Leak Lighting Talk
This is a quick discussion and example of a common memory leak scenario.
This can happen in any language that provides a mechanism to attach event listeners or subscribers.
Examples:
* a Java class can maintain a List of subscribers, and notify them on change.
* JavaScript jQuery events maintain a collection of event listeners.
* go and channels

This example uses Meteor purely for convenience of auto-building and live reload.

Install MeteorJs 1.4.2 and run using `meteor --port 3020`

Optionally, install Mongo and set `MONGO_URL` prior to running. (This code doesn't use a database)
