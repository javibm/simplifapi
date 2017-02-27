Simplifapi
=========

Simplify your apis!

## Installation

  `npm install simplifapi`

## Usage

    var client = simplifapi.createApi('http://localhost/3000');

    client.get("/api/app").then(function(result){
      console.log(result);
    });

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
