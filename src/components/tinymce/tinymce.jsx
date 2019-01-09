import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

class Tinymce extends Component {
  state = { articletest: '' }

  componentDidMount() {
    axios.get('http://localhost:3001/api/articles/blog')
      .then(res => this.setState({
        articletest: res.data[0].content,
      }));
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        apiKey="hmhb0q3jflv1kbo7mw4bqbaem0hbltrpxpk1xmeo7f45i9mf"
        initialValue={this.state.articletest}
        init={{
          selector: 'textarea',
          height: 300,
          width: 900,
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
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default Tinymce;
