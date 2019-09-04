<template>
  <div class="gallery-container">
    <div class="gallery-header">
      <div class="logo">
        <span class="name">Smalltimoo</span>
        <span class="text">Photography</span>
      </div>
    </div>
    <div class="gallery-photo-container">
      <div class="photo-list">
        <div class="single-photo-parent" v-for="(item,index) in firstColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
      <div class="photo-list">
        <div class="single-photo-parent" v-for="(item,index) in secondColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
      <div class="photo-list">
        <div class="single-photo-parent" v-for="(item,index) in thirdColumnPhotos" :key="index">
          <img :src="item.url" :alt="item.description" class="img-responsive">
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { photoData } from "../utils/photoData";
import {SYSTEM} from "../utils/system.ts";
import { value, onMounted } from 'vue-function-api';
/** 主页 */
export default {
  props: {
    name: 'Gallery'
  },
  setup(props, context) {
    const firstColumnPhotos = value([]);
    const secondColumnPhotos = value([]);
    const thirdColumnPhotos = value([]);
    // eslint-disable-next-line
    const handlePostLink = ((index, dir = "post") => {
      window.localStorage.setItem(
        "currentPosts",
        JSON.stringify(context.parent.currentPosts)
      );
      let postName = context.parent.currentPosts[index].name;
      context.parent.$router.push(`/${dir}/${postName}`);
    });
    onMounted(() => {
      if (photoData) {
        const power = sessionStorage.getItem('password') === SYSTEM.PASSWORD ? 1 : 0;
        const photos = power ? photoData.filter(_ => _.type !== 'private') : photoData;
        for (let x = 0; x < photos.length; x += 3) {
          if (photos[x]) {
            firstColumnPhotos.value.push(photos[x]);
          }
          if (photos[x + 1]) {
            secondColumnPhotos.value.push(photos[x + 1]);
          }
          if (photos[x + 2]) {
            thirdColumnPhotos.value.push(photos[x + 2]);
          }
        }
      }
    });
    return {
      firstColumnPhotos,
      secondColumnPhotos,
      thirdColumnPhotos,
      handlePostLink
    };
  },
  filters: {
    moment (date) {
      return moment(date).format("MMMM Do YYYY");
    },
    daysAgo (date) {
      let days = new Date() - new Date(date);
      return parseInt(days / (1000 * 60 * 60 * 24));
    }
  }

};
</script>

<style scoped>
.gallery-container {
  margin-top: 3rem;
  padding: 2rem 3rem;
}
.gallery-header {
  margin-bottom: 2rem;
}
.gallery-header .logo {
  color: #000000;
}
.gallery-photo-container {
  display: flex;
}
.gallery-header .logo .name {
  display: block;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
.gallery-header .logo .text {
  display: block;
  text-transform: uppercase;
  font-size: 0.55rem;
  letter-spacing: 8.6px;
  opacity: 0.3;
}
.photo-list {
  max-width: 33%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.photo-list .single-photo-parent {
  display: inline-block;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.single-photo-parent img {
  height: auto;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-top-right-radius: calc(0.25rem - 1px);
  border-top-left-radius: calc(0.25rem - 1px);
}

.single-photo-parent:hover {
  -webkit-box-shadow: 0 18px 32px -18px #000;
  box-shadow: 0 18px 32px -18px #000;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}
.single-photo-parent .photo-info {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
  border: 1px solid #cccccc75;
  padding: 1rem 2rem;
  display: flex;
  opacity: 0;
  justify-content: space-around;
  color: #cccccc;
}

.single-photo-parent:hover .photo-info {
  display: flex;
  opacity: 1;
  cursor: pointer;
}
.photo-info span {
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #ffffff;
  font-size: 0.8rem;
}
.single-photo-parent:hover span {
  border-bottom-color: #cccccc;
  color: #8d8d8d;
}
</style>
