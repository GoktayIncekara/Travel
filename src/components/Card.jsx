import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Card(props) {
    return (
        <div className="travel-card">
            <img className='travel-img' src={props.image}></img>
            <div className="travel-informations">
                <div className='main-informations'>
                    <LocationOnIcon style={{color:"red"}} />
                    <p>{props.location}</p>
                    <a className='location-link' href={props.link}>Go to the location</a>
                </div>
                <h1 className='location-header'>{props.title}</h1>
                <div className='main-informations'>
                    <p><b>{props.start}</b></p>
                    {props.end && <p>-</p>}
                    <p><b>{props.end}</b></p>
                </div>
                <p className='exp'>{props.desc}</p>
            </div>
        </div>
    )
}