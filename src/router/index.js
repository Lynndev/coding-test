import Vue from "vue";
import VueRouter from "vue-router";

function lazyLoad(component) {
  return () => import(`@/views/${component}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/create-patient",
    name: "CreatePatient",
    component: lazyLoad("CreatePatient"),
  },
  {
    path: "/edit-patient/:id",
    name: "EditPatient",
    component: lazyLoad("EditPatient"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
