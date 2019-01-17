import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Tinymce = props => (
  <div>
    {' '}
    <Editor
      apiKey="hmhb0q3jflv1kbo7mw4bqbaem0hbltrpxpk1xmeo7f45i9mf"
      initialValue={(props.article_content || '').content}
      init={{
        selector: 'textarea',
        height: 300,
        width: 600,
        menubar: true,
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
