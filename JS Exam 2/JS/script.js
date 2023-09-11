let now = new Date()
let date = now.getFullYear() - 15 + '-' + (now.getMonth() + 1).toString().padStart(2, 0) + '-' + now.getDate().toString().padStart(2, 0)
document.getElementById('dob').max = date
var table;
let Allcountry = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']
let Allstate = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
let Allcity = {
    'Andhra Pradesh': [
        'Adilabad',
        'Anantapur',
        'Chittoor',
        'Kakinada',
        'Guntur',
        'Hyderabad',
        'Karimnagar',
        'Khammam',
        'Krishna',
        'Kurnool',
        'Mahbubnagar',
        'Medak',
        'Nalgonda',
        'Nizamabad',
        'Ongole',
        'Hyderabad',
        'Srikakulam',
        'Nellore',
        'Visakhapatnam',
        'Vizianagaram',
        'Warangal',
        'Eluru',
        'Kadapa'
    ],
    'Arunachal Pradesh': [
        'Anjaw',
        'Changlang',
        'East Siang',
        'Kurung Kumey',
        'Lohit',
        'Lower Dibang Valley',
        'Lower Subansiri',
        'Papum Pare',
        'Tawang',
        'Tirap',
        'Dibang Valley',
        'Upper Siang',
        'Upper Subansiri',
        'West Kameng',
        'West Siang',
    ],
    'Assam': [
        'Baksa',
        'Barpeta',
        'Bongaigaon',
        'Cachar',
        'Chirang',
        'Darrang',
        'Dhemaji',
        'Dima Hasao',
        'Dhubri',
        'Dibrugarh',
        'Goalpara',
        'Golaghat',
        'Hailakandi',
        'Jorhat',
        'Kamrup',
        'Kamrup Metropolitan',
        'Karbi Anglong',
        'Karimganj',
        'Kokrajhar',
        'Lakhimpur',
        'Marigaon',
        'Nagaon',
        'Nalbari',
        'Sibsagar',
        'Sonitpur',
        'Tinsukia',
        'Udalguri',
    ],
    'Bihar': [
        'Araria',
        'Arwal',
        'Aurangabad',
        'Banka',
        'Begusarai',
        'Bhagalpur',
        'Bhojpur',
        'Buxar',
        'Darbhanga',
        'East Champaran',
        'Gaya',
        'Gopalganj',
        'Jamui',
        'Jehanabad',
        'Kaimur',
        'Katihar',
        'Khagaria',
        'Kishanganj',
        'Lakhisarai',
        'Madhepura',
        'Madhubani',
        'Munger',
        'Muzaffarpur',
        'Nalanda',
        'Nawada',
        'Patna',
        'Purnia',
        'Rohtas',
        'Saharsa',
        'Samastipur',
        'Saran',
        'Sheikhpura',
        'Sheohar',
        'Sitamarhi',
        'Siwan',
        'Supaul',
        'Vaishali',
        'West Champaran',
        'Chandigarh',
    ],
    'Chhattisgarh': [
        'Bastar',
        'Bijapur',
        'Bilaspur',
        'Dantewada',
        'Dhamtari',
        'Durg',
        'Jashpur',
        'Janjgir-Champa',
        'Korba',
        'Koriya',
        'Kanker',
        'Kabirdham (Kawardha)',
        'Mahasamund',
        'Narayanpur',
        'Raigarh',
        'Rajnandgaon',
        'Raipur',
        'Surguja',
    ],
    'Dadra and Nagar Haveli': [
        'Dadra and Nagar Haveli'
    ],
    'Daman and Diu': [
        'Daman',
        'Diu',
    ],
    'Delhi': [
        'Central Delhi',
        'East Delhi',
        'New Delhi',
        'North Delhi',
        'North East Delhi',
        'North West Delhi',
        'South Delhi',
        'South West Delhi',
        'West Delhi',
    ],
    'Goa': [
        'North Goa',
        'South Goa'
    ],
    'Gujarat': [
        'Ahmedabad',
        'Amreli district',
        'Anand',
        'Banaskantha',
        'Bharuch',
        'Bhavnagar',
        'Dahod',
        'The Dangs',
        'Gandhinagar',
        'Jamnagar',
        'Junagadh',
        'Kutch',
        'Kheda',
        'Mehsana',
        'Narmada',
        'Navsari',
        'Patan',
        'Panchmahal',
        'Porbandar',
        'Rajkot',
        'Sabarkantha',
        'Surendranagar',
        'Surat',
        'Vyara',
        'Vadodara',
        'Valsad',
    ],
    'Haryana': [
        'Ambala',
        'Bhiwani',
        'Faridabad',
        'Fatehabad',
        'Gurgaon',
        'Hissar',
        'Jhajjar',
        'Jind',
        'Karnal',
        'Kaithal',
        'Kurukshetra',
        'Mahendragarh',
        'Mewat',
        'Palwal',
        'Panchkula',
        'Panipat',
        'Rewari',
        'Rohtak',
        'Sirsa',
        'Sonipat',
        'Yamuna Nagar',
    ],
    'Himachal Pradesh': [
        'Bilaspur',
        'Chamba',
        'Hamirpur',
        'Kangra',
        'Kinnaur',
        'Kullu',
        'Lahaul and Spiti',
        'Mandi',
        'Shimla',
        'Sirmaur',
        'Solan',
        'Una',
    ],
    'Jammu and Kashmir': [
        'Anantnag',
        'Badgam',
        'Bandipora',
        'Baramulla',
        'Doda',
        'Ganderbal',
        'Jammu',
        'Kargil',
        'Kathua',
        'Kishtwar',
        'Kupwara',
        'Kulgam',
        'Leh',
        'Poonch',
        'Pulwama',
        'Rajauri',
        'Ramban',
        'Reasi',
        'Samba',
        'Shopian',
        'Srinagar',
        'Udhampur',
    ],
    'Jharkhand': [
        'Bokaro',
        'Chatra',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'East Singhbhum',
        'Garhwa',
        'Giridih',
        'Godda',
        'Gumla',
        'Hazaribag',
        'Jamtara',
        'Khunti',
        'Koderma',
        'Latehar',
        'Lohardaga',
        'Pakur',
        'Palamu',
        'Ramgarh',
        'Ranchi',
        'Sahibganj',
        'Seraikela Kharsawan',
        'Simdega',
        'West Singhbhum',
    ],
    'Karnataka': [
        'Bagalkot',
        'Bangalore Rural',
        'Bangalore Urban',
        'Belgaum',
        'Bellary',
        'Bidar',
        'Bijapur',
        'Chamarajnagar',
        'Chikkamagaluru',
        'Chikkaballapur',
        'Chitradurga',
        'Davanagere',
        'Dharwad',
        'Dakshina Kannada',
        'Gadag',
        'Gulbarga',
        'Hassan',
        'Haveri district',
        'Kodagu',
        'Kolar',
        'Koppal',
        'Mandya',
        'Mysore',
        'Raichur',
        'Shimoga',
        'Tumkur',
        'Udupi',
        'Uttara Kannada',
        'Ramanagara',
        'Yadgir',
    ],
    'Kerala': [
        'Alappuzha',
        'Ernakulam',
        'Idukki',
        'Kannur',
        'Kasaragod',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Malappuram',
        'Palakkad',
        'Pathanamthitta',
        'Thrissur',
        'Thiruvananthapuram',
        'Wayanad',
    ],
    'Madhya Pradesh': [
        'Alirajpur',
        'Anuppur',
        'Ashok Nagar',
        'Balaghat',
        'Barwani',
        'Betul',
        'Bhind',
        'Bhopal',
        'Burhanpur',
        'Chhatarpur',
        'Chhindwara',
        'Damoh',
        'Datia',
        'Dewas',
        'Dhar',
        'Dindori',
        'Guna',
        'Gwalior',
        'Harda',
        'Hoshangabad',
        'Indore',
        'Jabalpur',
        'Jhabua',
        'Katni',
        'Khandwa (East Nimar)',
        'Khargone (West Nimar)',
        'Mandla',
        'Mandsaur',
        'Morena',
        'Narsinghpur',
        'Neemuch',
        'Panna',
        'Rewa',
        'Rajgarh',
        'Ratlam',
        'Raisen',
        'Sagar',
        'Satna',
        'Sehore',
        'Seoni',
        'Shahdol',
        'Shajapur',
        'Sheopur',
        'Shivpuri',
        'Sidhi',
        'Singrauli',
        'Tikamgarh',
        'Ujjain',
        'Umaria',
        'Vidisha',
    ],
    'Maharashtra': [
        'Ahmednagar',
        'Akola',
        'Amravati',
        'Aurangabad',
        'Bhandara',
        'Beed',
        'Buldhana',
        'Chandrapur',
        'Dhule',
        'Gadchiroli',
        'Gondia',
        'Hingoli',
        'Jalgaon',
        'Jalna',
        'Kolhapur',
        'Latur',
        'Mumbai City',
        'Mumbai suburban',
        'Nandurbar',
        'Nanded',
        'Nagpur',
        'Nashik',
        'Osmanabad',
        'Parbhani',
        'Pune',
        'Raigad',
        'Ratnagiri',
        'Sindhudurg',
        'Sangli',
        'Solapur',
        'Satara',
        'Thane',
        'Wardha',
        'Washim',
        'Yavatmal',
    ],
    'Manipur': [
        'Bishnupur',
        'Churachandpur',
        'Chandel',
        'Imphal East',
        'Senapati',
        'Tamenglong',
        'Thoubal',
        'Ukhrul',
        'Imphal West',
    ],
    'Meghalaya': [
        'East Garo Hills',
        'East Khasi Hills',
        'Jaintia Hills',
        'Ri Bhoi',
        'South Garo Hills',
        'West Garo Hills',
        'West Khasi Hills',
    ],
    'Mizoram': [
        'Aizawl',
        'Champhai',
        'Kolasib',
        'Lawngtlai',
        'Lunglei',
        'Mamit',
        'Saiha',
        'Serchhip',
    ],
    'Nagaland': [
        'Dimapur',
        'Kohima',
        'Mokokchung',
        'Mon',
        'Phek',
        'Tuensang',
        'Wokha',
        'Zunheboto',
    ],
    'Orissa': [
        'Angul',
        'Boudh (Bauda)',
        'Bhadrak',
        'Balangir',
        'Bargarh (Baragarh)',
        'Balasore',
        'Cuttack',
        'Debagarh (Deogarh)',
        'Dhenkanal',
        'Ganjam',
        'Gajapati',
        'Jharsuguda',
        'Jajpur',
        'Jagatsinghpur',
        'Khordha',
        'Kendujhar (Keonjhar)',
        'Kalahandi',
        'Kandhamal',
        'Koraput',
        'Kendrapara',
        'Malkangiri',
        'Mayurbhanj',
        'Nabarangpur',
        'Nuapada',
        'Nayagarh',
        'Puri',
        'Rayagada',
        'Sambalpur',
        'Subarnapur (Sonepur)',
        'Sundergarh',
    ],
    'Pondicherry': [
        'Karaikal',
        'Mahe',
        'Pondicherry',
        'Yanam',
    ],
    'Punjab': [
        'Amritsar',
        'Barnala',
        'Bathinda',
        'Firozpur',
        'Faridkot',
        'Fatehgarh Sahib',
        'Fazilka',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Ludhiana',
        'Mansa',
        'Moga',
        'Sri Muktsar Sahib',
        'Pathankot',
        'Patiala',
        'Rupnagar',
        'Ajitgarh (Mohali)',
        'Sangrur',
        'Nawanshahr',
        'Tarn Taran',
    ],
    'Rajasthan': [
        'Ajmer',
        'Alwar',
        'Bikaner',
        'Barmer',
        'Banswara',
        'Bharatpur',
        'Baran',
        'Bundi',
        'Bhilwara',
        'Churu',
        'Chittorgarh',
        'Dausa',
        'Dholpur',
        'Dungapur',
        'Ganganagar',
        'Hanumangarh',
        'Jhunjhunu',
        'Jalore',
        'Jodhpur',
        'Jaipur',
        'Jaisalmer',
        'Jhalawar',
        'Karauli',
        'Kota',
        'Nagaur',
        'Pali',
        'Pratapgarh',
        'Rajsamand',
        'Sikar',
        'Sawai Madhopur',
        'Sirohi',
        'Tonk',
        'Udaipur',
    ],
    'Sikkim': [
        'East Sikkim',
        'North Sikkim',
        'South Sikkim',
        'West Sikkim',
    ],
    'Tamil Nadu': [
        'Ariyalur',
        'Chennai',
        'Coimbatore',
        'Cuddalore',
        'Dharmapuri',
        'Dindigul',
        'Erode',
        'Kanchipuram',
        'Kanyakumari',
        'Karur',
        'Madurai',
        'Nagapattinam',
        'Nilgiris',
        'Namakkal',
        'Perambalur',
        'Pudukkottai',
        'Ramanathapuram',
        'Salem',
        'Sivaganga',
        'Tirupur',
        'Tiruchirappalli',
        'Theni',
        'Tirunelveli',
        'Thanjavur',
        'Thoothukudi',
        'Tiruvallur',
        'Tiruvarur',
        'Tiruvannamalai',
        'Vellore',
        'Viluppuram',
        'Virudhunagar',
    ],
    'Tripura': [
        'Dhalai',
        'North Tripura',
        'South Tripura',
        'Khowai',
        'West Tripura',
    ],
    'Uttar Pradesh': [
        'Agra',
        'Allahabad',
        'Aligarh',
        'Ambedkar Nagar',
        'Auraiya',
        'Azamgarh',
        'Barabanki',
        'Budaun',
        'Bagpat',
        'Bahraich',
        'Bijnor',
        'Ballia',
        'Banda',
        'Balrampur',
        'Bareilly',
        'Basti',
        'Bulandshahr',
        'Chandauli',
        'Chhatrapati Shahuji Maharaj Nagar',
        'Chitrakoot',
        'Deoria',
        'Etah',
        'Kanshi Ram Nagar',
        'Etawah',
        'Firozabad',
        'Farrukhabad',
        'Fatehpur',
        'Faizabad',
        'Gautam Buddh Nagar',
        'Gonda',
        'Ghazipur',
        'Gorakhpur',
        'Ghaziabad',
        'Hamirpur',
        'Hardoi',
        'Mahamaya Nagar',
        'Jhansi',
        'Jalaun',
        'Jyotiba Phule Nagar',
        'Jaunpur district',
        'Ramabai Nagar (Kanpur Dehat)',
        'Kannauj',
        'Kanpur',
        'Kaushambi',
        'Kushinagar',
        'Lalitpur',
        'Lakhimpur Kheri',
        'Lucknow',
        'Mau',
        'Meerut',
        'Maharajganj',
        'Mahoba',
        'Mirzapur',
        'Moradabad',
        'Mainpuri',
        'Mathura',
        'Muzaffarnagar',
        'Panchsheel Nagar district (Hapur)',
        'Pilibhit',
        'Shamli',
        'Pratapgarh',
        'Rampur',
        'Raebareli',
        'Saharanpur',
        'Sitapur',
        'Shahjahanpur',
        'Sant Kabir Nagar',
        'Siddharthnagar',
        'Sonbhadra',
        'Sant Ravidas Nagar',
        'Sultanpur',
        'Shravasti',
        'Unnao',
        'Varanasi',
    ],
    'Uttarakhand': [
        'Almora',
        'Bageshwar',
        'Chamoli',
        'Champawat',
        'Dehradun',
        'Haridwar',
        'Nainital',
        'Pauri Garhwal',
        'Pithoragarh',
        'Rudraprayag',
        'Tehri Garhwal',
        'Udham Singh Nagar',
        'Uttarkashi',
    ],
    'West Bengal': [
        'Birbhum',
        'Bankura',
        'Bardhaman',
        'Darjeeling',
        'Dakshin Dinajpur',
        'Hooghly',
        'Howrah',
        'Jalpaiguri',
        'Cooch Behar',
        'Kolkata',
        'Maldah',
        'Paschim Medinipur',
        'Purba Medinipur',
        'Murshidabad',
        'Nadia',
        'North 24 Parganas',
        'South 24 Parganas',
        'Purulia',
        'Uttar Dinajpur',
    ]
}

