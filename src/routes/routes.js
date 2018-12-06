import Home from '../screens/Home';
import Charte from '../screens/Charte';
import Bio from '../screens/Bio';
import BlogList from '../screens/BlogList';
import BlogArticle from '../screens/BlogArticle';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
  },
  {
    path: '/charte',
    name: 'Charte',
    component: Charte,
  },
  {
    path: '/about',
    name: 'A propos',
    component: Bio,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogList,
  },
  {
    path: '/article',
    name: 'Article',
    component: BlogArticle,
  },
];
export default routes;
