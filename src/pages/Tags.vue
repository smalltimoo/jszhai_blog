<template>
  <div class="tag_container">
    <div class="tag_nav">
      <!-- <ul class="Tag-ul">
        <li
          v-for="tag in allTags"
          :key="tag"
        >
          <a @click="select(tag)">{{ tag }}</a>
        </li>
      </ul> -->
      <nav class="accordion arrows">
        <header class="box">
          <label for="acc-close" class="box-title">Accordion menu</label>
        </header>
        <div v-for="(tag, index) in allTags" :key="index">
           <input type="radio" name="accordion" :id="`cb${index+1}`" @click="select(tag)" />
            <section class="box">
              <label class="box-title" :for="`cb${index+1}`">{{tag}}</label>
              <label class="box-close" for="acc-close"></label>
              <div class="box-content">Click on an item to open. Click on its header or the list header to close.</div>
            </section>
        </div>
        <input type="radio" name="accordion" id="acc-close" />
      </nav>
    </div>
    <div class="tag_page_post_list">
      <PostList v-bind:defaultTag="this.selectedTag" />
    </div>
  </div>
</template>

<script>
import { postData } from "../utils/data.ts";
import { getAllTags } from "../utils/datafilter.ts";
export default {
  name: "Tags",
  data() {
    return {
      allTags: getAllTags(JSON.parse(postData)),
      // sliceTags: sliceArray(getAllTags(JSON.parse(postData))),
      selectedTag: "Git"
    };
  },
  components: {
    PostList: () => import("../components/PostList")
  },
  methods: {
    select: function(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>

<style scoped>
.post_list {
  margin-top: 6rem;
}
.tag_container {
  font-family: "Lato", sans-serif;
  max-width: 1000px;
  width: 1000;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tag_page_post_list {
  width: 55%;
}
.tag_nav {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100vh;
}
.tag_nav ul {
  list-style: none;
  margin-top: 2rem;
  padding-left: 2px;
  padding-right: 2px;
}
.tag_nav ul li {
  list-style-type: none;
  margin-right: 0.5rem;
  padding-bottom: 1rem !important;
  box-sizing: border-box;
  display: inline-block;
}
.tag_nav ul li a {
  cursor: pointer;
  border-radius: 6.1875rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4375rem 0.9375rem;
  color: #343a40b5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.5;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tag_nav ul li a:hover {
  font-weight: 900;
  background: #4caf506e;
  color: #ffffff;
  border: 0px;
  box-shadow: 0 4px 11px rgba(248, 250, 253, 0.35);
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .tag_container {
    flex-direction: column;
    width: 100%;
  }
  .tag_container .tag_page_post_list {
    width: 100%;
  }
  .tag_container .tag_nav {
    height: auto;
    width: 100%;
  }
  .tag_nav ul li a {
    font-size: 0.5rem;
  }
  .tag_nav ul li a:hover {
    font-weight: auto;
    background: #4caf506e;
    color: #ffffff;
    border: 0px;
    box-shadow: 0 4px 11px rgba(248, 250, 253, 0.35);
    transition: all 0.3s ease-in-out;
  }
}

.accordion {
  /* margin: auto; */
  /* width: 400px; */
}
.accordion input {
  display: none;
}
.box {
  position: relative;
  background: white;
  height: 64px;
  transition: all .15s ease-in-out;
}
.box::before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  box-shadow: 0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
}
header.box {
  background: #00BCD4;
  z-index: 100;
  cursor: initial;
  box-shadow: 0 -1px 0 #e5e5e5,0 0 2px -2px rgba(0,0,0,.12),0 2px 4px -4px rgba(0,0,0,.24);
}
header .box-title {
  margin: 0;
  font-weight: normal;
  font-size: 16pt;
  color: white;
  cursor: initial;
}
.box-title {
  width: calc(100% - 40px);
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
}
.box-content {
  width: calc(100% - 40px);
  padding: 30px 20px;
  font-size: 11pt;
  color: rgba(0,0,0,.54);
  display: none;
}
.box-close {
  position: absolute;
  height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}
input:checked + .box {
  height: auto;
  margin: 16px 0;
  box-shadow: 0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);
}
input:checked + .box .box-title {
  border-bottom: 1px solid rgba(0,0,0,.18);
}
input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
}
.arrows section .box-title {
  padding-left: 44px;
  width: calc(100% - 64px);
}
.arrows section .box-title:before {
  position: absolute;
  display: block;
  content: '\203a';
  font-size: 18pt;
  left: 20px;
  top: -2px;
  transition: transform .15s ease-in-out;
  color: rgba(0,0,0,.54);
}
input:checked + section.box .box-title:before {
  transform: rotate(90deg);
}

</style>
