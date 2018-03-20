import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        feedback:function(){
            var feedback=document.getElementById("exampleFormControlTextarea1").value 
// var feedback=this.get('feedback')
this.set('feedback',feedback)
console.log("feedback>>>>>>>",feedback)
    var transactionstring={
        
        "profileObj" : {
            "feedback": feedback,
       
          }
  };
  console.log("datastring"+JSON.stringify(transactionstring));
  var mycontroller=this
 
  return $.ajax({   
  url:'http://172.26.83.17:8000/buildProfile',
  type: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwidXNlcnMiOnsiX2lkIjoiNWFhOTBiMzJlYTE3MTIzNGRlOGQyNjE0IiwicmVnaXN0ZXJPYmoiOnsiRmlyc3ROYW1lIjoicmlzYWJoIiwiTGFzdE5hbWUiOiJzaGFybWEiLCJQaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJuZW1faWQiOnsibmFtZSI6InJpc2FiaHNoYXJtYTcxQGdtYWlsLmNvbSIsImFjY291bnRzIjp7IjAiOnsiYnJhaW4iOnRydWUsImFsZ28iOiJwYXNzOmJpcDMyIiwiZW5jcnlwdGVkIjoiY2ViZmUyM2M0NjI5Yzc0NDc0Njc3ZGE1YTI0YzYyMTNmZWE5Zjc3NWY2OTQxYzFiZWY0ZjRjOTYwOTI1YjNkMGYxMjhmMGFiMmEzNzU5MDg2YWNiY2ExMzNhMzUxYTNmIiwiaXYiOiI3NjNmNmY2ZmI5MzgyODE2YzdjYjI2OGMwMzkwZWViNCIsImFkZHJlc3MiOiJNQlc2RkwyQlU0WTU1U1lEM1JTU1pNTUpJNzJXRklKTUlOTlQ2NVhXIiwibGFiZWwiOiJQcmltYXJ5IiwibmV0d29yayI6OTZ9fX0sIkVtYWlsIjoicmlzYWJoc2hhcm1hNzFAZ21haWwuY29tIiwiUGFzc3dvcmQiOiJwbVdrV1NCQ0w1MUJma2huNzl4UHVLQktIei8vSDZCK21ZNkc5L2VpZXVNPSIsIlR5cGUiOiJQYWl0ZW50IiwicmFwaWRJRCI6Imp2RVFFamxHUEE5QmxXTG9uR1BuUzEyaDZtdzdsNUhxOGZOTWtTUWJYRms9IiwicHJpdmF0ZUtleSI6IjI2Nzk3MWU0NDIwZjc0ODZiNzU5NzU4ZmFkNjQ3ODRlNTRkZWI0OWZhNjBjM2JiNzhiMTlmOGYwYzk0OTNhNDUiLCJvdHAiOjY2NjQsImVuY29kZWRNYWlsIjoiY21sellXSm9jMmhoY20xaE56RkFaMjFoYVd3dVkyOXQiLCJjcmVhdGVkX2F0IjoiV2VkIE1hciAxNCAyMDE4IDE3OjE0OjUwIEdNVCswNTMwIChJU1QpIiwiX192IjowLCJmYW1pbHlNZW1iZXJzIjpbXSwic3RhdHVzIjpbXX0sImlhdCI6MTUyMTAyNzk5OSwiZXhwIjo2MTUyMTAyNzk5OX0.Iw_twAG7j0hp2AWd_JxeaVQMEn89NQrYPLB4N3uJqzk"
},
  contentType: 'application/json',
  data: JSON.stringify(transactionstring),
  success: function(response) {
  console.log(JSON.stringify(response));
  var message = response.message;
  mycontroller.set('message',message)
  var token=response.token
  mycontroller.set('token',token)
  if(message!=null){
  swal("Great your token has been activated into your account", "Please check your wallet !", "success");
  }else if(feedback==null){
    swal("sad!", "nothing passed", "error");
  }
  console.log("token>>>>>>>>>>" + token);  
  console.log("message>>>>>>>>>>" + message);  
  }
})
        },
        gotowallet:function(){
            this.transitionToRoute('mywallet')
        }
    




    }
   


});
