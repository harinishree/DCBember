import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var token=this.controllerFor('mywallet').get('token')
        this.controllerFor('redeem').set('token',token)
        console.log(">>>",token)


    // var feedController=this.controllerFor('mywallet').get('token')
    // console.log("hhhhhhhhh>>>",feedController)
    // this.controllerFor('redeem').set('feedController',feedController)

    }
});
