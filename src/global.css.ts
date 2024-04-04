import { GlobalStyleRule, globalStyle } from "@vanilla-extract/css"
import { assignLayer, resetLayer } from "./layers.css"

export const globalStyles = (
  layer: typeof resetLayer,
  styles: [string, GlobalStyleRule][],
) => {
  for (const [selector, rule] of styles) {
    if (layer) {
      globalStyle(selector, assignLayer(layer, rule))
    } else {
      globalStyle(selector, rule)
    }
  }
}
