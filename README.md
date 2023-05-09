# Graphite
## STILL IN DEVELOPMENT
## What is it?
Graphite is a JS library made to make the lives of developers easier. We understand that localstorage can be hard for newer devs, so we have worked to fix that issue! Graphite is a feature rich library that allows for seamless integration and ease of access usage of localstorage, allowing for more than what localstorage can do alone. Its very simple to use and I hope you plan on using it for your project!
### Functions
Graphite.set('key', 'value'); or Graphite.set('key', [table, table, table]);

The Graphite.set function sets a localstorage key and value based on your params. Supports tables.

Graphite.get('key', function (value) {
        console.log(value); // do anything using the value!
      });
      
The Graphite.get functions grabs the value of a specified key.

Graphite.delete('key');

The Graphite.delete function deletes a specified key and its value.

#### More coming soon!
