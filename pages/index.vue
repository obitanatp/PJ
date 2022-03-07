<template lang= "html">
<main :style="{backgroundImage:'url(/screen-0.jpg)'}" style="height:800px">
<div class="box">
        <!-- <img class="x" src="/image/TexCon.png"> -->
    </div>
    <div id="root">
      <div>
        <div id="a">
          <ul>
          <li v-for="(vax,index) in variable" :key="vax.id">
            <center>
              <br>
          <div class="b" @click="computingb(index,vax.counterparts)"> {{ vax.counterparts }} </button>
            </center>
          </ul>
        </div>
        <canvas id="cna" style="position: relative;float: right;width: 82px; right: 6px; top: 5px" :style="{ height: height + 'px'}"/>
        <div class="h">
        <ul>
          <li v-for="(vay,index) in variable" :key="vay.id">
            <center>
              <br>
          <div class="b" @click="computinga(index,vay.firstwords)">  {{ vay.firstwords }} </button>
            <center>
        </ul>
        </div>
      </div>
    </div>
	<div class="c">
		<button @click="check()" class="b">Check</button>
	    <input type="button" @click="back()" id="do-reset" class="b" value="configure"/>
	</div>
    <div class="social-floater">
      <div class="social-floater-youtube">
       <a href="https://www.youtube.com" target="_blank"><img src="/image/youtube-logo.png" alt="Follow me on Youtube" title="Follow me on Youtube"></a>
      </div>
      <div class="social-floater-twatter">
       <a href="https://twitter.com" target="_blank"><img src="/image/twitter-logo.png" alt="Follow me on Twitter" title="Follow me on Twitter"></a>
      </div>
      <div class="social-floater-farcebook">
       <a href="https://www.facebook.com" target="_blank"><img src="/image/facebook-logo.png" alt="Follow me on Facebook" title="Follow me on Facebook"></a>
      </div>
      <div class="social-floater-irc">
        <a href="https://discord.gg" target="_blank"><img src="/image/discord-logo.png" alt="Join the my DISCORD Channel" title="Join the my DISCORD Channel"></a>
      </div>
     </div>
     </main>
</template>

