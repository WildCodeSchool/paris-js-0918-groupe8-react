import Home from '../screens/Home';
import Bio from '../screens/Bio';
import Blog from '../screens/BlogList';
import Article from '../screens/BlogArticle';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'A propos',
    component: Bio,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    redirect: true,
    path: '/',
    pathTo: '/dashboard',
    name: 'Dashboard',
  },
];
export default routes;
