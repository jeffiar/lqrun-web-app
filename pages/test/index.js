/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import history from '../../core/history';
import Link from '../../components/Link';
import s from './styles.css';

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,
  };

  componentDidMount() {
    document.title = 'Test title' // in html header??
  }

  goBack = event => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    const title = 'This is the title.';

    return (
      <div className={s.container}>
        <main className={s.content}>
          <p className={s.title}>{title}</p>
          <p className={s.text}>
            Here is some beautiful text that goes in the body.
          </p>
          <p className={s.text}>
            <a href="/" onClick={this.goBack}>Go back</a>, or head over to the&nbsp;
            <Link to="/about">about page</Link> or go <Link to="/">home</Link>.
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
