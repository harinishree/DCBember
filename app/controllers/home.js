import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        
            wallet:function(){
                this.transitionToRoute('mywallet');
            },
    placeClick:function(){

        //console.log("hi manoj",showrecords);
        //  swal("Way to Preclosure Request!", "", "success");

         console.log("recordrecord")
         this.transitionToRoute('place');
        //  this.set('record',record)
        //  this.transitionToRoute('requestpreclose')
      }
    },
    

});
