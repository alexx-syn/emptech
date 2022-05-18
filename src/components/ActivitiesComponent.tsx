import {
  Center,
  Image
} from '@mantine/core'

// ActivitiesImage
import Activity1 from '../../images/activities/activity_1.png'
import Activity2 from '../../images/activities/activity_2.png'
import Activity3 from '../../images/activities/activity_3.png'
import Activity4 from '../../images/activities/activity_4.png'
import Activity5 from '../../images/activities/activity_5.png'
import Activity6 from '../../images/activities/activity_6.png'
import Activity7 from '../../images/activities/activity_7.png'
import Activity8 from '../../images/activities/activity_8.png'
import Activity9 from '../../images/activities/activity_9.png'
import Activity10 from '../../images/activities/activity_10.png'
import Activity11 from '../../images/activities/activity_11.png'


function ActivityImages() {
  return [
    Activity1,
    Activity2,
    Activity3,
    Activity4,
    Activity5,
    Activity6,
    Activity7,
    Activity8,
    Activity9,
    Activity10,
    Activity11
  ]
}

function Activities() {
  const images = ActivityImages()

  return (
    <Center className='Schools'>
      <div className='HeaderText'>
        Activities
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/WmVLcj-XKnM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={
          {
            border: 'none'
          }
        }
      />

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
    </Center>
  )
}

export default Activities