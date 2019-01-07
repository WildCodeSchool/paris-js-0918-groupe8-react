import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import Blog from '../components/blog/card';
import GetArticles from '../components/boarticle/GetArticles';

const BlogArticle = () => (
  <div>
    <Navbar />
    <GetArticles />
    <Blog />
    <Footer />
  </div>
);


export default BlogArticle;
