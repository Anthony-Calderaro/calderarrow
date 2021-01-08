// import Link from 'next/link';
// import styles from '../styles/Home.module.css';

const Intro = () => {
  return (
    <div>
      Intro Comment: 
      This is where I keep track of my running progress. The charts are built with a non-JS library called charts.css, and if you’re interested, you can read about my experience building with it.[Link]
    </div >
  )
};

const Race = ({ raceObject, pageRef }) => {
  return (
    <tr id={pageRef} style={{ fontSize: '14px', textAlign: 'left' }}>
      {Object.values(raceObject).map((value, i) => <td key={i}>{value}</td>)}
    </tr>
  )
}
const Summary = () => {
  // const fastest400 = races['400'].sort()[0]; 
  // const raceIndex400 = races['400'].find(fastest400);
  // const fastest800 = races['800'].sort()[0]; 
  // const raceIndex800 = races['800'].find(fastest800);
  // const fastest1600 = races['1600'].sort()[0]; 
  // const raceIndex1600 = races['1600'].find(fastest1600);
  // Todo: a href === raceIndex; make the table rows have an id equal to their index.
  const href = 'sup'
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <div>
        <h3>400m</h3>
        <div>Timeline Chart</div>
        <a href={`#${href}`} style={{ display: 'flex' }}>Lifetime PR:  6’21”23’” | 1/1/2020 [link]</a>
      </div>
      <div>800m</div>
      <div>1600m</div>
    </div>
  )
}

const Log = () => {
  // Todo: add filtering and sorting
  // Todo: static-ify this
  const columns = [
    'date',
    'distance',
    'time',
    'trend',
    'location',
    'notes'
  ]
  
  const races = [
    {
      'date': 'Dec 2020',
      'distance': '1600m',
      'time': '6:13.64',
      'trend': 'Slower',
      'location': 'Danville, CA',
      'notes': ''
    },
    {
      'date': 'Apr 2014',
      'distance': '400m',
      'time': '56.74',
      'trend': '-',
      'location': 'Danville, CA',
      'notes': 'HS Varsity Track Meet'
    },
    {
      'date': 'Feb 2014',
      'distance': '800m',
      'time': '2:12.15',
      'trend': '-',
      'location': 'Livermore, CA',
      'notes': 'HS Varsity Track Meet'
    },
    {
      'date': 'Nov 2014',
      'distance': '1600m',
      'time': '5:35.26',
      'trend': '-',
      'location': 'Danville, CA',
      'notes': 'HS 24 Hour Marathon'
    }
  ]
  
// Todo: "See More" button after a while
	
  return (
    <table>
      <tbody>
      <tr style={{ fontSize: '16px', textAlign: 'left'}}>
        {columns.map((column, i) => <th key={i} style={{ textTransform: 'capitalize' }}>{column}</th>)}
      </tr>
      {races.map((raceObject, index) => <Race key={index} pageRef={index} raceObject={raceObject} />)}
      </tbody>
    </table>
  )
}
export default function RunLog() {
  return (
    <>
      <Intro />
      <Summary />
      <Log />
    </>
  );
}
