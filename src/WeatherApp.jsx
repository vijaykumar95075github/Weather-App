import SearchBox from "./SearchBox";


export default function WeatherApp() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: 0
        }}>
            <h2>Weather App</h2>
            <SearchBox/>
        </div>
    );
}
