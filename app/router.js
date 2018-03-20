import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('head');

  this.route('SpecificPlace');
  this.route('place');

  this.route('oldreview');
  this.route('eventcontact');
  this.route('feedback');
  this.route('mywallet');
  this.route('redeem');
  this.route('nominate');
});

export default Router;
