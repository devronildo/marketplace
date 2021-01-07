import './styles.css';
import {useSelector} from 'react-redux';

import GoogleMapReact from 'google-map-react';
import Marker from '../../components/marker';


const Map = ({ shops }) => {

  const { mapCenter }  = useSelector(state => state.shop);

     return (
            <div className="container-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: ''}}
                    center={mapCenter}
                    defaultZoom={15}
                  >
                     {shops.map(p => <Marker shop={p} lat={p.location.lat} lng={p.location.lng} />
                     
                     )}

                  </GoogleMapReact>
            </div>
     )
}

export default Map;