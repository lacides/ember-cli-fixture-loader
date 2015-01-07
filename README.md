Ember CLI Fixture Loader
========================

An [ember-cli](http://ember-cli.com) addon to keep your fixtures separate from your models.


## Install
Install the addon and runt the ember-cli blueprint.

```
npm install ember-cli-fixture-loader --save
```

## Fixture Generation

### To generate fixture with standard syntax:

```
ember generate fixture <model-name>
ember generate fixture <model-name> --pod
```

It will generate `app/fixtures/tag.js` and `app/pods/tag/fixture.js` respectively

## Configuration
This addon can be configured in environment config:

```javascript
ENV.FIXTURES = {
  enabled: true
};
```

`enabled: true/false` - control whether fixture addon will search for fixtures or not. 
Also you can use this setting in adapter to control which adapter should be used.

## Usage

```Model.reopenClass({...})``` will be handled automatically based on where fixture for model can be found: 

Example ```/app/models/post.js```

```javascript
import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string");
});
```

Example `/app/fixtures/post.js` or `/app/pods/post/fixture.js`

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

## FixtureAdapter per environment control

If you want to dynamically control adapter based on enabled or disabled Fixtures setting, you can do it
easily in application adapter:

```javascript
import DS from 'ember-data';
import Configuration from '<app-name>/config/environment';

var adapter = DS.RESTAdapter.extend();

if (Configuration.FIXTURES.enabled) {
  adapter = DS.FixtureAdapter.extend();
}

export default adapter;
```

Also you can control adapter by each model type, consider case when part of the API was released but other part
is in development.

## Troubleshooting

```
Error while processing route: templates Assertion Failed: Unable to find fixtures for model type 
```

you have enabled Fixture adapter for the model, which do not have fixtures but you request this model via store. 
Add fixture for this model. 

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
