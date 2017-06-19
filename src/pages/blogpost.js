import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';

class Blogpost extends Component {

  // //   return { isServer };
  // // }
  //
  // componentDidMount () {
  //
  // }
  //
  // componentWillUnmount () {
  // }

  render() {
    return (
      <div>
        <h1>
          Blog Post
        </h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <br/>
        <Link href="/about">
          <a>About</a>
        </Link>
        <br/>
        <br/>
        <p>Title</p>
        <input size="30" />
        <br/>
        <p>Body</p>
        <input size="30" />
      </div>
    );
  }
}



export default withRedux(initStore)(Blogpost);
