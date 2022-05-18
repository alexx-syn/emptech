import { Center } from '@mantine/core'
import ChatReplication from './ChatReplicationComponent'

import Arriane from '../../images/arriane.jpg'
import Jerome from '../../images/jerome.jpg'

function Info() {
  return (
    <Center className='Schools'>
      <div className='HeaderText'>
        Home
      </div>

      { /* iterate through info */ }
      <div className='SchoolCards'>
        <ChatReplication
          img={Arriane}
          name='Arrianne Wyanne Miranda'
          contents={
            [
              "Impacts. Humans and wild animals face new challenges for survival because of climate change. More frequent and intense drought, storms, heat waves, rising sea levels, melting glaciers and warming oceans can directly harm animals, destroy the places they live, and wreak havoc on people's livelihoods and communities.",
              "Climate change can also impact human health by worsening air and water quality, increasing the spread of certain diseases, and altering the frequency or intensity of extreme weather events. Rising sea level threatens coastal communities and ecosystems.",
              "Humans and wild animals face new challenges for survival because of climate change. More frequent and intense drought, storms, heat waves, rising sea levels, melting glaciers and warming oceans can directly harm animals, destroy the places they live, and wreak havoc on people’s livelihoods and communities."
            ]
          }
        />

        <ChatReplication
          img={Jerome}
          name='Jerome Habitan'
          contents={
            [
              "Warmer temperatures are altering weather patterns and upsetting nature's natural balance. Humans and all other kinds of life on Earth are at risk as a result of this. Hot days and heat waves are becoming increasingly common in nearly all land areas, and 2020 was one of the warmest years on record. ",
              "Higher temperatures raise the risk of heat-related illnesses and make working and moving around more difficult. When the weather is hotter, wildfires are easier to start and spread. Temperature changes lead to fluctuations in rainfall.",
              "As a result, storms become more violent and frequent. Flooding and landslides occur as a result, damaging homes and towns and costing billions of pounds. In more places, water is becoming scarce. Droughts can cause devastation by causing sand and dust storms that can transport billions of tons of sand across continents.",
              "Climate change exacerbates the variables that cause and maintain poverty. Floods have the potential to devastate homes and livelihoods in urban slums. Working outside in the heat might be difficult. Weather-related disasters evict 23 million people each year, putting millions more people at risk of poverty."
            ]
          }
        />
      </div> 
    </Center>
  )
}

export default Info