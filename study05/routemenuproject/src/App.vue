<template>
  <div id="app">
    <nav id="gnb">
      <ul class="menu">
        <li>
          <router-link to="/company" class="dp1">Company</router-link>
          <ul class="sub">
            <li><router-link to="/company/intro">회사소개</router-link></li>
            <li><router-link to="/company/history">회사연혁</router-link></li>
            <li><router-link to="/company/greetings">인사말</router-link></li>
            <li><router-link to="/company/organization">조직</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/product" class="dp1">Product</router-link>
          <ul class="sub">
            <li><router-link to="/product/a01">도서</router-link></li>
            <li><router-link to="/product/b01">문구</router-link></li>
            <li><router-link to="/product/c01">학습</router-link></li>
            <li><router-link to="/product/d01">액세사리</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/service" class="dp1">Service</router-link>
          <ul class="sub">
            <li><router-link to="/service/online">온라인 서비스</router-link></li>
            <li><router-link to="/service/visit">방문 서비스</router-link></li>
            <li><router-link to="/service/delivery">택배 서비스</router-link></li>
            <li><router-link to="/service/reservation">시설 이용 예약 서비스</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/community" class="dp1">Community</router-link>
          <ul class="sub">
            <li><router-link to="/community/notice">공지사항</router-link></li>
            <li><router-link to="/community/qna">질문 및 답변</router-link></li>
            <li><router-link to="/community/faq">자주하는 질문</router-link></li>
            <li><router-link to="/community/online">온라인 상담</router-link></li>
            <li><router-link to="/community/chatbot">챗봇 상담</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div style="clear:both;"></div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style: none;
}

#gnb {
  width: 450px;
  height: 20px;
  margin: 20px auto;
}

#gnb ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#gnb li {
  padding: 0.25em 1em;
}

#gnb a { 
  display:block; 
  line-height: 1.8;
  text-align: left;
  text-decoration: none;
}

#gnb > .menu > li {
  float: left;
  position: relative;
}

#gnb > .menu > li:hover > a.dp1 {
  color: #42b983;
}

#gnb li .sub {
  display: none;
  height: 200px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.8); 
  position: absolute;
  top: 30px;
  left: -50%;
  z-index: 99;
}

#gnb li:hover .sub {
  display: block;
}

#gnb .menu li .sub li, #gnb .menu li .sub li a {
  text-align: center;
}

#gnb .sub li a:hover {
  color: rgb(240, 210, 180);
}
</style>
