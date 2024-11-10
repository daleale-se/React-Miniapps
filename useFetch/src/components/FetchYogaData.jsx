import UseFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

  return (
   <>
    <ul className='list_data_main'>
        {data && data.map((e) => 
            <li key={e}>
                <p>Name: {e.name}</p>
                <p>Benefits: {e.benefits}</p>
                <p>Time duration: {e.time_duration}</p>
            </li>
        )}
    </ul>
   </>
  )
}
export default FetchYogaData