<template>
    <div class="douban scroll">
        <!--搜索框-->
        <div class="search">
            <div class="search-container">
                <div class="search-icon">
                    <i class="iconfont icon-icon-test"></i>
                </div>
                <div class="search-form">
                    <input type="search" placeholder="影视、图书、唱片、小组"/>
                </div>
                <div class="search-qrcode">
                    <a href="#">
                        <i class="iconfont icon-saomiaoerweima"></i>
                    </a>
                </div>
                <div class="speak">
                    <a href="#">
                        <i class="iconfont icon-liaotian"></i>
                    </a>
                </div>
            </div>
        </div>
        <!--豆瓣导航-->
        <div class="box douban_nav">
            <div class="box-container">
                <div class="box-size-25">
                    <a href="#">豆瓣时间</a>
                </div>
                <div class="box-size-25">
                    <a href="#">市集</a>
                </div>
                <div class="box-size-25">
                    <a href="#">书店</a>
                </div>
                <div class="box-size-25">
                    <a href="#">豆瓣视频</a>
                </div>
            </div>
        </div>
        <!--新闻列表-->
        <div class="box">
            <div class="box-container">
                <div class="news_list" v-for="item in news">
                    <div class="top">
                        <div class="left">
                            <h3>
                                {{item.title}}
                            </h3>
                            <p>{{item.describe}}</p>
                        </div>
                        <div class="right">
                            <img :src="item.cover"/>
                        </div>
                    </div>
                    <div class="bottom">
                        <img :src="item.author.photo"/>
                        <span>{{item.author.name}}</span>
                        <a class="shielding" href="javascript:void(0);">...</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="gasket"></div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data(){
      return{
        news:[]
      }
    },
    mounted: function () {
      let self = this;
      axios.get('../../static/json/news.json').then(function (doc) {
        self.news = doc.data;
      })
    }
  }
</script>