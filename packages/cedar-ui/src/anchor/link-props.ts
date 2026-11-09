import type { ExtractPublicPropTypes } from 'vue'

export const anchorLinkProps = {
  /** Text shown when the default slot is empty. */
  title: String,
  /** Native link destination; same-page hashes participate in anchor tracking. */
  href: String,
}

export type AnchorLinkProps = ExtractPublicPropTypes<typeof anchorLinkProps>
