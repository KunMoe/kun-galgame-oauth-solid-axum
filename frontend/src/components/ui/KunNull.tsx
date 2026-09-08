import { KunImage } from './KunImage'
import { withDefaults } from '@/src/utils/withDefaults'
import type { Component } from 'solid-js'

type Props = {
  description?: string
  isShowSticker?: boolean
}

// The empty-state illustration is a same-origin static asset, not a remote
// sticker. It used to be `${domain.sticker}/stickers/KUNgal{1-5}/{1-80}.webp`
// picked with randomNum -- an address for a position in a collection on a site
// this app does not own, which 404'd for every empty state the day that site
// stopped serving static files. It was also random per id and memoised in a
// module-level Map, so SSR and the client disagreed and the map leaked across
// requests on the server.
const KUN_NULL_IMAGE = '/kun-null.webp'

export const KunNull: Component<Props> = (props) => {
  const local = withDefaults(props, {
    description: '',
    isShowSticker: true
  })

  return (
    <div class="m-auto flex flex-col items-center gap-3">
      {local.isShowSticker && (
        <KunImage
          src={KUN_NULL_IMAGE}
          class="h-32 w-32 rounded-lg"
          loading="lazy"
          alt="blank galgame"
        />
      )}
      <span>{local.description}</span>
    </div>
  )
}
