/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Demo extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (<div className="docMainWrapper wrapper">
        <script src="/js/fbjs-stable.js"></script>
        <script src="/js/fbjs-config.js"></script>
        <Container className="mainContainer documentContainer postContainer fbjs">
            <div className="post">
                <div className="flex-grid">
                    <div className="form"></div>
                    <div className="sort"></div>
                </div>
                <div className="flex-grid info-bar">
                    <div className="information"></div>
                    <div className="test-facets"></div>
                </div>
                <div className="no-results"></div>
                <div className="facets"></div>
                <div className="results-wrapper">
                    <div className="active-facets"></div>
                    <div className="best-bets"></div>
                    <div className="results"></div>
                </div>
                <div className="pagination"></div>
                <div className="context-nav"></div>
            </div>
        </Container>
    </div>)
  };
}

module.exports = Demo;
