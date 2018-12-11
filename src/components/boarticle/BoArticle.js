import React, { Component } from 'react';


class BoArticle extends Component {
  render() {
    return (
      <div>
        <div className="dib v-mid tc flex justify-center">
          <form method="post" action="traitement.php">
            <p className="b">
              <label className="f1 ttu tracked mt0" htmlFor="article">
								Article

              </label>
              <br />
              {' '}
              <br />
              {' '}
              <br />
              <textarea name="article" id="article" rows="30" cols="100" />
            </p>
          </form>
        </div>

        <div className="dib v-mid tc flex justify-center">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            value="Valider"
          />
        </div>
      </div>
    );
  }
}

export default BoArticle;