<script>
import axios from 'axios'
export default {
//     script : {
//     var currentTime = new Date().getHours();
//     if (document.body) {
//     if (8 <= currentTime && currentTime < 23) {
//       document.body.background = "/image/background.jpg";
//     }
//     else {
//      document.body.background = "/image/background2.png";
//     }
// }
created(){
  var currentTime = new Date().getHours();
    // if (document.body) {
    if (8 <= currentTime && currentTime < 23) {
      //document.body.background = "/image/background.jpg";

      this.img = "background-image: url('http://forgottenhope.warumdarum.de/template/backgrounds/supercharge.jpg');"
    }
    else {
     //document.body.background = "/image/background2.png";
      //this.img = "/image/background2.png"
      this.img = "background-image: url('http://forgottenhope.warumdarum.de/template/backgrounds/goodwood.jpg');"
    }
},
data(){
  return{
    height: 0,
    test:"",
    test2:"",
    img:"",
    s: 0,
    l: 0,
    i: -2,
    x: 0,
    y: 0,
    j: -2,
    variable: [],
    show: true,
    form: [],
    form2: [],
    u: -2,
    v: -2,
    z: -2,
    vueCanvas: null
  }
},
mounted(){
  try {
      axios
      .get("http://127.0.0.1:4000/connect")
      .then(response =>(this.variable = response.data,this.height=(this.variable.length)*86,
  console.log(this.height)))
  } catch (error) {
    console.log(error )
  }
},
methods:{
  computinga(u,a){
    if(this.x==0&&this.y==0){
    this.x=1
    this.i=a
    this.u=u
    }
    else if(this.x==1&&this.y==0&&this.i==a){
    this.x=0
    this.i=-2
    this.u=-2
    }
    else if(this.x==1&&this.y==0&&this.i!=a){
    this.x=1
    this.i=a
    this.u=u
    }
    else if(this.x==0&&this.y==1){
      this.i=a
      this.u=u
      this.l=0
      while(this.l<=this.s){
        if(this.form[this.l]==u || this.form2[this.l]==this.v){
        this.form[this.l]=this.form[this.l]*(-1)-3
        this.form2[this.l]=this.form2[this.l]*(-1)-3
        }
        this.l+=1
      }
      this.form[this.s]=this.u
      this.form2[this.s]=this.v
      this.s+=1
      console.log(this.i,this.j)
      this.i=-2
      this.j=-2
      this.x=0
      this.y=0
      this.u=-2
      this.v=-2
    }
  },
  computingb(v,b){
    if(this.x==0&&this.y==0){
    this.y=1
    this.j=b
    this.v=v
    }
    else if(this.x==0&&this.y==1&&this.j==b){
    this.y=0
    this.j=-2
    this.v=-2
    }
    else if(this.x==0&&this.y==1&&this.j!=b){
    this.y=1
    this.j=b
    this.v=v
    }
    else if(this.x==1&&this.y==0){
      this.j=b
      this.v=v
      this.l=0
      while(this.l<=this.s){
        if(this.form2[this.l]==v || this.form[this.l]==this.u){
        this.form[this.l]=this.form[this.l]*(-1)-3
        this.form2[this.l]=this.form2[this.l]*(-1)-3
        }
        this.l+=1
      }
      this.form[this.s]=this.u
      this.form2[this.s]=this.v
      this.s+=1
      console.log(this.i,this.j)
      this.i=-2
      this.j=-2
      this.x=0
      this.y=0
      this.u=-2
      this.v=-2
    }
  },
  check(){
    var canvas = document.getElementById("cna");
    this.vueCanvas = canvas.getContext("2d");
    for(var i=0;i < this.s;i++){
      if(this.form[i] >= this.z || this.form2[i] >= this.z){
        if(this.form[i] > this.form2[i]){
          this.z = this.form[i]
        }
        else this.z = this.form2[i]
      }
      console.log(this.form[i],this.form2[i])
    }
    console.log(this.z)
    for(var i=0;i < this.s;i++){
      if(this.form[i] >= 0 || this.form2[i] >= 0){
        var ctx = this.vueCanvas;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.moveTo(0, 26+(this.form[i])*36);
        ctx.lineTo(320, 26+(this.form2[i])*36);
        ctx.stroke();
      }
      if(this.form[i] < 0 || this.form2[i] < 0){
        var ctx = this.vueCanvas;
        ctx.beginPath();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 4;
        ctx.moveTo(0, 26+((this.form[i]+3)*-1)*36);
        ctx.lineTo(320, 26+((this.form2[i]+3)*-1)*36);
        ctx.stroke();
      }

    }
  },
  back(){
    this.$router.push('/project/config')
  }
}
}
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
#root{
  margin: auto;
  border-style: ridge;
  border-color: #333;
  background-color: #333;
  width: 1000px;
  height: 515px;
  overflow: auto;
}
.box {
  margin: auto;
  align-items: center;
  text-align: center;
  overflow: auto;
}
div.social-floater {
    background-image: url("/image/urlboxRight.png");
    width: 58px;
    height: 224px;
    position: fixed;
    right: 0px;
    top: 25%;
}
div.social-floater-youtube {
    position: absolute;
    top: 7px;
    left: 9px;
}
div.social-floater-twatter {
    position: absolute;
    top: 63px;
    left: 9px;
}
div.social-floater-farcebook {
    position: absolute;
    top: 113px;
    left: 9px;
}
div.social-floater-irc {
    position: absolute;
    top: 163px;
    left: 10px;
}
.x{
  border-style: ridge;
  border-color: #333;
}
.topnav {
  position: relative;
  overflow: hidden;
  background-color: #333;
  top: 3px;
}
.topnav button {
  float: left;
  background-color: #ddd;
  border: none;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav button:hover {
  background-color: #808000;
  color: white;
}
.topnav button.active {
  background-color: #808000;
  color: white;
}
.o{
  margin: auto;
  border-style: ridge;
  border-color: #333;
  background-color:#333;
  width: 750px;
  height: 60px;
  overflow: auto;
}
#a{
  margin: 0;
  position: relative;
  border-style: ridge;
  border-color: #808000;
  float: right;
  background-color:#333;
  width: 450px;
  height: 500px;
  top: 5px;
  right: 5px;
}
#a2{
  position: relative;
  left: 125px;
  top: 5px;
}
#a22{
  position: relative;
  top: 5px;
  left: 125px;
}
.t {
  text-align: center;
}
.c {
  margin: 0;
  position: relative;
  text-align: center;
}
.b {
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
a:link#a3,a:visited#a3{
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
a:hover#a3, a:active#a3 {
  background-color: #ddd;
  color: black;
}
.e{
  position: relative;
  left : 100px;
}
.g{
  position: relative;
  top: 3px;
  left: 10px;
}
.h{
  margin: 0;
  position: relative;
  border-style: ridge;
  border-color: #808000;
  background-color:#333;
  left : 5px;
  width: 450px;
  height: 500px;
  top: 5px;
  right: 5px;
}
.lab{
  background-color: #ddd;
  color: black;
  border-style: ridge;
  border-color: #808000;
}
table{
	border-collapse: collapse;
}

table tr td {
	border: solid 1px #cdcdcd;
}

table tr td p {
	margin: 0px;
}
div >>> button.b{
  background-color: #808000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

