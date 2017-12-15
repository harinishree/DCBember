import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        alert('hfhjsbfhjb')
        var visitupdate=this.controllerFor('home')
        var custId=visitupdate.get('custId')
         this.controllerFor('visitupdate').set('custId',custId)
         console.log(custId)
    }

});
