import Home from '../screens/Home';
import Charte from '../screens/Charte';
import Bio from '../screens/Bio';
import BlogList from '../screens/BlogList';
import BlogArticle from '../screens/BlogArticle';
import BOaccueil from '../screens/BOaccueil';
import BOarticles from '../screens/BOarticles';
import BOSetArticle from '../screens/BOSetArticle';
import BObio from '../screens/BObio';
import BOEditionAccueil from '../screens/BOEditionAccueil';
import BOCharte from '../screens/BOCharte';
import BOcoms from '../screens/BOcoms';
import BOadmin from '../screens/BOadmin';
import Biomathias from '../components/biomathias/biomathias';
import Bioanais from '../components/bioanais/bioanais';

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
    path: '/blog',
    name: 'Blog',
    component: BlogList,
  },
  {
    path: '/#about',
    name: 'À propos',
    component: Bio,
  },
  {
    path: '/#contact',
    name: 'Contact',
    component: null,
  },
  {
    path: '/mathiassavary',
    name: null,
    component: Biomathias,
  },
  {
    path: '/anaisjaunay',
    name: null,
    component: Bioanais,
  },
  {
    path: '/blog/:article',
    name: null,
    component: BlogArticle,
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: BOaccueil,
  },
  {
    path: '/admin/articles',
    name: 'Articles',
    component: BOarticles,
  },
  {
    path: '/admin/articles/edition/:id_article',
    name: null,
    component: BOSetArticle,
  },
  {
    path: '/admin/articles/add',
    name: null,
    component: BOSetArticle,
  },
  {
    path: '/admin/bio/:id',
    name: null,
    component: BObio,
  },
  {
    path: '/admin/bio/1',
    name: 'Bio Anaïs',
    component: BObio,
  },
  {
    path: '/admin/bio/2',
    name: 'Bio Mathias',
    component: BObio,
  },
  {
    path: '/admin/editionaccueil',
    name: 'Edition Accueil',
    component: BOEditionAccueil,
  },
  {
    path: '/admin/charte',
    name: 'Charte longue',
    component: BOCharte,
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
