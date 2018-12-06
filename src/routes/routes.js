import Home from '../screens/Home';
import Charte from '../screens/Charte';
import Bio from '../screens/Bio';
import BlogList from '../screens/BlogList';
import BlogArticle from '../screens/BlogArticle';
import BOaccueil from '../screens/BOaccueil';
import BOarticles from '../screens/BOarticles';
import BObio from '../screens/BObio';
import BOmedias from '../screens/BOmedias';
import BOcoms from '../screens/BOcoms';
import BOadmin from '../screens/BOadmin';

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
  {
    path: '/admin',
    name: 'Accueil',
    component: BOaccueil,
  },
  {
    path: '/admin/articles',
    name: 'Articles',
    component: BOarticles,
  },
  {
    path: '/admin/bio',
    name: 'Bio',
    component: BObio,
  },
  {
    path: '/admin/medias',
    name: 'Médias',
    component: BOmedias,
  },
  {
    path: '/admin/commentaries',
    name: 'Commentaires',
    component: BOcoms,
  },
  {
    path: '/admin/admin',
    name: 'Administrateurs',
    component: BOadmin,
  },
];
export default routes;