for (let index = 1; index <= Allcountry.length; index++) {
    document.getElementById('countrySelect').innerHTML += `<option value="${index}">${Allcountry[index - 1]}</option>`
}


function stateIndia() {
    document.getElementById('stateSelect').innerHTML='<option value="NA" selected>Select</option>'
    if (document.getElementById('countrySelect').value == 101) {
        for (let index = 1; index <= Allstate.length; index++) {
            document.getElementById('stateSelect').innerHTML += `<option value="${index}">${Allstate[index - 1]}</option>`
        }
    }else{
        document.getElementById('stateSelect').innerHTML='<option value="NA" selected>Select</option>'
        document.getElementById('citySelect').innerHTML= '<option value="NA" selected>Select</option>'
    }
}


function cityIndia() {
    document.getElementById('citySelect').innerHTML='<option value="NA" selected>Select</option>'
    let val = document.getElementById('stateSelect').value
    let statename = Allstate[val - 1]
    if (statename) {
        for (let index = 0; index < Allcity[statename].length; index++) {
            document.getElementById('citySelect').innerHTML += `<option value="${index}">${Allcity[statename][index]}</option>`
        }
    }else{
        document.getElementById('citySelect').innerHTML= '<option value="NA" selected>Select</option>'
    }
}


let fullName, dob, gender, email, contact, country, state, city
let disease, doctor, mdeicine, followUp
let patientDetails = [
    {
        'Id': 1,
        'Name': 'Krunal Dhote',
        'DOB': '2001-10-09',
        'Gender': 'Male',
        'Email': 'krunal.d@shaligraminfotech.com',
        'ContactNumber': '9307871334',
        'Address': 'Amravati',
        'Treatment': [
            {
                'Id': 1,
                'Disease': 'Cold',
                'Doctor': 'Krunal Dhote',
                'Medicine': 'Liocetrizine',
                'FollowUpDate': '2023-04-16'
            }
        ]
    }
]
$(document).ready(function () {
    table = $('#patientTable').DataTable({
        data: patientDetails,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'Name' },
            { mData: null,
              mRender:function(o){
                return new Date().getFullYear()-new Date(o.DOB).getFullYear()
              } 
            
            },
            { data: 'Gender' },
            { data: 'Email' },
            { data: 'ContactNumber' },
            { data: 'Address' },
            {
                mData: null,
                mRender: function (o) {
                    return `
                    <div class="d-flex">
                    <button class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#tratmentForm" onclick="Treatment('${o.Id}')"><i class="fa-solid fa-notes-medical"></i></button>
                    <button class="btn btn-primary m-1" onclick="edit('${o.Id}')"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger m-1" onclick="del('${o.Id}',this)"><i class="fa-solid fa-trash"></i></button></div>
                    `
                }
            },
        ],
        pageLength:5
    })



    $('#patientTable tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    $('#openForm').on('click', function () {
        $('#submit').show()
        $('#update').hide()
        remErr()
        document.getElementById('patientForm').reset()
    })

})


