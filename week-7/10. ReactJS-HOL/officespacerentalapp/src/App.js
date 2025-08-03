import './App.css';

const offices = [
  {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai',
    Image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    Name: 'Regus',
    Rent: 65000,
    Address: 'Bangalore',
    Image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    Name: 'WeWork',
    Rent: 55000,
    Address: 'Hyderabad',
    Image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
];

const getRentColor = (rent) => {
  return rent <= 60000 ? 'textRed' : 'textGreen';
};

function App() {
  const heading = 'Office Space';
  return (
    <div className="container">
      <h1>{heading} , at Affordable Range</h1>
      {offices.map((office, idx) => (
        <div className="office-card" key={idx}>
          <img src={office.Image} width="25%" height="25%" alt="Office Space" />
          <h1>Name: {office.Name}</h1>
          <h3 className={getRentColor(office.Rent)}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
