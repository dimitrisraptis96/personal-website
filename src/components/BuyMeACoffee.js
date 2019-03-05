import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
// import Image from "./Image";
import { shadow } from "../utils/styles";
import { black, lightgreen } from "../utils/colors";
import { FiX } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";
import coffee from "./coffee-cup.svg";

const Badge = styled.div`
  background-color: lightgreen;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);


  /* box-sizing: content-box; */
  border-radius: 8px;
  padding: 1rem;
  height: auto;
  z-index: 9999;
  position: fixed;
  top: 32px;
  right: 32px;
  box-shadow: ${shadow};
  /* cursor: pointer; */
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0EwMEYyRjlDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0EwMEYyRkFDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTAwRjJGN0MyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTAwRjJGOEMyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/X/ugAAAY6SURBVHja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"),
    auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${black};
  color: white;
  margin: 0 0 0 0.5rem;
`;

const BuyMeACoffee = ({ data }) => {
  return (
    <StaticQuery
      query={coffeeQuery}
      render={(data) => {
        return (
          <a href="https://www.paypal.me/DimitrisRaptis/2.99">
            <Badge>
              {/* <Image
                fixed={data.badge.childImageSharp.fixed}
                alt={"buy-me-a-coffee"}
                style={{
                  cursor: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0EwMEYyRjlDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0EwMEYyRkFDMjZFMTFFNUI4QkRFMkRBRDg3QkNFRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTAwRjJGN0MyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTAwRjJGOEMyNkUxMUU1QjhCREUyREFEODdCQ0VFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/X/ugAAAY6SURBVHja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"), auto'
                }}
              /> */}
              {/* <Row justify="flex-end">
                <FiX color={black} size={16} />
              </Row> */}
              {/* <Row alignItems="flex-end" style={{marginTop: '.5rem'}}> */}
                {/* <img
                  src={coffee}
                  width="25px"
                  height="25px"
                  style={{ margin: 0 }}
                /> */}
                <GiCoffeeBeans color={"white"} size={16}/>
                <Text>Buy me a coffee!</Text>
              {/* </Row> */}
            </Badge>
          </a>
        );
      }}
    />
  );
};

export default BuyMeACoffee;

const coffeeQuery = graphql`
  query CoffeeQuery {
    badge: file(absolutePath: { regex: "/buy-me-a-coffee.png/" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;