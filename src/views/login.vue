<template>
  <div class="content">
    <div class="panel">
      <div class="panel-header">
        <a href="/" class="home">主页</a>
        <span class="c">/ </span>
        <span class="c"> 登入</span>
      </div>
      <div class="inner padding login">
       <!--  <p v-show="!tokenAvail" class="prompt">请输入有效的token</p> -->
        <p class="prompt"><c-hint v-if="hint.show"></c-hint></p>
        <div class="login-form">
          <label for="token">accessToken:</label>
          <input type="text" id="token" maxlength="36" v-model="tmpToken" @change="simCheck" @focus="changeTokenAvail(true)">
        </div>
        <a href="#" class="btn btn-primary" @click.prevent.stop="login">登入</a>
      </div>
    </div>
  </div>
  <div class="sider">
  </div>
  <div class="row">
<div class="col-md-9">
<checkbox value="one">One</checkbox>
<checkbox value="two" type="primary">Two</checkbox>
<checkbox button value="four" type="danger">Four</checkbox>
  </div>
  </div>
</template>

<script>
import {checkbox} from 'vue-strap'

export default {
  components: {
    checkbox
  }
}
</script>

<style lang="scss">
  a.home {
    margin: 0;
  }

  .login {
    text-align: center;
    padding: 70px 0;
    position: relative;

    label {
      cursor: pointer;
      margin-right: 15px;
    }

  }

  .c {
    color: #999;
  }

  .prompt {
    position: absolute;
    left: 10px;
    top: 0;
    right: 10px;
    padding: 0 10px;
  }

  .login-form {
    margin-bottom: 25px;
  }

  #token {
    border-radius: 5px;
    padding: 5px;
    width: 200px;
    border: 1px solid #CCC;
    outline: none;
    transition: all .2s;

    &:focus {
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1) inset, 0 0 8px rgba(49, 176, 213, .9);
    }

  }
</style>
