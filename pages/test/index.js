
import React from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link'
import s from './styles.css';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <main>
        <h2>Test Page</h2>
        <p>
          The content of the page goes here.
          Here is a <Link to="/">link to the home page</Link>
        </p>
        </main>
      </Layout>
    );
  }

}

export default AboutPage;
