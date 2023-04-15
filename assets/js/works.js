AOS.init();
//  Report/Presentation cards
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    link: "https://www.youtube.com/watch?v=FQUyUrPR-MM", 
    title: "Conceptual Architecture",
    cardImage: "assets/images/CISC_326_A1_Presentation.png",
    place: "Presentation",
    time: "(February 18, 2023)",
    desp: "To this link, our team, BGW, analyzes the high-level conceptual architecture of Bitcoin Core. This is a clickable link to the video presentation, presented by Cam Krupa and Sawyer Proud.",
  },
  {
    link: "assets/CISC 322 A1 Final.pdf",
    title: "Conceptual Architecture",
    cardImage: "assets/images/CISC_326_A1_REPORT.png",
    place: "Report",
    time: "(February 18, 2023)",
    desp: "In this report, our team, BGW, analyzes the high-level conceptual architecture of Bitcoin Core. This discussion covers the conceptual framework derived by our team and the reasoning for the decisions behind these derivations, along with the descriptions of individual subsystems and their interactions amongst each other identified in the resulting architecture. Additionally, we provide two fundamental use cases.",
  },
  {
    link: "https://youtu.be/IO8qgRpEmK0",
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(March 18, 2023)",
    desp: "<li>The goal of this second deliverable is to recover the concrete architecture of the course project, then identify and discuss divergences w.r.t. the conceptual architecture of deliverable A1</li> <li>This deliverable is due on Friday 17/03 (11.59pm)</li> <li>Submit your concrete architecture presentation</li>",
  },
  {
    link: "assets/CISC 322_326 A2.pdf",
    title: "Concrete Architecture",
    cardImage: "assets/images/bitcoincore.png",
    place: "Report",
    time: "(March 18, 2023)",
    desp: "<li>The goal of this second deliverable is to recover the concrete architecture of the course project, then identify and discuss divergences w.r.t. the conceptual architecture of deliverable A1</li> <li>This deliverable is due on Friday 17/03 (11.59pm)</li> <li>Submit your concrete architecture report</li>",
  },
  {
    link: "https://www.youtube.com/watch?v=EhD3CEUvTOg",
    title: "Enhancement Proposal",
    cardImage: "assets/images/bitcoincore.png",
    place: "Presentation",
    time: "(April 11, 2023)",
    desp: "<li>For the final deliverable, you will submit a presentation (10 minutes) that propose a particular feature or enhancement (in consultation with your TA).</li> <li>This deliverable is due on Monday 10/04 (11.59pm)</li>",
  },
  {
    link: "assets/CISC322_A3_Group17.pdf",
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


