import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import Intro from '../views/Intro.vue';
import History from '../views/History.vue';
import Greetings from '../views/Greetings.vue';
import Organization from '../views/Organization.vue';
import BoardList from '../views/BoardList.vue';
import BoardDetail from '../views/BoardDetail.vue';
import BoardCreate from '../views/BoardCreate.vue';
import BoardEdit from '../views/BoardEdit.vue';
import OnlineService from '../views/OnlineService.vue';
import VisitService from '../views/VisitService.vue';
import DelyveryService from '../views/DelyveryService.vue';
import ReservationService from '../views/ReservationService.vue';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import UserDetail from '../views/UserDetail.vue';
import QnaList from '@/views/QnaList.vue';
import QnaDetail from '@/views/QnaDetail.vue';
import QuestionCreate from '@/views/QuestionCreate.vue';
import AnswerCreate from '@/views/AnswerCreate.vue';
import QnaEdit from '@/views/QnaEdit.vue';
import Faq from '@/views/Faq.vue';
import SendEmail from '@/views/SendEmail.vue';
import Chat from '@/views/Chat.vue';
import DataList from '@/views/DataList.vue';
import DataDetail from '@/views/DataDetail.vue';
import DataCreate from '@/views/DataCreate.vue';
import DataEdit from '@/views/DataEdit.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/company/intro', component: Intro },
  { path: '/company/history', component: History },
  { path: '/company/greetings', component: Greetings },  
  { path: '/company/organization', component: Organization },
  { path: '/community/notice', component: BoardList },  
  { path: '/board/list', component: BoardList },
  { path: '/board/create', component: BoardCreate },
  { path: '/board/:id', name: 'BoardDetail', component: BoardDetail, props: true },
  { path: '/board/edit/:id', name: 'BoardEdit', component: BoardEdit, props: true },
  { path: '/service/online', component: OnlineService },
  { path: '/service/visit', component: VisitService },
  { path: '/service/delivery', component: DelyveryService },
  { path: '/service/reservation', component: ReservationService },
  { path: '/products', component: ProductList },
  { path: '/product/list', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true},
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/user/:id', component: UserDetail, props: true },
  { path: '/qna/list', component: QnaList },
  { path: '/qna/:id', component: QnaDetail, props: true },
  { path: '/qna/create', component: QuestionCreate },
  { path: '/qna/answer/:id', component: AnswerCreate, props: true },
  { path: '/qna/edit/:id', component: QnaEdit, props: true },
  { path: '/qnas', redirect: '/qna/list' },
  { path: '/data/list', name: 'DataList', component: DataList },
  { path: '/data/:id', name: 'DataDetail', component: DataDetail, props: true },
  { path: '/data/create', name: 'DataCreate', component: DataCreate },
  { path: '/data/edit/:id', name: 'DataEdit', component: DataEdit, props: true },
  { path: '/community/faq', component: Faq },
  { path: '/send-email', component: SendEmail },
  { path: '/chat', component: Chat }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;