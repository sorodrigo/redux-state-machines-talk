import { themes } from "mdx-deck";
import produce from "immer";

export default produce(themes.swiss, draft => {
  draft.colors = {
    background: "#1c2033",
    text: "#32C850"
  }

  draft.fonts = {
    body: "CircularStd-Book, arial, sans-serif"
  }

  draft.components = {
    H1: () => 'h1'
  }
})