function format(d) {
    // `d` is the original data object for the row
    if (d.Treatment.length == 0) {
        return 'No Data Found'
    } else {
        let tratement = `
        <tr>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Medicine</th>
            <th>Follow Up Date</th>
        </tr>
    `
        for (let i = 0; i < d.Treatment.length; i++) {
            tratement += `<tr>
            <td>${d.Treatment[i].Disease}</td>
            <td>${d.Treatment[i].Doctor}</td>
            <td>${d.Treatment[i].Medicine}</td>
            <td>${d.Treatment[i].FollowUpDate}</td>
            </tr>
        `
        }
        return tratement
    }
}

let pId = 2
function PatientForm() {
    fullName = document.getElementById('name').value
    dob = document.getElementById('dob').value
    email = document.getElementById('mail').value
    contact = document.getElementById('phone').value
    country = document.getElementById('countrySelect').value
    state = document.getElementById('stateSelect').value
    city = document.getElementById('citySelect').value

    let check = PatientValidation()
    if (check) {
        check.Id = pId
        patientDetails.push(check)
        pId += 1
        table.clear().rows.add(patientDetails).draw()
        $('#staticBackdrop').modal('hide')
        document.getElementById('patientForm').reset()
        console.log(patientDetails);
    }

}

function PatientValidation() {
    let details = {}
    let CountryName;
    let stateName;
    let cityName;
    let valid = true;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(fullName)) {
        document.getElementById('nameErr').innerHTML = 'Invalid Name Given!'
        valid = false
    } else {
        document.getElementById('nameErr').innerHTML = ''
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailformat.test(email)) {
        document.getElementById('mailErr').innerHTML = 'Invalid Mail Given!'
        valid = false
    } else {
        document.getElementById('mailErr').innerHTML = ''
    }

    if (dob == '') {
        document.getElementById('dobErr').innerHTML = 'Date Of Birth Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('dobErr').innerHTML = ''
    }

    var phoneno = /^\d{10}$/;
    if (!phoneno.test(contact)) {
        document.getElementById('phnErr').innerHTML = 'Invalid Contact Number Given!'
        valid = false
    } else {
        document.getElementById('phnErr').innerHTML = ''
    }

    if (country == 'NA') {
        document.getElementById('countryErr').innerHTML = 'Country Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('countryErr').innerHTML = ''
        CountryName = Allcountry[country - 1]
    }

    if (state == 'NA') {
        document.getElementById('countryErr').innerHTML = 'State Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('countryErr').innerHTML = ''
        stateName = Allstate[state - 1]
    }

    if (city == 'NA') {
        document.getElementById('cityErr').innerHTML = 'City Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('cityErr').innerHTML = ''
        cityName = Allcity[stateName][city]
    }

    let gender;
    let m = document.getElementById('m')
    let f = document.getElementById('f')
    let t = document.getElementById('t')
    if (!m.checked && !f.checked && !t.checked) {
        document.getElementById('genderErr').innerHTML = 'Gender Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('genderErr').innerHTML = ''
        if (m.checked)
            gender = m.value
        else if (f.checked)
            gender = f.value
        else
            gender = t.value
    }
    if (valid) {
        details = {
            'Name': fullName,
            'DOB': dob,
            'Gender': gender,
            'Email': email,
            'ContactNumber': contact,
            'Address': [CountryName,stateName,cityName],
            'Treatment': []
        }
        return details
    }
}

