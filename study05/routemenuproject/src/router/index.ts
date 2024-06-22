import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import CompanyIntro from '../views/company/Intro.vue';
import CompanyHistory from '../views/company/History.vue';
import CompanyGreetings from '../views/company/Greetings.vue';
import CompanyOrganization from '../views/company/Organization.vue';
import Product from '../views/Product.vue';
import ProductA01 from '../views/product/A01.vue';
import ProductB01 from '../views/product/B01.vue';
import ProductC01 from '../views/product/C01.vue';
import ProductD01 from '../views/product/D01.vue';
import Service from '../views/Service.vue';
import ServiceOnline from '../views/service/Online.vue';
import ServiceVisit from '../views/service/Visit.vue';
import ServiceDelivery from '../views/service/Delivery.vue';
import ServiceReservation from '../views/service/Reservation.vue';
import Community from '../views/Community.vue';
import CommunityNotice from '../views/community/Notice.vue';
import CommunityQnA from '../views/community/QnA.vue';
import CommunityFAQ from '../views/community/FAQ.vue';
import CommunityOnline from '../views/community/Online.vue';
import CommunityChatbot from '../views/community/Chatbot.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/company', component: Company,
    children: [
      { path: 'intro', component: CompanyIntro },
      { path: 'history', component: CompanyHistory },
      { path: 'greetings', component: CompanyGreetings },
      { path: 'organization', component: CompanyOrganization }
    ]
  },
  { path: '/product', component: Product,
    children: [
      { path: 'a01', component: ProductA01 },
      { path: 'b01', component: ProductB01 },
      { path: 'c01', component: ProductC01 },
      { path: 'd01', component: ProductD01 }
    ]
  },
  { path: '/service', component: Service,
    children: [
      { path: 'online', component: ServiceOnline },
      { path: 'visit', component: ServiceVisit },
      { path: 'delivery', component: ServiceDelivery },
      { path: 'reservation', component: ServiceReservation }
    ]
  },
  { path: '/community', component: Community,
    children: [
      { path: 'notice', component: CommunityNotice },
      { path: 'qna', component: CommunityQnA },
      { path: 'faq', component: CommunityFAQ },
      { path: 'online', component: CommunityOnline },
      { path: 'chatbot', component: CommunityChatbot }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;