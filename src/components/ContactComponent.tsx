import SJC from '../../images/sjc.jpg'
import {
  Center,
  Image
} from '@mantine/core'

function Contact() {
  return (
    <Center className='Schools'>
      <div className='HeaderText'>
        Contacts
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
        <a href='https://www.facebook.com/SJCOlongapoSHS'>
          <Image
            src={SJC}
            radius='lg'
            className='GrowingImage'
            width={256}
            height={256}
          />
        </a>

        <Center className='TinyText'>
          SJC Senior High Department
        </Center>
      </div>
    </Center>
  )
}

export default Contact