import Ember from 'ember';
IsDisable:false
export default Ember.Route.extend({
 model(){
    var feedController;
    this.controllerFor('mywallet').set('IsDisable',true)
    var uptoken=this.controllerFor('redeem').get('uptoken')
    console.log(uptoken)
     feedController=this.controllerFor('feedback').get('token')
    this.controllerFor('mywallet').set('token',feedController)
    console.log(">??",feedController)
    if(feedController==null){
    this.controllerFor('mywallet').set('IsDisable',true)
    var tkn=0.0;
    this.controllerFor('mywallet').set('token',tkn)
    console.log(tkn)
    
 }else if(uptoken!=null){
    this.controllerFor('mywallet').set('IsDisable',false)
    this.controllerFor('mywallet').set('IsDisable1',true)
console.log("uptoken",uptoken)
this.controllerFor('mywallet').set('uptoken',uptoken)
}
}
});
