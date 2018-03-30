<template>
    <div class="box tabLink">
        <div class="box-container">
            <div class="box-size-20">
                <router-link :to="{name:'index'}" exact>
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </router-link>
            </div>
            <div class="box-size-20">
                <router-link :to="{name:'books'}">
                    <i class="iconfont icon--"></i>
                    <p>书影音</p>
                </router-link>
            </div>
            <div class="box-size-20">
                <a href="#">
                    <i class="iconfont icon-file"></i>
                    <p>广播</p>
                </a>
            </div>
            <div class="box-size-20">
                <a href="#">
                    <i class="iconfont icon-zuzhi-"></i>
                    <p>小组</p>
                </a>
            </div>
            <div class="box-size-20">
                <a href="#">
                    <i class="iconfont icon-wode"></i>
                    <p>我的</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "tab-link"
  }
</script>

<style lang="less">
    @import "../../static/stylesheet/mixin";
    .tabLink{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        .pxtorem(height,103);
        border-top: 1px solid #e4e4e4;
        background: white;
        .box-container{
            height: 100%;
            .box-size-20{
                height: 100%;
                a{
                    display: block;
                    height: 100%;
                    padding-top: 20px;
                    i,p{
                        color: #bababa;
                    }
                    i{
                        font-size: .5rem;
                    }
                    p{
                        font-size: .35rem;
                    }
                }
                a.active{
                    i,p{
                        color: #42bd56;
                    }
                }
            }
        }
    }
</style>