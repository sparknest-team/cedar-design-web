import type { CompatiblePublicProps as ExtractPublicPropTypes } from '../_utils/public-props'

export const anchorLinkProps = {
  /** Text shown when the default slot is empty. */
  title: String,
  /** Native link destination; same-page hashes participate in anchor tracking. */
  href: String,
}

export type AnchorLinkProps = ExtractPublicPropTypes<typeof anchorLinkProps>
