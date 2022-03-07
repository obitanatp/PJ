<template>
<main :style="{backgroundImage:'url(/screen-0.jpg)'}" style="height:800px">
    <el-container>
  <el-header class="!min-w-450px">
    <div style="margin-top:10px">
        <el-button @click="changetohome()" type="primary">Home</el-button>
    </div>
  </el-header>
  <el-main class="!min-w-500px">
    <div id="root">
        <center>
          <form @submit="formAdd(form.id)">
              <input style="display:none" type="text" class="form-control" v-model="form.id">
              <strong>First sentences:</strong>
              <input  type="text" class="form-control" v-model="form.firstwords">
              <strong>Counterparts:</strong>
              <input  type="text" class="form-control" v-model="form.counterparts">
          </form>
        </center>
       <br>
    </div>
  <div>
    <center>
    <el-button @click="show3 = !show3">Lists of sentences</el-button>
    </center>
    <div style="margin-top: 20px; height: 200px;">
      <center style="width=500px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <ul>
              <li v-for="val in variable" :key="val.id">{{val.firstwords}} x {{val.counterparts}} <button class="button" @click="formUpdate(val.id)">Update</button><button class="button" @click="del(val.id)">Delete</button></li>
            </ul>
            <button class="button" @click="formAdd(form.id)">Add</button>
          </div>
        </div>
      </el-collapse-transition>
      </center>
    </div>
  </div>
  </el-main>
  <el-footer>
  </el-footer>
  </el-container>
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
  data(){
    return{
      show3: true,
      universities: [],
      count: 0,
      i: 0,
      test: "",
      form: {
        firstwords: '',
        counterparts: '',
      },
      form2: {
        firstwords: '',
        counterparts: '',
      },
      variable: []
    }
  },
  mounted(){
  try {
      axios
      .get("http://127.0.0.1:4000/connect")
      .then(response =>(this.variable = response.data, this.i=response.data.length))
  } catch (error) {
    console.log(error)
  }
  },
  methods: {
    async del(d){
      await this.$axios.delete(`http://127.0.0.1:4000/connect/${d}`)
      this.$router.go(0);
    },
    changetohome(){
      this.$router.push('/project/')
    },
    async formAdd(c) {
      await this.$axios.post(`http://127.0.0.1:4000/connect`, {id: c,firstwords:this.form.firstwords,counterparts:this.form.counterparts})
      this.$router.go(0);
    },
    async formUpdate(b) {
      await this.$axios.put(`http://127.0.0.1:4000/connect/${b}`, this.form)
      this.$router.go(0);
    },
    back(){
      this.$router.push('/project/')
    }
  }
}
</script>

<style>
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
.transition-box {
    border-radius: 4px;
    width: 800px;
    height: 220px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    overflow: auto;
  }
.button {
  background-color: blue;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button:hover,
.button:focus {
  background-color: #07c;
}

.button-:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button:active {
  background-color: #0064bd;
  box-shadow: none;
}
</style>
