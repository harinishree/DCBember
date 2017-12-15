import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        submitrequest:function(){
            var custId = this.get('custId');
            console.log(JSON.stringify(data));
            var mycontroller = this;
            return $.ajax({
            url:'http://localhost:3000//updateRequest',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
            console.log(JSON.stringify(response));
            var id=response.message
            sessionStorage.setItem('id',id);
            mycontroller.controllerFor('home').set('id',id)    
            console.log(id)
           console.log('DEBUG: GET Enquiries OK');
           
         }
        });

        }
    }
});
