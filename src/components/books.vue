<template>
    <div class="books scroll">
        <!--头部部分-->
       <div class="header">
           <div class="top">
               <span>书影音</span>
               <a href="#">
                   <i class="iconfont icon-icon-test"></i>
               </a>
               <a href="#">
                   <i class="iconfont icon-liaotian"></i>
               </a>
           </div>
           <div class="bottom">
               <a class="active" href="#">
                   <span>电影</span>
               </a>
               <a href="#">
                   <span>电视</span>
               </a>
               <a href="#">
                   <span>综艺</span>
               </a>
               <a href="#">
                   <span>读书</span>
               </a>
               <a href="#">
                   <span>同城</span>
               </a>
               <a href="#">
                   <span>音乐</span>
               </a>
           </div>
       </div>
       <!--banner-->
        <div class="banner">
            <a href="#">
                <img class="response-img" src="../../static/image/Screenshot_2018-03-20-15-20-37_02.jpg"/>
            </a>
        </div>
        <!--今日推荐-->
        <div class="books-box">
            <div class="title">
                <span>今日推荐</span>
                <a href="#">
                    全部12 <i class="iconfont icon-gengduo"></i>
                </a>
            </div>
            <div class="slide">
                <ul>
                    <li class="item">
                        <a href="#">
                            <img src="http://img4.imgtn.bdimg.com/it/u=1910307546,2433878594&fm=27&gp=0.jpg" alt=""/>
                            <span class="label">新片来了</span>
                            <p><span>只看预告就瑟瑟发抖,本年度最恐怖电影非他莫属</span></p>
                        </a>
                    </li>
                    <li class="item">
                        <a href="#">
                            <img src="http://img1.imgtn.bdimg.com/it/u=260640646,3349539639&fm=27&gp=0.jpg" alt=""/>
                            <span class="label">今晚有空</span>
                            <p><span>场景美设定佳,今年最佳科幻片被它锁定</span></p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--找电影-->
        <div class="my-video">
            <div class="left">
                <a href="#">
                    <i class="iconfont icon-weibiaoti557"></i>
                    <h3>找电影</h3>
                    <p>文艺/动作/豆瓣高分</p>
                    <span class="iconfont icon-gengduo"></span>
                </a>
            </div>
            <div class="right">
                <a href="#">
                    <i class="iconfont icon-shoucang"></i>
                    <h3>我的影视</h3>
                    <p>未登陆</p>
                    <span class="iconfont icon-gengduo"></span>
                </a>
            </div>
        </div>
        <!--影院热映-->
        <div class="books-box">
            <div class="title">
                <span>影院热映</span>
            </div>
            <div class="slide">
                <ul>
                    <li class="film">
                        <a href="#">
                            <img src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2512717509.jpg" alt=""/>
                            <span>古墓丽影：源起之战</span>
                            <div class="score">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span>★</span>
                                <span>★</span>
                                <b>6.3</b>
                            </div>
                            <a class="add" href="#">
                                <i class="iconfont icon-jiahao"></i>
                            </a>
                        </a>
                    </li>
                    <li class="film">
                        <a href="#">
                            <img src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2515650989.jpg" alt=""/>
                            <span>水形物语</span>
                            <div class="score">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span>★</span>
                                <span>★</span>
                                <b>6.3</b>
                            </div>
                            <a class="add" href="#">
                                <i class="iconfont icon-jiahao"></i>
                            </a>
                        </a>
                    </li>
                    <li class="film">
                        <a href="#">
                            <img src="https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2512123434.jpg" alt=""/>
                            <span>黑豹</span>
                            <div class="score">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span>★</span>
                                <span>★</span>
                                <b>6.3</b>
                            </div>
                            <a class="add" href="#">
                                <i class="iconfont icon-jiahao"></i>
                            </a>
                        </a>
                    </li>
                    <li class="film">
                        <a href="#">
                            <img src="https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2514119443.jpg" alt=""/>
                            <span>红海行动</span>
                            <div class="score">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span>★</span>
                                <span>★</span>
                                <b>6.3</b>
                            </div>
                            <a class="add" href="#">
                                <i class="iconfont icon-jiahao"></i>
                            </a>
                        </a>
                    </li>
                    <li class="film">
                        <a href="#">
                            <img src="https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2510956726.jpg" alt=""/>
                            <span>小萝莉的猴神大叔</span>
                            <div class="no-score">
                                <span>
                                    暂无评论
                                </span>
                            </div>
                            <a class="add" href="#">
                                <i class="iconfont icon-jiahao"></i>
                            </a>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--影院即将上线-->
        <div class="books-box">
            <div class="title">
                <span>影院即将上线</span>
                <a href="#">
                    更多
                </a>
            </div>
        </div>
        <div class="gasket"></div>
    </div>
</template>

<script>
  export default {
    name: "books"
  }
</script>

<style scoped>

</style>