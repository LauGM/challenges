import './App.css'
import ContactsScreen from './components/ContactsScreen';
import NavBar from './components/NavBar';

function App() {

  const contacts = [
    {
      id: 1,
      avatar_url: 'https://reqres.in/img/faces/8-image.jpg',
      first_name: 'John',
      last_name: 'Doe',
      company: 'ABC Corporation',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'john.doe@example.com',
      phone: {
        area_code: '123',
        number: '4567890'
      },
      addresses: [
        {
          city_id: 'NYC',
          state_id: 'NY',
          line_1: '123 Main St',
          line_2: 'Apt 101',
          zip_code: '10001'
        }
      ]
    },
    {
      id: 2,
      avatar_url: 'https://reqres.in/img/faces/7-image.jpg',
      first_name: 'Jane',
      last_name: 'Smith',
      company: 'XYZ Inc.',
      details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      email: 'jane.smith@example.com',
      phone: {
        area_code: '987',
        number: '6543210'
      },
      addresses: [
        {
          city_id: 'CHI',
          state_id: 'IL',
          line_1: '456 Elm St',
          line_2: '',
          zip_code: '60601'
        },
        {
          city_id: 'LA',
          state_id: 'CA',
          line_1: '789 Oak Ave',
          line_2: 'Suite 200',
          zip_code: '90001'
        }
      ]
    }
  ];

  const cities = [
    { id: 'NYC', name: 'New York City' },
    { id: 'CHI', name: 'Chicago' },
    { id: 'LA', name: 'Los Angeles' }
  ];

  const states = [
    { id: 'NY', name: 'New York' },
    { id: 'IL', name: 'Illinois' },
    { id: 'CA', name: 'California' }
  ];

  return (
    <>
      <NavBar />
      <ContactsScreen contacts={contacts} cities={cities} states={states}/>
    </>
  )
}

export default App
