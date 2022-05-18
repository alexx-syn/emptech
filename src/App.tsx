import HeaderComponent from './components/HeaderComponent'
import InfoComponent from './components/InfoComponent'

import { MantineProvider } from '@mantine/core'

import AboutComponent from './components/AboutComponent'
import ActivitiesComponent from './components/ActivitiesComponent'

import GalleryComponent from './components/GalleryComponent'
import ContactComponent from './components/ContactComponent'

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div className='Content'>
        <HeaderComponent />
        <InfoComponent />
        <AboutComponent />
        <ActivitiesComponent />
        <GalleryComponent/>
        <ContactComponent />
      </div>
    </MantineProvider>
  )
}

export default App