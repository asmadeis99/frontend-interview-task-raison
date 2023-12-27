import title from './components/Title/title.js'
import mapContainer from './components/MapContainer/mapContainer.js';
import ItemCardList from './components/ItemCard/itemCardList.js';

const items = [
    {
        src: '/src/assets/images/flags/damietta.svg',
        name: 'Damietta',
        phone: '+20 0219033',
        email: 'alexbank@damietta.com',
        address: '3 Al Togari, Qism Damietta, Damietta, Damietta Governorate 34511, Egypt',
    },
    {
      src: '/src/assets/images/flags/lille.svg',
      name: 'Lille',
      phone: '+33 3 20 54 44 50',
      email: 'theatre-sebastobol@lille.fr',
      address: 'Pl. Sébastopol, 59000 Lille, France',
  },
  {
    src: '/src/assets/images/flags/dayton.svg',
    name: 'Dayton',
    phone: '+1 937 226 1710',
    email: 'info@americaspackardmuseum.org',
    address: '420 S Ludlow St, Dayton, OH 45402, United States',
},
{
  src: '/src/assets/images/flags/kulusuk.svg',
  name: 'Kulusuk',
  phone: '+299 98 69 88',
  email: 'info@mit.gl',
  address: 'HVF8+R82, Kulusuk, Greenland',
},
{
  src: '/src/assets/images/flags/kanazawa.svg',
  name: 'Kanazawa',
  phone: '+81 76 220 2469',
  email: 'kanazawa@lg.jp',
  address: '1 Chome Higashiyama, Kanazawa, Ishikawa 920-0831, Japan',
},
]

const index = () => {
    const appWrapper = document.createElement('main')
    appWrapper.classList.add('app-wrapper')

    appWrapper.appendChild(title())
    appWrapper.appendChild(mapContainer(items.slice(0, 2)))
    appWrapper.appendChild(ItemCardList(items.slice(2)))
    return appWrapper
}

document.body.appendChild(index())
