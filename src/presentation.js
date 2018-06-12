// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, Link, Appear, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  architecture: require("./assets/Elm_Architecture.png"),
  cmdArchitecture: require("./assets/ElmArchitecture2.png"),
  errorMessage: require("./assets/ErrorMessages.png"),
  undef: require("./assets/undefined-is-not-a-function.jpg"),
  beyonce: require("./assets/Bey.gif"),
  model: require("./assets/Model.png"),
  view: require("./assets/View.png"),
  viewTwo: require("./assets/ViewTwo.png"),
  update: require("./assets/update.png"),
  decoder: require("./assets/Decoder.png"),
  aliasOne: require("./assets/withoutTypeAlias.png"),
  alias: require("./assets/TypeAlias.png"),
  before: require("./assets/before.png"),
  annotation: require("./assets/typeAnnotation.png"),
  union: require("./assets/UnionTypes.png"),
  init: require("./assets/Init.png"),
  json: require("./assets/JSON.png"),
  function: require("./assets/function.png"),
  jsFunction: require("./assets/functionJS.png"),
  htmlFunction: require("./assets/ElmFunction@2xTwo.png")
};

// const video = require('./assets/elm-videos/ElmDemo.mov');

const theme = createTheme(
  {
    primary: "white",
    black: "#000",
    blue: "#233d4d",
    teal: "#048a81",
    lavender: "#8a89c0",
    purple: "#5d576b",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#8a89c0"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const listStyle = {
  "list-style": "none"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            JavaScript
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            The Good
          </Heading>
          <List fit style={listStyle} textColor="primary">
            <Appear>
              <ListItem>Flexible</ListItem>
            </Appear>
            <Appear>
              <ListItem>Relatively beginner-friendly</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            The Bad
          </Heading>
          <Appear>
            <div>
              <Image width="55%" height="55%" src={images.undef.replace("/", "")} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            What if there were a different way?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Branching out with Elm
          </Heading>
          <Appear fid="1">
            <Text margin="5% auto" textColor="tertiary">
              Friendly Functional Programming for your Frontend Toolkit
            </Text>
          </Appear>
          <Text margin="200px 60% 0" textColor="tertiary" size={5}>
            @LaurenBeatty13
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} lineHeight={1} textColor="primary">
            Elm
          </Heading>
          <List fit style={listStyle} textColor="primary">
            <Appear>
              <ListItem>Compiles to JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Statically-typed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Functional Programming Language</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <BlockQuote>
            <Quote>Functional Programming</Quote>
            <Appear>
              <Cite>That sounds intimidating</Cite>
            </Appear>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            What is it?
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Immutability</ListItem>
            </Appear>
            <Appear>
              <ListItem>Stateless Functions</ListItem>
            </Appear>
            <Appear>
              <ListItem>No Side Effects</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} lineHeight={1} textColor="primary">
            Why Elm?
          </Heading>
          <List style={listStyle} textColor="primary">
            <Appear>
              <ListItem>No run-time errors!</ListItem>
            </Appear>
            <Appear>
              <ListItem>Scalable, well-architected code</ListItem>
            </Appear>
            <Appear>
              <ListItem>Great Developer Experience</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Hallmark of Elm?
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Everything's a function!</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Image width="100%" height="100%" src={images.jsFunction.replace("/", "")} />
          <Appear>
            <Image width="100%" height="100%" src={images.function.replace("/", "")} />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Image width="100%" height="100%" src={images.htmlFunction.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Let's see Elm at Work
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            How does Elm guarantee no RTEs?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Type System
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Compiler traces flow of data</ListItem>
            </Appear>
            <Appear>
              <ListItem>Compiler just figures out types for you</ListItem>
            </Appear>
            <Appear>
              <ListItem>Type Inference</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Type Annotations
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Like comments for your code</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Image width="100%" height="100%" src={images.annotation.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Type Alias
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Makes annotations concise</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy re-use</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Image width="90%" height="90%" src={images.aliasOne.replace("/", "")} />
        </Slide>
        <Slide bgColor="teal">
          <Image width="80%" height="80%" src={images.alias.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Union Types
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>Data with a different shape</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Image width="100%" height="100%" src={images.union.replace("/", "")} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            How does Elm's code stay well-architected?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            The Elm Architecture
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Image width="75%" height="75%" src={images.architecture.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Model
          </Heading>
          <Image width="75%" height="75%" src={images.model.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            View
          </Heading>
          <Image width="100%" height="100%" src={images.view.replace("/", "")} />
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            View Part II
          </Heading>
          <Image width="100%" height="100%" src={images.viewTwo.replace("/", "")} />
        </Slide> */}
        <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Update
          </Heading>
          <Image width="100%" height="100%" src={images.update.replace("/", "")} />
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="blue" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Decoding Json
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Image width="75%" height="75%" src={images.json.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="teal" textColor="tertiary">
          <Image width="75%" height="75%" src={images.decoder.replace("/", "")} />
        </Slide> */}
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            How does Elm provide Great Developer Experience?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Fearless refactoring
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>The compiler is your best friend</ListItem>
            </Appear>
            <Appear>
              <ListItem>Friendly error messages</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary" margin="0 0 30px 0">
            Elm Resources
          </Heading>
          <List textColor="primary" style={listStyle}>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="https://guide.elm-lang.org/" target="_blank">
                  Introduction to Elm
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="https://github.com/avh4/elm-format" target="_blank">
                  Elm Format
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="http://package.elm-lang.org/" target="_blank">
                  Elm Packages
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="https://mbylstra.github.io/html-to-elm/" target="_blank">
                  HTML to Elm
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href=" http://noredink.github.io/json-to-elm/" target="_blank">
                  JSON to Elm
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href=" https://github.com/laurenmbeatty/osn-elm" target="_blank">
                  GitHub repo
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="http://osn-elm-presentation.surge.sh/#/" target="_blank">
                  Slides
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="https://whimsical.co/" target="_blank">
                  Whimsical
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link textColor="primary" href="https://coggle.it/diagram/WohSPCGMFQABGL0_/t/elm" target="_blank">
                  Coggle
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you!</Quote>
            <Cite>@LaurenBeatty13</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
