import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        redeem:function(){
            this.transitionToRoute('redeem')
        },
        homepage:function(){
            this.transitionToRoute('home')
            swal("Back to home page", "Mywallet", "success");

        }
    }
    

});
