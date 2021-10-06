
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import FormPage from '../pages/form.svelte';

import LeftPage1 from '../pages/left-page-1.svelte';
import LeftPage2 from '../pages/left-page-2.svelte';
import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';

import BlogsPage from "../pages/blogs/blogs.svelte"

import TorrentsApp from "../pages/torrentsearchs/torrents.svelte"

import ThreeJsApp from "../pages/threejs/editor.svelte"

import MBAccueil from "../pages/mb/accueil.svelte"

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    "path": "/mb/",
    component: MBAccueil
  },
  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/blogs/',
    component: BlogsPage,
  },
  {
    path: '/torrents/',
    component: TorrentsApp
  },
  {
    path: '/threejs/',
    component: ThreeJsApp
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
