import PublicIcon from '@mui/icons-material/Public';

export default function Header() {
    
    return (
        <header className="travel-header">
            <div className='travel-infos'>
                <PublicIcon style={{color:"white"}} />
                <h2 className='travel-info'>My Travel Journal</h2>
            </div>
        </header>
    )
}