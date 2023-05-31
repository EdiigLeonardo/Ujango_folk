import React from "react";
import SpanLink from "../../../components/ui/Span";

function highlightUsernameAndHashTagsFromText(text) {
  const textSplitted = text.split(" ");
  const textBuilder = textSplitted.map((word, index) => {
    if (word[0] === "@" || word[0] === "#") {
      return <SpanLink word={word} key={index} />;
    }
    return " " + word;
  });
  return textBuilder;
}

export { highlightUsernameAndHashTagsFromText };
