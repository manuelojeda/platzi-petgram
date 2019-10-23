import { withPhotos } from '../hoc/withPhotos'
import { PhotoCardListComponent } from '../components/PhotoCardList/index.jsx'

export const PhotoCardsList = withPhotos(PhotoCardListComponent)
