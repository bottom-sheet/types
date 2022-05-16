export type SnapPoints = [number, ...number[]]

export interface GetSnapPointsProps {
  /**
   * The height of the sticky header, if there's one
   */
  headerHeight: number
  /**
   * The scrollHeight of the content, if it can be measured (if the bottom sheet children prop is resulting in HTML that doesn't have a height then this can be zero)
   */
  contentHeight: number
  /**
   * The height of the sticky footer, if there's one
   */
  footerHeight: number
  /**
   * The smallest height possible while still being usable
   * Similar to height: min-content; in CSS
   * Calculated as: Math.min(maxHeight, Math.max(headerHeight + footerHeight, 50))
   */
  minContent: number
  /**
   * The intrinsic preferred height to show as much of the content as possible.
   * maxContent is always less than or equal to maxHeight.
   * And is similar to height: max-content; in CSS
   * Calculated as: Math.min(maxHeight, headerHeight + contentHeight + footerHeight)
   */
  maxContent: number
  /**
   * Max height the sheet can be, your snap points are capped to this value. It's window.innerHeight by default but can be overriden using the maxHeight prop.
   */
  maxHeight: number
}

export type GetSnapPoints = (props: GetSnapPointsProps) => SnapPoints | number

export interface GetInitialHeightProps extends GetSnapPointsProps {
  /** The snap points currently in use, this can be controlled by providing a `snapPoints` function on the bottom sheet. */
  snapPoints: number[]
  /** The last height the user dragged to, or used in ref.current.snapTo, or when it was last opened, null if it's never been in an open state */
  lastHeight: number | null
}

export type GetInitialHeight = (props: GetInitialHeightProps) => number
