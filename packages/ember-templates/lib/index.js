import Ember from 'ember-metal/core'; // reexports
import require from 'require';
import {
  getTemplates,
  setTemplates
} from 'ember-templates/template_registry';
import 'bootstrap';

let Component;
Object.defineProperty(Ember, 'Component', {
  get: () => {
    if (!Component) {
      Component = require('ember-templates/component').default;
    }
    return Component;
  },
  enumerable: false
});

let Helper;
Object.defineProperty(Ember, 'Helper', {
  get: () => {
    if (!Helper) {
      Helper = require('ember-templates/helper').default;
      Helper.helper = require('ember-templates/helper').helper;
    }
    return Helper;
  },
  enumerable: false
});


let Checkbox;
Object.defineProperty(Ember, 'Checkbox', {
  get: () => {
    if (!Checkbox) {
      Checkbox = require('ember-templates/components/checkbox').default;
    }
    return Checkbox;
  },
  enumerable: false
});
let TextField;
Object.defineProperty(Ember, 'TextField', {
  get: () => {
    if (!TextField) {
      TextField = require('ember-templates/components/text_field').default;
    }
    return TextField;
  },
  enumerable: false
});
let TextArea;
Object.defineProperty(Ember, 'TextArea', {
  get: () => {
    if (!TextArea) {
      TextArea = require('ember-templates/components/text_area').default;
    }
    return TextArea;
  },
  enumerable: false
});

/**
  Global hash of shared templates. This will automatically be populated
  by the build tools so that you can store your Handlebars templates in
  separate files that get loaded into JavaScript at buildtime.

  @property TEMPLATES
  @for Ember
  @type Object
  @private
*/
Object.defineProperty(Ember, 'TEMPLATES', {
  get: getTemplates,
  set: setTemplates,
  configurable: false,
  enumerable: false
});
