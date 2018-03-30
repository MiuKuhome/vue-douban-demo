import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import books from '@/components/books'

Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  this.go(-1);
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },{
      path: 'books',
      name: 'books',
      component: books
    }
  ],
  linkActiveClass:"active"
})
