import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Mapping for weather images
const weatherImageMap = {
    "clear sky": "https://media.istockphoto.com/id/162428248/photo/cloudscape.jpg?s=2048x2048&w=is&k=20&c=RtAJ7WfETf_A_mQk83Q28EH_DF8liKyr6FekhlB31Jk=",
    "few clouds": "https://media.istockphoto.com/id/1310822348/photo/deep-blue-sky-with-few-clouds.jpg?s=2048x2048&w=is&k=20&c=gO_ZCUUcQoB74PBUr59yLiBIylj5c4OO8RlPLBsJ_88=",
    "scattered clouds": "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "broken clouds": "https://images.unsplash.com/photo-1533736405784-798e2e103a3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "shower rain": "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=",
    "rain": "https://media.istockphoto.com/id/108267676/photo/red-umbrella-and-rain-against-black-background.jpg?s=2048x2048&w=is&k=20&c=fDuTznTxGffrlfbdeqbYYPKxSymSqHglQGjDePUQUqc=",
    "thunderstorm": "https://media.istockphoto.com/id/1328220487/photo/weather-thunderstorm-climate-change.jpg?s=2048x2048&w=is&k=20&c=uZRAJ9Ur61155obyUDJDXrl2wJ_mr1FSoydt4w2y798=",
    "snow": "https://media.istockphoto.com/id/1256974438/vector/winter-village-houses-mountains-hills-landscape-snowfall-background.jpg?s=1024x1024&w=is&k=20&c=QHL2cn3wEdpwqZ2i8dOU3j9P0kVJAvlIfxqxj7WcUmQ=",
    "mist": "https://media.istockphoto.com/id/873551900/photo/smog-over-noida-delhi-gurgaon-in-the-morning.jpg?s=2048x2048&w=is&k=20&c=oLqX524d7dx_sojL0phKQtLrDM_gA8l7X0JhuVXF6Ow=",
    "overcast clouds": "https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=2048x2048&w=is&k=20&c=ZwoVCevsrI90lje8PnIwh6bG0q1h4YiAnt_Nu6JZGRw=",
    "light rain": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "haze":"https://media.istockphoto.com/id/490452539/photo/delhi-cityscape.jpg?s=1024x1024&w=is&k=20&c=FxBdyqKrJ6ElV2tvkh8soYmMjRT59Y4lcRG-lG0m9LA="
};

// Mapping for weather descriptions in Hindi
const weatherDescriptionMap = {
    "clear sky": "स्वच्छ आकाश",
    "few clouds": "कुछ बादल",
    "scattered clouds": "विखरित बादल",
    "broken clouds": "टूटे हुए बादल",
    "shower rain": "बारिश",
    "rain": "बारिश",
    "thunderstorm": "वज्रपात",
    "snow": "बर्फ",
    "mist": "धुंध",
    "overcast clouds": "बदल से घिरा हुआ",
    "light rain":"हलकी बारिश",
    "haze":"धुंध",
};

// Mapping for rain percentages
const rainPercentageMap = {
    "rain": 100,
    "overcast clouds": 100,
    "shower rain": 100,
    "few clouds": 50,
    "thunderstorm": 90,
    "light rain":100,
    "scattered clouds":40,
    "clear sky":0,
    "broken clouds":40

    // Add more conditions and rain percentages as needed
};

export default function InfoBox({ info, city }) {
    const imageUrl = weatherImageMap[info.weather] || "https://example.com/default.jpg"; // Fallback image
    const weatherInHindi = weatherDescriptionMap[info.weather] || "जानकारी उपलब्ध नहीं";
    const rainPercentage = rainPercentageMap[info.weather] || 0; // Default to 0% if not specified

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageUrl}
                        alt="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather Info - {city} ({info.weather}) - {weatherInHindi}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Temperature: {info.temp}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Min Temperature: {info.tempMin}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Max Temperature: {info.tempMax}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Humidity: {info.humidity}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Feels Like: {info.feelsLike}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rain Chance: {rainPercentage}%
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
