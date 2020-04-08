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

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'installation',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Getting familiar with core files of FBJS might help you understaning how it works. You can find them in `global/fbjs` repository.',
      title: 'Check repository',
    },
    {
      content: "If you have any questions, consider asking them through our StackOverflow with `#fbjs` tag",
      title: 'Have a question?',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
            <p>If you still don't understand some of the concepts or you've found the bug<br/> either in FBJS or documentation, contact <a href="mailto:achatys@squiz.co.uk">Arkadiusz Chatys (achatys@squiz.co.uk)</a></p>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
