AOS.init();
//  Work experience cards
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Conceptual Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(February 18, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
  {
    title: "Conceptual Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(February 18, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
  {
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(March 21, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
  {
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(March 21, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
  {
    title: "Enhancement Proposal",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(April 11, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
  {
    title: "Enhancement Proposal",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(April 11, 2023)",
    desp: "<li>Temp.</li> <li>Temp.</li> <li>Temp.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


