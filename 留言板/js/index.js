
   var vm  = new Vue({

       el : "#indexdiv",
       data : function (){
           return {
             flag :false,
             randomNumber :this.handleRandom(),
             vuetextareav :"",
             list :[
                {imgSrc:"img/1a.jpg",textOne:"今天是周一，但是我很瞌睡！",date:"2016/05/05",delButton:"删除"},
                {imgSrc:"img/1a.jpg",textOne:"今天是周一，但是我很瞌睡！",date:"2016/05/05",delButton:"删除"}

             ]
             
           }
           },
         methods :{
            msgblckyes : function (){
                this.flag = true
            },
            closeanot : function (){
                this.flag = false
            },
            
            confirmbtntext:function (){
                this.handleRandom();
                var objText = {imgSrc:this.handleRandom(),textOne:this.vuetextareav,date:this.handleDateOne(),delButton:"删除"}
               this.list.push(objText);
               this.flag = false;
               console.log(this.list);
               this.vuetextareav="";
              
            },
            handleDelete : function (key, e){
                console.log(this);
                      this.list.splice(key,1)
            },
            //获取随机图片名↓
            handleRandom : function (){
                
                var  romOne = Math.floor(Math.random(1)*5);
                            var imgSrcOne = "img/"+romOne+"a.jpg";

                 return imgSrcOne;

            },
            //获取时间↓
            handleDateOne :function (){
                var tiO =new Date();
                var year= tiO.toLocaleDateString();
		       return year;
 
            }
         }

   })