let update, updateId;
function edit(id) {
    remErr()
    updateId = id;
    objIndex = patientDetails.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        $('#submit').hide()
        $('#update').show()
        $('#staticBackdrop').modal('show')
        let date = new Date(patientDetails[objIndex].DOB)
        let format = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0)
        console.log(date);
        document.getElementById('name').value = patientDetails[objIndex].Name
        document.getElementById('dob').value = format
        document.getElementById('mail').value = patientDetails[objIndex].Email
        document.getElementById('phone').value = patientDetails[objIndex].ContactNumber
        
        if(patientDetails[objIndex].Gender=='Male')
            document.getElementById('m').checked=true
        else if(patientDetails[objIndex].Gender=='Female')
            document.getElementById('f').checked=true
        else
            document.getElementById('t').checked=true
        
        update = objIndex
    }
}

function UpdatePatientForm() {
    fullName = document.getElementById('name').value
    dob = document.getElementById('dob').value
    email = document.getElementById('mail').value
    contact = document.getElementById('phone').value

    let check = PatientValidation()
    if (check) {
        check.Id = updateId
        patientDetails[update].Name = check.Name
        patientDetails[update].DOB = check.DOB
        patientDetails[update].Email = check.Email
        patientDetails[update].ContactNumber = check.ContactNumber
        table.clear().rows.add(patientDetails).draw()
        $('#staticBackdrop').modal('hide')
        document.getElementById('patientForm').reset()
        console.log(patientDetails);
    }
}

