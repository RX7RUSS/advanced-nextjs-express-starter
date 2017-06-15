import React, {Component} from 'react';
import Link from 'next/link';
// import Header from '../cmoponents/Header';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <br/>
        <Link href="/blogpost">
          <a>Blog</a>
        </Link>
      </div>
    );
  }
}


export default withRedux(initStore)(IndexPage);
