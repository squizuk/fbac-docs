/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="docMainWrapper wrapper demoWrapper">
            <script src="/js/fbac.js"></script>
            <script src="/js/fbac-config.js"></script>
            <Container>
                <div className="fbac__note">Please note that the demo config has not been transpiled by Babel and therefore it won't work correctly on older browsers, such as IE9. The decision to not transpile the code has been made because of the better code readability (see <i>/js/fbac-config.js</i> script).</div>
                <form className="fbac__form">
                    <input
                        type="text"
                        name="query"
                        id="search"
                        autocomplete="off"
                    />
                    <button type="submit">Submit</button>
                </form>
                <div id="fbac"></div>
            </Container>
        </div>)
    };
}

module.exports = Demo;
