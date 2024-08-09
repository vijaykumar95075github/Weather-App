import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoBox from "./InfoBox";
import "./SearchBox.css";

// List of city suggestions
const citySuggestions = [
    "New York", "London", "Paris", "Tokyo", "Mumbai", "Delhi", "Beijing", "Sydney", "Berlin", "Rome",
    "Barauni","Begusarai","Bettiah","Bhagalpur","Bihar Sharif","Bodh Gaya","Buxar","Chapra","Darbhanga","Dehri",
"Dinapur Nizamat"," Gaya","Hajipur","Jamalpur","Katihar","Madhubani","Motihari","Munger","Muzaffarpur","Patna","Purnia",
"Pusa","Saharsa","Samastipur","Sasaram","Sitamarhi","Siwan","Assam", "Dhuburi", "Dibrugarh", 
"Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia","Chhattisgarh", "Ambikapur", "Bhilai", 
"Bilaspur", "Dhamtari", "Durg", "Jagdalpur", "Raipur", "Rajnandgaon", "Dadra and Nagar Haveli and Daman and Diu (union territory)", 
"Daman", "Diu", "Silvassa", "Delhi (national capital territory)", "Delhi", "New Delhi", "Goa", "Madgaon", "Panaji", "Gujarat",
 "Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh", "Kandla", "Khambhat", 
 "Kheda", "Mahesana", "Morbi", "Nadiad", "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad",
  "Veraval", "Haryana", "Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur Jhirka", "Gurugram", "Hansi", "Hisar", "Jind", "Kaithal",
   "Karnal", "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Himachal Pradesh", "Bilaspur", "Chamba", "Dalhousie",
    "Dharmshala", "Hamirpur", "Kangra", "Kullu", "Mandi", "Nahan", "Shimla", "Una", "Jammu and Kashmir (union territory)", "Anantnag",
     "Baramula", "Doda", "Gulmarg", "Jammu", "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur", "Jharkhand", "Bokaro", "Chaibasa", "Deoghar",
 "Dhanbad", "Dumka", "Giridih", "Hazaribag", "Jamshedpur", "Jharia", "Rajmahal", "Ranchi", "Saraikela", "Karnataka", "Badami", "Ballari", 
 "Bengaluru", "Belagavi", "Bhadravati", "Bidar", "Chikkamagaluru", "Chitradurga", "Davangere", "Halebid", "Hassan", "Hubballi-Dharwad",
 "Kalaburagi", "Kolar", "Madikeri", "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Shravanabelagola", "Shrirangapattana", "Tumakuru",
 "Vijayapura", "Kerala", "Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad", 
 "Thalassery", "Thiruvananthapuram", "Thrissur", "Ladakh (union territory)", "Kargil", "Leh", "Madhya Pradesh", "Balaghat", "Barwani", "Betul",
  "Bharhut", "Bhind", "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dr. Ambedkar Nagar (Mhow)",
 "Guna", "Gwalior", "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone", "Maheshwar", "Mandla", "Mandsaur", "Morena",
  "Murwara", "Narsimhapur", "Narsinghgarh", "Narwar", "Neemuch", "Nowgong", "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar",
 "Sarangpur", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Ujjain", "Vidisha", "Maharashtra", "Ahmadnagar", "Akola",
  "Amravati", "Aurangabad", "Bhandara", "Bhusawal", "Bid", "Buldhana", "Chandrapur", "Daulatabad", "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur", 
  "Mahabaleshwar", "Malegaon", "Matheran", "Mumbai", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani", "Pune", "Ratnagiri", "Sangli", "Satara", 
  "Sevagram", "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar", "Wardha", "Yavatmal", "Manipur", "Imphal", "Meghalaya", "Cherrapunji", "Shillong", "Mizoram",
   "Aizawl", "Lunglei", "Nagaland", "Kohima", "Mon", "Phek", "Wokha", "Zunheboto", "Odisha", "Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", 
   "Cuttack", "Dhenkanal", "Kendujhar", "Konark", "Koraput", "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri", "Puducherry (union territory)", "Karaikal",
    "Mahe", "Puducherry", "Yanam", "Punjab", "Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", 
    "Ludhiana", "Nabha", "Patiala", "Rupnagar", "Sangrur", "Rajasthan", "Abu", "Ajmer", "Alwar", "Amer", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", 
    "Bundi", "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur",
     "Kishangarh", "Kota", "Merta", "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur", "Sikkim", "Gangtok", "Gyalshing", "Lachung",
      "Mangan", "Tamil Nadu", "Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari", "Kodaikanal",
       "Kumbakonam", "Madurai", "Mamallapuram", "Nagappattinam",
      "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Thanjavur", "Tiruchchirappalli", "Tirunelveli", "Tiruppur", "Thoothukudi", "Udhagamandalam", "Vellore", "Telangana",
       "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal", "Tripura", "Agartala", "Uttar Pradesh", "Agra", "Aligarh", "Amroha", "Ayodhya", 
      "Azamgarh", "Bahraich", "Ballia", "Banda", "Bara Banki",
      "Bareilly", "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad-cum-Fatehgarh", "Fatehpur", "Fatehpur Sikri", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur",
       "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Lakhimpur", "Lalitpur", "Lucknow", "Mainpuri", "Math",


];

export default function SearchBox() {
    let [city, setCity] = useState("");
    let [info, setInfo] = useState(null);
    let [displayCity, setDisplayCity] = useState("");
    let [error, setError] = useState(false);
    let [suggestions, setSuggestions] = useState([]);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d786479ed14fe9cad61eb34f420316ca";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                rain: jsonResponse.rain ? jsonResponse.rain['1h'] || 0 : 0 // Handle rain data if available
            };

            setInfo(result);
            setDisplayCity(city);
            setSuggestions([]); // Clear suggestions after search
        } catch (err) {
            setError(true);
        }
    };

    let handleChange = (event) => {
        const inputValue = event.target.value;
        setCity(inputValue);
        
        // Filter city suggestions based on input value
        if (inputValue) {
            const filteredSuggestions = citySuggestions.filter(city =>
                city.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    let handleSuggestionClick = (suggestedCity) => {
        setCity(suggestedCity);
        setSuggestions([]); // Clear suggestions after selection
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined"
                    required 
                    value={city}
                    onChange={handleChange} 
                    autoComplete="off"
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                { error && <p>No such place exists!</p> }
                {/* Display city suggestions */}
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
            {info && <InfoBox info={info} city={displayCity} />} 
        </div>
    );
}
