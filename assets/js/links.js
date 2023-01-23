/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    link: "https://github.com/VincentGarreau/particles.js",
    title: "Interactive particle animation",
    authors:
      "Vincent Garreau",
    conferences:
      "This is the particle animation algorithm implemented in the Home page",
    researchYr: 2023,
    image: "assets/images/particleLinks.png",
  },
  {
    link: "https://github.com/smaranjitghose/awesome-portfolio-websites",
    title: "Website framework",
    authors:
      "Smaranjit Ghose and Anush Bhatia",
    conferences:
      "This is the Github code main framework for the website",
    researchYr: 2023,
    image: "assets/images/websiteFramework.gif", 
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      link,
      image,
      title,
      authors,
      conferences,
      researchYr,
    }) =>
      (output += `
            <tr onclick="location.href='${link}';" data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                  
                    
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
