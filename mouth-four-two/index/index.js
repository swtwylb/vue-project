Vue.component ("header-div-one",  {
     name : "header-div-one",
     data : function (){
        return {

            count :5556,
            message :"我是子组件",
            textooo :"tz这个是"
        }

    },
    //次语法和html的一一对应
      template :`<div class="div-my-one">我是div
      <a href="#" @click='$emit("handel-children-click",message)'>{{message}}</a><a href="#"></a>
      <a href="#"></a><a href="#" @click="prposChildrenOne">求求你成功吧</a>

      
      </div>`,

      props : {
          
                 todo :{

                    type : String,
                    default :"todo摩尔恩智默认值"
                 },
                 childrenOne :{
                     type : String,
                     default: "w我是默认值del"


                 },
                 handelChildrenClick :{
                     type:Object,
                     default:null
                 }




      },
      
      methods :{
        handleAddClick () {
            this.count++;


        },
        prposChildrenOne : function (){

               console.log(this.childrenOne,"是是是");

        },
        
       
        
    }
} );
var vm = new Vue({
    el: "#warp-div-main",
    data: function () {
        return {
            swt : 123456,
            
            mesOne : "链接已",
            mesTwo : "链接二",
            

        
            flag : true
        }
    },
    methods : {
          handleClickOne : function (){
               this.flag =!this.flag;


           },
           swtc :function (data){
            console.log(data)
       }
           

    },
    props :["todo","childrenOne","handelChildrenClick"],
    watch : {
        flag : function (newVal ,oldVal ){
            console.log(newVal,oldVal)
        }

    }
})