import { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteName.Home,
    component: () => import("../views/Home.vue"),
  },
];

export default routes;