function del(id) {
    objIndex = patientDetails.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        patientDetails.splice(objIndex, 1)
        table.clear().rows.add(patientDetails).draw()
    }
}


let select;
function Treatment(id) {
    objIndex = patientDetails.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        select = objIndex
    }
}

let tId = 2
function TreatmentForm() {
    disease = document.getElementById('disease').value
    doctor = document.getElementById('doctor').value
    mdeicine = document.getElementById('medicine').value
    followUp = document.getElementById('followUp').value

    let check = TreatmentValidation()
    if (check) {
        check.Id = tId
        patientDetails[select].Treatment.push(check)
        table.clear().rows.add(patientDetails).draw()
        $('#tratmentForm').modal('hide')
        document.getElementById('treatment').reset()
        console.log(patientDetails);
        tId += 1
    }
    console.log(patientDetails[select]);
}

function TreatmentValidation() {
    let details = {}
    let valid = true;

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(doctor)) {
        document.getElementById('doctorErr').innerHTML = 'Invalid Name Given!'
        valid = false
    } else {
        document.getElementById('doctorErr').innerHTML = ''
    }

    if (followUp == '') {
        document.getElementById('followUpErr').innerHTML = 'Date Of Birth Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('followUpErr').innerHTML = ''
    }

    if (mdeicine == '') {
        document.getElementById('medicineErr').innerHTML = 'Medicine Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('medicineErr').innerHTML = ''
    }


    if (disease == '') {
        document.getElementById('diseaseErr').innerHTML = 'Disease Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('diseaseErr').innerHTML = ''
    }


    if (valid) {
        details = {
            'Disease': disease,
            'Doctor': doctor,
            'Medicine': mdeicine,
            'FollowUpDate': followUp
        }
        return details
    }
}

function remErr() {
    document.getElementById('nameErr').innerHTML = ''
    document.getElementById('mailErr').innerHTML = ''
    document.getElementById('dobErr').innerHTML = ''
    document.getElementById('phnErr').innerHTML = ''
    document.getElementById('genderErr').innerHTML = ''
    document.getElementById('doctorErr').innerHTML = ''
    document.getElementById('followUpErr').innerHTML = ''
    document.getElementById('medicineErr').innerHTML = ''
    document.getElementById('diseaseErr').innerHTML = ''
}