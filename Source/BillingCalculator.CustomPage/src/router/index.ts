import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";
import { BillingCalculator } from "../components";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/billing-calculator" },
  {
    path: "/billing-calculator",
    name: "Billing Calculator",
    component: BillingCalculator,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
