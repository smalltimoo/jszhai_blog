<template>
  <div class="landing_container">
    <div class="wrapper">
      <div class="hummingbird js-3dbox">
        <div class="body">
          <div class="back"></div>
          <div class="wings"></div>
          <div class="head">
            <div class="nape"></div>
            <div class="beak"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="landing_outter">
      <div class="landing_main">
        <div class="landing_inner">
          <div class="inner_img"><img
              src="../assets/avatar.png"
              alt=""
            /></div>
          <h1
            class="tracking-in-expand"
            @click="handleRoute()"
          >
            <div class="arrow arrow_left"></div><span class="animated flipInY bounce fast">{{landing.blogName}}</span><div class="arrow arrow_right"></div>
          </h1>
          <div v-show="!isShowpassword"
            class="info_tags tracking-in-contract-bck"
            @click="handleRoute()"
          >
            <p class="info_tag">{{landing.tagA}}</p>
            &
            <p class="info_tag">{{landing.tagB}}</p>
            &
            <p class="info_tag">{{landing.tagC}}</p>
          </div>
          <div v-show="isShowpassword" class="info_tags tracking-in-contract-bck" contenteditable>1234rtyu</div>
          <div class="info_icon_group" >
            <a v-for="(item, index) in contactList" :key="index" @mouseover="hoverClass = item.name" @mouseout="hoverClass = ''" :href="item.href"><img v-show="hoverClass === item.name" :src="item.imgurl_hover" width="45px"/><img v-show="hoverClass !== item.name" :src="item.imgurl" width="45px"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { value, computed, onMounted, onUnmounted } from 'vue-function-api';
const config = require("../../config/");

export default {
  props: {
    name: "Landing"
  },
  setup (props, context) {
    const landing = computed(() => config.ladingInfo);
    const video = value(0);
    const videolist = value(new Array(3));
    const hoverClass = value('');
    let inter;
    let isShowpassword = value(false);
    const contactList = value([
      {
        name: 'github',
        href: landing.github,
        imgurl: require('../assets/landing/github.png'),
        imgurl_hover: require('../assets/landing/github_hover.png')
      },
      {
        name: 'email',
        href: landing.email,
        imgurl: require('../assets/landing/email.png'),
        imgurl_hover: require('../assets/landing/email_hover.png')
      },
      {
        name: 'nuggets',
        href: landing.nuggets,
        imgurl: require('../assets/landing/nuggets.png'),
        imgurl_hover: require('../assets/landing/nuggets_hover.png')
      }
    ]);
    const handleRoute = () => context.parent.$router.push('home');
    onMounted(() => {
      inter = window.setInterval(() => {
        isShowpassword = !isShowpassword;
      }, 2000);
    });
    onUnmounted(() => {
      clearInterval(inter);
    });
    return {
      landing,
      handleRoute,
      video,
      videolist,
      contactList,
      hoverClass,
      isShowpassword
    };
  }
};
</script>

<style scoped>
.landing_container::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  transform: scale(1);
  background-image: linear-gradient(
      to top,
      rgba(175, 175, 201, 0.42),
      rgba(175, 175, 201, 0.42)
    ),
    url(https://i.loli.net/2019/08/19/U5mlAufkHPMxcZQ.jpg);
  background-position: 0% 0%, center;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover  ;
  background-attachment: scroll;
  background-color: #ffffff;
}
/* .bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  transform: scale(1);
} */
.inner_img:hover {
  transition: all 0.5s ease-in-out;
  animation: flip-2-hor-top-bck 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
}
@keyframes flip-2-hor-top-bck {
  0% {
    transform: translateY(0) translateZ(0) rotateX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: translateY(-100%) translateZ(-260px) rotateX(180deg);
    transform-origin: 50% 100%;
  }
}
.lading_outter {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 1.5625rem 1.5625rem 1.5625rem 1.5625rem;
}
.landing_main {
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 -2px 4px 0 rgba(0,0,0,.2);
  border-radius: 0.5rem;
  transition: opacity 1s ease 0s, transform 1s ease 0s;
}
.landing_container .landing_outter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.landing_main .lading_inner {
  position: relative;
  z-index: 1;
  border-radius: inherit;
  padding: 3.125rem 2.5rem;
  max-width: 100%;
  width: 25rem;
}
.landing_inner .inner_img {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  display: block;
  margin-bottom: 1.5rem !important;
  margin-top: 0 !important;
}
.inner_img img {
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  width: 7rem;
  border-radius: 100%;
  transition: all 0.5s ease-in-out;
}
.landing_inner > h1 {
  color: #ffffff;
  font-family: "Arial", "sans-serif";
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.175;
  font-weight: 400;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
  transition: opacity 0.5s ease-in-out 0.125s;
  transition-delay: 0.25s;
  color: #fff;
  letter-spacing: 2px;
}
.landing_inner > h1::first-letter {
  color: #dc3545;
}

