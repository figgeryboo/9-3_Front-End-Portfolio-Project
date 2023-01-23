const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const fortuneDate = document.getElementById('fortunedate');
const fortuneText = document.getElementById('fortunetext');
const sign = document.querySelector('#starsign');
const getSign = document.querySelector('form');
const fortune = document.querySelector('#fortune');
let icon = document.createElement('img')

console.log(fortune);
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '2fb90a5e02mshf28a516660252c4p1de889jsn73291cfde029',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
	},
};
getSign.addEventListener('submit', (e) => {
	e.preventDefault();
	var inputVal = sign.value;
	fetch(
		`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${inputVal}&day=today`,
		options
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (inputVal === 'gemini') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#a0ced9';
				h3.innerText =""
				fortune.style.backgroundColor = '#a0ced9';
				icon.src = "/assets/geminilogo.png";
				icon.alt = "gemini"
				
			} else if (inputVal === 'aries') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#653b9f';
				h3.innerText =""
				fortune.style.backgroundColor = '#653b9f';
				icon.src = "/assets/arieslogo.png";
				icon.alt = "aries"
				
			} else if (inputVal === 'taurus') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#1b2328';
				h3.innerText =""
				fortune.style.backgroundColor = '#555555';
				icon.src = "/assets/tauruslogo.png";
				icon.alt = "taurus"
			
			} else if (inputVal === 'cancer') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#fcf5c7';
				h3.innerText =""
				fortune.style.backgroundColor = '#fcf5c7';
				icon.src = "/assets/cancerlogo.png";
				icon.alt = "cancer"
		
			} else if (inputVal === 'leo') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#85e3ff';
				h3.innerText =""
				fortune.style.backgroundColor = '#85e3ff';
				icon.src = "/assets/leologo.png";
				icon.alt = "leo"
		
			} else if (inputVal === 'virgo') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#f7e5b7';
				h3.innerText =""
				fortune.style.backgroundColor = '#f7e5b7';
				icon.src = "/assets/virgologo.png";
				icon.alt = "virgo"
				
			} else if (inputVal === 'sagittarius') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#d7e2ea';
				h3.innerText =""
				fortune.style.backgroundColor = '#d7e2ea';
				icon.src = "/assets/saglogo.png";
				icon.alt = "sagittarius"
				
			} else if (inputVal === 'capricorn') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#91395f';
				h3.innerText =""
				fortune.style.backgroundColor = '#91395f';
				icon.src = "/assets/caprilogo.png";
				icon.alt = "capricorn"
				
			} else if (inputVal === 'aquarius') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#4e5969';
				h3.innerText =""
				fortune.style.backgroundColor = '#6e7b8f';
				icon.src = "/assets/aquariuslogo.png";
				icon.alt = "aquarius"
				
			} else if (inputVal === 'pisces') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#900d09';
				h3.innerText =""
				fortune.style.backgroundColor = '#a63532';
				icon.src = "/assets/pisceslogo.png";
				icon.alt = "pisces"
				
			} else if (inputVal === 'scorpio') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#C0C0C0';
				h3.innerText =""
				fortune.style.backgroundColor = '#C0C0C0';
				icon.src = "/assets/scorpiologo.png";
				icon.alt = "scorpio"
				
			} else if (inputVal === 'libra') {
				fortuneDate.textContent = `Today is ${data.current_date}`;
				fortuneText.textContent = `Good day to you, ${
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase()
				}! ${data.description}`;
				h1.textContent =
					inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase();
				h1.style.color = '#a51258';
				h3.innerText =""
				fortune.style.backgroundColor = '#a51258';
				icon.src = "/assets/libralogo.png";
				icon.alt = "libra"
				
			} else {
				h1.textContent = 'Error: Please Double-Check Your Spelling';
				h1.style.fontSize = '50px'
				h1.style.color = "#000000"
				h3.innerText =""				
				fortune.style.backgroundColor ="#808080" 
				fortuneDate.textContent = 'Try the following:'
				fortuneText.textContent =
					'aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, or pisces.';
					icon.src = "/assets/glitter.gif";
					icon.alt = "nothing_here"
				}
			h3.append(icon)
		})
		.catch((err) => console.error(err));
});

getSign.reset()