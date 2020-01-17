var stateObject = {
	"India": 
		{"Andhra Pradesh(AP)":["Adilabad ","Anantapur","Chittoor","Kakinada","Guntur","Hyderabad","Karimnagar","Khammam","Krishna","Kurnool","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ongole","Hyderabad","Srikakulam","Nellore","Visakhapatnam","Vizianagaram","Warangal","Eluru","Kadapa"],  
		 "Arunachal Pradesh (AR)":["Anjaw","Changlang","East Siang","Kurung Kumey","Lohit","Lower Dibang Valley","Lower Subansiri","Papum Pare","Tawang","Tirap","Dibang Valley","Upper Siang","Upper Subansiri","West Kameng ","West Siang"],
		 "Assam (AS)":["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dima Hasao","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Marigaon","Nagaon","Nalbari","Sibsagar","Sonitpur","Tinsukia","Udalguri"],
		 "Bihar (BR)":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
		 "Chandigarh":["Chandigarh"],
         "Chhattisgarh (CG)":["Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Jashpur","Janjgir-Champa","Korba","Koriya","Kanker","Kabirdham (Kawardha)","Mahasamund","Narayanpur","Raigarh","Rajnandgaon","Raipur","Surguja"],
         "Dadra and Nagar Haveli (DN)":["Dadra and Nagar Haveli"],
         "Daman and Diu (DD)":["Daman","Diu"],
         "Gujarat (GJ)":["Ahmedabad","Amreli district","Anand","Banaskantha","Bharuch","Bhavnagar","Dahod","The Dangs","Gandhinagar","Jamnagar","Junagadh","Kutch","Kheda","Mehsana","Narmada","Navsari","Patan","Panchmahal","Porbandar","Rajkot","Sabarkantha","Surendranagar","Surat","Vyara","Vadodara","Valsad"],
         "Haryana (HR)":["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar"],
         "Himachal Pradesh (HP)":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
         "Jammu and Kashmir (JK)":["Anantnag","Badgam","Bandipora","Baramulla","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kupwara","Kulgam","Leh","Poonch","Pulwama","Rajauri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
         "Jharkhand (JH)":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
         "Karnataka (KA)":["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamarajnagar","Chikkamagaluru","Chikkaballapur","Chitradurga","Davanagere","Dharwad","Dakshina Kannada","Gadag","Gulbarga","Hassan","Haveri district","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Uttara Kannada","Ramanagara","Yadgir"],
         "Madhya Pradesh (MP)":["Alirajpur","Anuppur","Ashok Nagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa (East Nimar)","Khargone (West Nimar)","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Rewa","Rajgarh","Ratlam","Raisen","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
         "Maharashtra (MH)":["Ahmednagar","Akola","Amravati","Aurangabad","Bhandara","Beed","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai suburban","Nandurbar","Nanded","Nagpur","Nashik","Osmanabad","Parbhani","Pune","Raigad","Ratnagiri","Sindhudurg","Sangli","Solapur","Satara","Thane","Wardha","Washim","Yavatmal"],
         "Manipur (MN)":["Bishnupur","Churachandpur","Chandel","Imphal East","Senapati","Tamenglong","Thoubal","Ukhrul","Imphal West"],
         "Meghalaya (ML)":["East Garo Hills","East Khasi Hills","Jaintia Hills","Ri Bhoi","South Garo Hills","West Garo Hills","West Khasi Hills"],
         "Mizoram (MZ)":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
         "Nagaland (NL)":["Dimapur","Kohima","Mokokchung","Mon","Phek","Tuensang","Wokha","Zunheboto"],
         "Orissa (OR)":["Angul","Boudh (Bauda)","Bhadrak","Balangir","Bargarh (Baragarh)","Balasore","Cuttack","Debagarh (Deogarh)","Dhenkanal","Ganjam","Gajapati","Jharsuguda","Jajpur","Jagatsinghpur","Khordha","Kendujhar (Keonjhar)","Kalahandi","Kandhamal","Koraput","Kendrapara","Malkangiri","Mayurbhanj","Nabarangpur","Nuapada","Nayagarh","Puri","Rayagada","Sambalpur","Subarnapur (Sonepur)","Sundergarh"],
         "Pondicherry (Puducherry) (PY)":["Karaikal","Mahe","Pondicherry","Yanam"],
         "Punjab (PB)":["Amritsar","Barnala","Bathinda","Firozpur","Faridkot","Fatehgarh Sahib","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot","Patiala","Rupnagar","Ajitgarh (Mohali)","Sangrur","Nawanshahr","Tarn Taran"],
         "Rajasthan (RJ)":["Ajmer","Alwar","Bikaner","Barmer","Banswara","Bharatpur","Baran","Bundi","Bhilwara","Churu","Chittorgarh","Dausa","Dholpur","Dungapur","Ganganagar","Hanumangarh","Jhunjhunu","Jalore","Jodhpur","Jaipur","Jaisalmer","Jhalawar","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sikar","Sawai Madhopur","Sirohi","Tonk","Udaipur"],
         "Sikkim (SK)":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
         "Tamil Nadu (TN)":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Madurai","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Tirupur","Tiruchirappalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvarur","Tiruvannamalai","Vellore","Viluppuram","Virudhunagar"],
         "Tripura (TR)":["Dhalai","North Tripura","South Tripura","Khowai","West Tripura"],
         "Uttar Pradesh (UP)":["Agra","Allahabad","Aligarh","Ambedkar Nagar","Auraiya","Azamgarh","Barabanki","Budaun","Bagpat","Bahraich","Bijnor","Ballia","Banda","Balrampur","Bareilly","Basti","Bulandshahr","Chandauli","Chhatrapati Shahuji Maharaj Nagar","Chitrakoot","Deoria","Etah","Kanshi Ram Nagar","Etawah","Firozabad","Farrukhabad","Fatehpur","Faizabad","Gautam Buddh Nagar","Gonda","Ghazipur","Gorakhpur","Ghaziabad","Hamirpur","Hardoi","Mahamaya Nagar","Jhansi","Jalaun","Jyotiba Phule Nagar","Jaunpur district","Ramabai Nagar (Kanpur Dehat)","Kannauj","Kanpur","Kaushambi","Kushinagar","Lalitpur","Lakhimpur Kheri","Lucknow","Mau","Meerut","Maharajganj","Mahoba","Mirzapur","Moradabad","Mainpuri","Mathura","Muzaffarnagar","Panchsheel Nagar district (Hapur)","Pilibhit","Shamli","Pratapgarh","Rampur","Raebareli","Saharanpur","Sitapur","Shahjahanpur","Sant Kabir Nagar","Siddharthnagar","Sonbhadra","Sant Ravidas Nagar","Sultanpur","Shravasti","Unnao","Varanasi"],
         "Uttarakhand (UK)":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
         "West Bengal (WB)":["Birbhum","Bankura","Bardhaman","Darjeeling","Dakshin Dinajpur","Hooghly","Howrah","Jalpaiguri","Cooch Behar","Kolkata","Maldah","Paschim Medinipur","Purba Medinipur","Murshidabad","Nadia","North 24 Parganas","South 24 Parganas","Purulia","Uttar Dinajpur"],
		 "Delhi": ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","South Delhi","South West Delhi","West Delhi"],
		 "Kerala": ["Thiruvananthapuram", "Palakkad","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","ottayam","Kozhikode","Malappuram","Pathanamthitta","Thrissur","Wayanad"],
		 "Goa": ["North Goa", "South Goa"],
},
"Australia": {
         "New South Wales":["Sydney (Capital)","Albury (NSW-Victoria border)","Armidale","Bathurst","Broken Hill","Cessnock","Coffs Harbour","Dubbo","Gosford","Goulburn","	Grafton","Griffith","Lake Macquarie","Lismore","Maitland","Newcastle","Nowra","	Orange","Port Macquarie","	Queanbeyan (adjacent to Canberra)","Tamworth","	Tweed Heads (NSW-Queensland border)","Wagga Wagga","Wollongong","Wyong"],
         "Northern Territory":["Darwin (Capital)","Alice Springs","Katherine","Palmerston"],
         "Queensland":["Brisbane (Capital)","Bundaberg","Cairns","Charters Towers","Gladstone","Gold Coast","Gympie","Hervey Bay","Ipswich","Logan City","Mackay","Maryborough","Mount Isa","Nambour","Redcliffe","Rockhampton","Sunshine Coast {region}","Thuringowa","Toowoomba","Townsville"],
         "South Australia":["Adelaide (Capital)","Gladstone","Mount Gambier","Murray Bridge","Port Augusta","Port Pirie","Port Lincoln","Victor Harbor","Whyalla"],
         "Tasmania":["Hobart (Capital)","Burnie","Clarence","Devonport","Glenorchy","Launceston"],
         "Victoria":["Melbourne (Capital)","Benalla","Ballarat","Bendigo","Geelong","Latrobe City","Mildura","Shepparton","Swan Hill","Wangaratta","Warrnambool","Wodonga"],
         "Western Australia":["Perth (Capital)","Albany","Broome","Bunbury","Geraldton","Fremantle","Kalgoorlie","Mandurah","Port Hedland"]
}
}
window.onload = function () {
var countySel = document.getElementById("countySel"),
stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countySel.options[countySel.options.length] = new Option(country, country);
}
countySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}