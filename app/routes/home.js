import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var custId = this.get('custId');
        console.log(custId);
        var name = this.get('name');
        console.log(name);
        var phone = this.get('phone');
        var noOfVIsits = this.get('noOfVIsits');
        var lastVisitedDate = this.get('lastVisitedDate');
        var dob = this.get('dob');
        // let {
        //     custId,
        //     name,
        //     dob,
        //     phone,
        //     noOfVIsits,
        //     lastVisitedDate
        // }=this.getProperties('custId','name','dob','phone','noOfVIsits','lastVisitedDate')
        var data={
            "custId":custId,
            "name":name,
            "dob":dob,
            "phone":phone,
            "lastVisitedDate":lastVisitedDate,
            "noOfVIsits":noOfVIsits,
            "lastVisitedDate":lastVisitedDate
        }
        console.log(JSON.stringify(data));
        var mycontroller = this;
        return $.ajax({
        url:'http://localhost:3000/getAllCustomerDetails',
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
   })

    }
});
