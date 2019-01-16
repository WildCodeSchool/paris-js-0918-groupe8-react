import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';


class Tinymce extends Component {
  /* state = {
    articleContent: '',
  } */

  /*  componentDidMount() {
    axios.get(`/api/articles/blog/${this.props.match.params.id_article}`)
      .then(res => this.setState({
        articleContent: res.data[0].content,
      }));
  } */

  /*   handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }
 */
  render() {
    // console.log(this.props.article_content.content);
    return (
      <Editor
        apiKey="hmhb0q3jflv1kbo7mw4bqbaem0hbltrpxpk1xmeo7f45i9mf"
        initialValue={(this.props.article_content || '').content}
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
        onChange={this.props.handle}
      />
    );
  }
}

export default Tinymce;
