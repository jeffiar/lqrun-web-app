/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  // old stuff
        // <ul>
        //   {this.props.articles.map((article, i) =>
        //     <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
        //   )}
        // </ul>

  render() {
    return (
      <Layout className={s.content}>
        <h1>LQRun!</h1>
        <p>
          Welcome!
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
