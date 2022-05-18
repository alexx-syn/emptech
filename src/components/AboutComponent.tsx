import StemSociety from '../../images/stem_society.jpg'
import {
  Center,
  Image
} from '@mantine/core'

function About() {
  return (
    <Center className='Schools'>
      <div className='HeaderText'>
        About
      </div>

      <div
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '10px'
          }
        }
      >
        <a href='https://www.facebook.com/sjcshsstemsoc/posts/1231988930608264'>
          <Image
            src={StemSociety}
            radius='lg'
            className='GrowingImage'
            width={256}
            height={256}
          />
        </a>

        <Center className='TinyText'>
          Stem Society
        </Center>
      </div>
    </Center>
  )
}

export default About