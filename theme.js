import { themes } from "mdx-deck";
import produce from "immer";

export default produce(themes.swiss, draft => {
  draft.colors = {
    background: "#1c2033",
    primary: "#32C850",
    text: "#fff"
  }

  draft.fonts = {
    body: "CircularStd-Book, arial, sans-serif"
  }

  draft.styles = {
    title: {
      color: "primary"
    },
    subtitle: {
      color: "primary"
    },
  }

  draft.components = {
    H1: () => 'h1'
  }
})
