import React from 'react';

import { Editor } from '@tinymce/tinymce-react';

require('dotenv').config();

const Tinymce = props => (

  <div>
    <Editor
      apiKey="hmhb0q3jflv1kbo7mw4bqbaem0hbltrpxpk1xmeo7f45i9mf"
      // apiKey={(process.env.TINYMCE_API_KEY)}

      initialValue={(props.article_content || '').content}
      init={{
        selector: 'textarea',
        height: 300,
        width: 600,
        menubar: true,
        block_formats: 'Header 1=h3;Header 2=h4;Header 3=h5;Header 4=h6;Paragraph=p;',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_css: [
          '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
          '//www.tiny.cloud/css/codepen.min.css',
        ],
      }}
      onChange={props.handle}
    />
  </div>
);
export default Tinymce;
