AOS.init();
//  Report/Presentation cards
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Conceptual Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(February 18, 2023)",
    desp: "<li>The goal of this first deliverable is to identify and document the conceptual architecture of the course project</li> <li>This deliverable is due on Friday 17/02 (11.59pm)</li> <li>Submit your conceptual architecture presentation</li>",
  },
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Conceptual Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(February 18, 2023)",
    desp: "<li>The goal of this first deliverable is to identify and document the conceptual architecture of the course project</li> <li>This deliverable is due on Friday 17/02 (11.59pm)</li> <li>Submit your conceptual architecture report</li>",
  },
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(March 18, 2023)",
    desp: "<li>The goal of this second deliverable is to recover the concrete architecture of the course project, then identify and discuss divergences w.r.t. the conceptual architecture of deliverable A1</li> <li>This deliverable is due on Friday 17/03 (11.59pm)</li> <li>Submit your concrete architecture presentation</li>",
  },
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(March 18, 2023)",
    desp: "<li>The goal of this second deliverable is to recover the concrete architecture of the course project, then identify and discuss divergences w.r.t. the conceptual architecture of deliverable A1</li> <li>This deliverable is due on Friday 17/03 (11.59pm)</li> <li>Submit your concrete architecture report</li>",
  },
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Enhancement Proposal",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(April 11, 2023)",
    desp: "<li>For the final deliverable, you will submit a presentation (10 minutes) that propose a particular feature or enhancement (in consultation with your TA).</li> <li>This deliverable is due on Monday 10/04 (11.59pm)</li>",
  },
  {
    link: "http://playing.hypernom.com/monkeys",
    title: "Enhancement Proposal",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(April 11, 2023)",
    desp: "<li>For the final deliverable, you will submit a report (10-15 pages long) that propose a particular feature or enhancement (in consultation with your TA).</li> <li>This deliverable is due on Monday 10/04 (11.59pm)</li> <li>The report should briefly discuss the changes required so the current architecture can support the enhancement.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ link, title, cardImage, place, time, desp }) =>
      (output += `        
    <div onclick="location.href='${link}';" class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
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


