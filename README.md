Ember CLI Fixture Loader
========================

An [ember-cli](http://ember-cli.com) addon to keep your fixtures separate from your models.


## Install
Install the addon and runt the ember-cli blueprint.

```
npm install ember-cli-fixture-loader --save
ember generate fixture <model-name>
```

## Usage

Instead of ```Model.reopenClass({...})```, your fixtures will be loaded from the ```/app/fixtures/``` folder.

Example ```/app/models/post.js```

```javascript
import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string");
});
```

Example ```/app/fixtures/post.js```

```javascript
export default [
 {
   id: 1,
   title: 'Example'
 },
 {
  id: 2,
  title: 'Example 2'
 }
];
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
