import React from 'react';
// import PropTypes from 'prop-types';

import BocardListArticle from './BOcardListArticle';

const BOFilterArticle = ({ articles, loadData, status }) => (

  <div>
    <div>
      {articles && articles.filter(e => status.includes(e.blog_status)).map(article => (
        <BocardListArticle
          {...article}
          key={article.id_article}
          loadData={loadData}
        />
      ))}
    </div>
  </div>
);

export default BOFilterArticle;
