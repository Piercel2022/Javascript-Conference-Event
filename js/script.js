const data = [
  {
    id: 1,
    pic: './images/speakers/image-1.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Yochai Benkler',
    designation: 'Berkamn Professor of Enterprenuerial Legal Studies at Harvard Law School',
    history: 'Benkler studie commons-based peer production, and published his smenial book The Wealth of Networks in 2006.',
  },

  {
    id: 2,
    pic: './images/speakers/image-2.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Kilnam Chon',
    designation: 'Kilnam Chon is a South Korean computer scientist. ',
    history: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons.In 2012,he was inducted into the inaugural class of the Internet Society s(ISCO) Internet Hall of Fame',
  },

  {
    id: 3,
    pic: './images/speakers/image-3.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'SohYeong Noh',
    designation: 'Director of Art Centre Nabi and a board member of CC Korea ',
    history: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among sience technology,humanities and the arts.',
  },

  {
    id: 4,
    pic: './images/speakers/image-4.png',
    altText: 'Canadian venture capitalist and entrepreneur',
    nameOfSpeaker: 'Julia Leda',
    designation: 'Prestin of Yound Pirates of Europe',
    history: 'European ingetration,political,democration of youth through online as her maj Reda s report outlining potential change law was approved by the Parliamet in.',
  },
  {
    id: 5,
    pic: './images/speakers/image-5.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Lila Tretikov',
    designation: 'Executive Director of the Wikimedia Foundation',
    history: 'Lila Tratikoc is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month',
  },
  {
    id: 6,
    pic: './images/speakers/image-6.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Ryan Merkley',
    designation: 'CEO of Creative Commons,ex COO of the Mozilla Foundation',
    history: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);