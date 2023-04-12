const axios = require("axios");
const cheerio = require("cheerio");

const getRasp = async (group) => {
  try {
    const resp = await axios.get("https://guap.ru/rasp", {
      params: {
        g: group,
      },
    });
    return resp;
  } catch (e) {
    console.log(e);
  }
};
getRasp(275).then((res) => {
  const $ = cheerio.load(res.data);
  const $res = $(".result");
  const $days = $(".result h3");
  const studies = $res.find(".study");
  const myClass = {
    day: "",
    numberOfClass: "",
    weekDirection: "",
    type: "",
    name: "",
    place: "",
    teacher: {},
    groups: {},
  };

  const allStudies = [];
  for (let i = 0; i < studies.length; i++) {
    let myClassI = {
      day: "",
      numberOfClass: "",
      weekDirection: "",
      type: "",
      name: "",
      place: "",
      teacher: {},
      groups: {},
    };
    let study = studies.eq(i).children();
    let spanI = study.first();
    let divI = study.last();
    /*
        парсим span для назначения направления недели, типа занятий и названия предсмета
    */
    let spanChildrens = spanI.children();
    let iner = spanI.contents().filter(function () {
      return this.nodeType === 3;
    });
    myClassI.name = iner.text();
    myClassI.place = spanChildrens.last().text();
    if (spanChildrens.length === 3) {
      myClassI.weekDirection = spanChildrens.eq(0).attr("title");
      myClassI.type = spanChildrens.eq(1).text();
    } else {
      myClassI.weekDirection = "both";
      myClassI.type = spanChildrens.eq(0).text();
    }
    allStudies.push(myClassI);
    //console.log(spanI.toString(), "\n");
    // console.log(divI.toString(), "\n");
  }
  /*
      заполняем номера пар
  */

});
