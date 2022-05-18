import {
  Center,
  Image
} from '@mantine/core'
import Lance from '../../images/lance.jpg'

// GalleryImages
import Gallery1 from '../../images/gallery/gallery_1.jpg'
import Gallery2 from '../../images/gallery/gallery_2.jpg'
import Gallery3 from '../../images/gallery/gallery_3.jpg'
import Gallery4 from '../../images/gallery/gallery_4.jpg'

import ChatReplication from './ChatReplicationComponent'


function GalleryImages() {
  return [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4
  ]
}

function Gallery() {
  const images = GalleryImages()

  return (
    <Center className='Schools'>
      <div className='HeaderText'>
        Gallery
      </div>

      <Center
        style={
          {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
            maxWidth: '1024px'
          }
        }
      >
        {
          images.map(
            (image, index) => (
              <a href={image}>
                <Image
                  key={index}
                  src={image}
                  radius='lg'
                  className='GrowingImage'
                  width={256}
                  height={256}
                />
              </a>
            )
          )
        }
      </Center>

      <div className='TinyText'>
        <ChatReplication
          img={Lance}
          name='Images by Lance Lagarde'
          contents={[]}
          centerName={true}
        />
      </div>
    </Center>
  )
}

export default Gallery