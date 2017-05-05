# Node.js backend for TTN/LoraWan

This is a rather basic Node.js setup for providing data through a web API via [TheThingsNetwork] (TTN).

The basic idea is having an Arduino with a sensor send data to TTN, then grab it from there and make it accessible through the web.

Our full tutorial can be found [here].

## Dependencies

npm install --save express
npm install --save ttn

We assume a basic understanding of LoraWAN and TTN. You'll need an TTN account, register your node and enter the credentials in server.js

## Author

[https://twitter.com/bnjmnsbl]

## License

The MIT License

Copyright 2017 Technologiestiftung Berlin

This project is licensed under the MIT License


[here]: https://github.com/technologiestiftung/LoRaWAN

[TheThingsNetwork]: https://www.thethingsnetwork.org/

[https://twitter.com/bnjmnsbl]: https://twitter.com/bnjmnsbl
