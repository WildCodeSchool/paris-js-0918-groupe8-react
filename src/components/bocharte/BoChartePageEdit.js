import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import PropTypes from 'prop-types';
import TinymceCharte from '../tinymce/tinymceCharte';


class SetChartePage extends Component {
  state = {
    chartePage: {
      title: '',
      main_picture: '',
      content: '',
    },
  };

  componentDidMount() {
    this.setCharte();
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }


  setCharte = async () => {
    const response = await axios.get('/api/articles/charte-long');
    // console.log(`setEdit = ${Object.entries(responseject.entries(response)}`);
    // console.log(`setEdit = ${response.data[0].blog_status}`);
    this.setState({
      chartePage: response.data[0],
    });
  }


  updateCharte = async (e) => {
    e.preventDefault();
    const { chartePage } = this.state;
    const token = localStorage.getItem('token');
    await axios.put('/api/articles/charte-long', {
      title: chartePage.title,
      main_picture: chartePage.main_picture,
      content: chartePage.content,
    },
    { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        if (response.status === 200) {
          alert('Modification prise en compte');
        } else if (response.status !== 200) {
          alert('Mise à jour echouée');
        }
      });
  }

  handleEditorChangeCharte = (e) => {
    const chartePage = { ...this.state.chartePage };
    chartePage.content = e.target.getContent();
    this.setState({ chartePage });
  }

  handleChangeCharte = (e) => {
    this.setState({
      chartePage: { 
        ...this.state.chartePage, 
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmitCharte = (event) => {
    this.updateCharte(event);
  }

  render() {
    const { chartePage } = this.state;

    return (
      <div className="row">
        <form onSubmit={this.handleSubmitCharte}>
          <label htmlFor="title">
            Titre
            <input
              name="title"
              id="title"
              value={(chartePage || '').title}
              onChange={this.handleChangeCharte}
            />
          </label>

          <label htmlFor="image">
            Image
            <input
              name="main_picture"
              id="image"
              value={(chartePage || '').main_picture}
              onChange={this.handleChangeCharte}
            />
          </label>

          <div className="Editeurtinymceadmnistrateur">
            <TinymceCharte
              charte_content={chartePage.content}
              charte_handle={this.handleEditorChangeCharte}
            />
          </div>

          <button
            type="submit"
            className="btn-floating btn-meddium tooltipped waves-effect waves-light"
            data-position="bottom"
            data-tooltip="Valider"
          >
            <i className="material-icons">
              description
            </i>
          </button>

        </form>
      </div>
    );
  }
}

SetChartePage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SetChartePage;
