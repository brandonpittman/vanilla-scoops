import { GlobalStyleRule, globalLayer } from "@vanilla-extract/css"

export const resetLayer = globalLayer("reset")
export const blocksLayer = globalLayer("blocks")
export const sprinklesLayer = globalLayer("utilities")
export const exceptionsLayer = globalLayer("exceptions")

export const assignLayer = (layer: string, styles: GlobalStyleRule) => ({
  "@layer": {
    [layer]: styles,
  },
})