.landing_inner p {
  color: #fff;
  font-size: 1.2rem;
}
.landing_inner .info_icon_group {
  color: #fff;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  padding-top:10px;
  align-items: flex-end;
}
.landing_inner .info_icon_group a {
  color: #ffffff;
}
.landing_inner .info_icon_group a:hover {
  color: #dc3545;
}
.info_tag::first-letter {
  color: #dc3545;
}
.landing_inner .info_tags {
  display: flex;
  color: #56fcff;
  cursor: pointer;
}
.landing_inner .info_tag {
  letter-spacing: 1px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 1.3rem;
}

@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}
.tracking-in-expand {
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
}
.tracking-in-expand .arrow {
  background: inherit;
  border: 1rem solid #e91e63;
}
.tracking-in-expand .arrow_left {
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  -webkit-animation: shake-left 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both infinite;
  animation: shake-left 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}
.tracking-in-expand .arrow_right {
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  -webkit-animation: shake-right 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both infinite;
  animation: shake-right 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) both
    infinite;
}
.tracking-in-contract-bck {
  animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .landing_outter .landing_main {
    width: 20rem;
    height: 30rem;
  }
  .landing_main .landing_inner {
    min-height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

@-webkit-keyframes shake-right {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
@keyframes shake-right {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}

@-webkit-keyframes shake-left {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}
@keyframes shake-left {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }
  10% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
}

</style>

<style lang="scss" scoped>

@import "../assets/fontface.scss";
    // @import url("https://fonts.googleapis.com/css?family=Lora:700");

$palette: #fe8a71;
$palette: #fe4a49;
$palette: #1da1f2;
$palette: #53a9c5;

*, *:after, *:before {
  box-sizing: border-box;
  // border: 1px dashed #FFF;
  backface-visibility: visible;
}

.wrapper {
  min-width: 100vw;
  // min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  // background: linear-gradient(-45deg, #111, #355);
  font-family: Lora, serif;

  overflow: hidden;
}

.hummingbird {
  $color-solid: $palette;
  $color-gradient: linear-gradient(to bottom, rgba(#77eeb4, 1), transparent);
  $color-gradient-realism: linear-gradient(to bottom, rgba(#77eeb4, 0.8), rgba(#53a9c5, 0.8), transparent);
  $color-inverted: linear-gradient(to left, rgba($color-solid, 1), transparent);

  $beak-color: linear-gradient(to top, #d1c6da, transparent);

  $wing-color: linear-gradient(to top, #d46f30, transparent);

  margin-top: 50px;
  width: 200px;
  height: 200px;

  perspective: 60rem;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out;
  transform-origin: center;

  pointer-events: none;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }

  .body {
    // background-color: rgba(250, 250, 250, 0.1);
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);

    animation: rotate 15s linear infinite;

    @keyframes rotate {
      100% {
        transform: rotateY(360deg);
      }
    }

    &:before, &:after {
      content: '';

      display: block;
      width: 70px;
      height: 100%;

      position: absolute;
      left: 50%;

      transform-origin: top right;
      background: $color-gradient-realism;
    }

    &:before {
      transform: rotateZ(30deg) rotateY(30deg);

      clip-path: polygon(0 0, 100% 10%, 100% 100%);
    }

    &:after {

      transform: rotateZ(30deg) rotateY(-30deg);

      clip-path: polygon(0 0, 100% 10%, 100% 100%);
    }

    .back {
      width: 60px;
      height: 100%;
      position: absolute;
      background: $color-gradient-realism;

      transform-style: preserve-3d;

      clip-path: polygon(0 0, 100% 0, 50% 100%);
      transform: rotateY(90deg) rotateX(-13deg) translateZ(55px) translateY(-45px);
    }

    .wings {
      position: absolute;
      left: 35%;
      top: 40px;
      height: 100%;
      transform-style: preserve-3d;

      &:before, &:after {
        content: '';

        display: block;
        width: 70px;
        height: 100%;

        position: absolute;
        left: 50%;
        top: -25px;

        transform-origin: top center;
        background: $wing-color;
      }

      &:before {
        // transform: rotateZ(160deg) rotateY(-20deg) translateZ(30px);

        clip-path: polygon(100% 0, 100% 100%, 0 0);

        animation: beating-left 2s ease-in-out infinite;

        @keyframes beating-left {
          0% { transform: rotateZ(-75deg) rotateY(-10deg) translateZ(30px) rotateX(0deg); }
          50% { transform: rotateZ(-75deg) rotateY(-10deg) translateZ(30px) rotateX(180deg); }
          100% { transform: rotateZ(-75deg) rotateY(-10deg) translateZ(30px) rotateX(0deg); }
        }
      }

      &:after {
        // transform: rotateZ(160deg) rotateY(20deg) translateZ(-30px);

        clip-path: polygon(100% 0, 100% 100%, 0 0);

        animation: beating-right 2s ease-in-out infinite;

        @keyframes beating-right {
          0% { transform: rotateZ(-75deg) rotateY(10deg) translateZ(-30px) rotateX(0deg); }
          50% { transform: rotateZ(-75deg) rotateY(10deg) translateZ(-30px) rotateX(-180deg); }
          100% { transform: rotateZ(-75deg) rotateY(10deg) translateZ(-30px) rotateX(0deg); }
        }
      }

    }

    .head {
      &:before, &:after {
        content: '';

        display: block;
        width: 50px;
        height: 30%;

        position: absolute;
        left: 55%;
        top: -45px;

        transform-origin: top right;
        background: $color-gradient;
      }

      &:before {
        transform: rotateZ(0deg) rotateY(40deg);

        clip-path: polygon(0 20%, 100% 0, 100% 100%);
      }

      &:after {

        transform: rotateZ(0deg) rotateY(-40deg);

        clip-path: polygon(0 20%, 100% 0, 100% 100%);
      }

      .nape {
        &:after {
          content: '';
          display: block;

          width: 50px;
          height: 35px;

          position: absolute;
          top: 0%;

          background: $color-gradient-realism;

          transform-origin: bottom center;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

          transform: rotateY(90deg) rotateX(-73deg) translateZ(-37px) translateY(-110px);

        }
      }

      .beak {
        &:before, &:after {
          content: '';

          display: block;
          width: 10px;
          height: 60%;

          position: absolute;
          left: 75%;
          top: -45px;

          transform-origin: top right;
          background: $beak-color;
        }

        &:before {
          transform: rotateZ(-105deg) rotateY(25deg);

          clip-path: polygon(0 0, 100% 1%, 100% 100%);
        }

        &:after {

          transform: rotateZ(-105deg) rotateY(-25deg);

          clip-path: polygon(0 0, 100% 1%, 100% 100%);
        }
      }
    }
  }

  .platform {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    transform: rotateX(90deg) translateZ(-100px);
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px dashed $palette;
    box-shadow: 0 0 50px 00px $palette;
    font-weight: bold;
  }
}

.title {
  color: #FFF;
  position: absolute;
  font-family: serif;
  font-size: 2.8rem;
  bottom: 10%;
  pointer-events: none;
  // background-color: red;

  // clip-path: polygon(0 0, 18% 0, 18% 75%, 25% 0, 100% 25%, 100% 100%, 0 75%);
}
</style>
