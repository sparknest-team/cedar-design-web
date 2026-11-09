import type { AnchorLinkProps, AnchorBoundaryPosition } from '@cedar-design/ui'
import type { AnchorLinkProps as SubpathLinkProps } from '@cedar-design/ui/anchor'
const props: AnchorLinkProps = { href: '#section', title: 'Section' }
const subpath: SubpathLinkProps = props
const position: AnchorBoundaryPosition = 'nearest'
// @ts-expect-error Invalid alignment is rejected.
const invalid: AnchorBoundaryPosition = 'middle'
void [subpath, position, invalid]
