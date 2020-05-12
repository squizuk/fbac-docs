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
            <script src="/js/fbac.js"></script>
            <script src="/js/fbac-config.js"></script>
            <Container>
                <form>
                    <input
                        type="text"
                        name="query"
                        id="search"
                        autoComplete="off"
                    />
                    <button type="submit">Submit</button>
                </form>
                <div id="fbac"></div>
            </Container>
        </div>)
    };
}

module.exports = Demo;
