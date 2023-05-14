const axios = require("axios");
const cheerio = require("cheerio");

const getRasp = async (group) => {
  try {
    const resp = await axios.get("http://localhost:8080/rasp", {
      params: {
        g: group,
      },
    });
    return resp;
  } catch (e) {
    console.log(e);
  }
};

const raspProcess = (resp) => {
  console.log("Beggining to process rasp");
  const $ = cheerio.load(resp.data);
  const $res = $(".result");
  // const $days = $(".result h3");
  const studies = $res.find(".study");
  /*const myClass = {
    day: "",
    numberOfClass: "",
    weekDirection: "",
    type: "",
    name: "",
    place: "",
    teacher: {},
    groups: {},
  };*/

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
    /*
        парсим div для назначения преподавателя и группы
    */
    let divChildrens = divI.children();
    if (divChildrens.length === 2) {
      let preps = divChildrens.first().children();
      let groups = divChildrens.last().children();
      for (let p = 0; p < preps.length; p++) {
        // console.log(preps.eq(p).attr("href"));
        let key = preps.eq(p).attr("href");
        let value = preps.eq(p).text();
        myClassI.teacher[key] = value;
      }
      for (let p = 0; p < groups.length; p++) {
        let key = groups.eq(p).attr("href");
        let value = groups.eq(p).text();
        myClassI.groups[key] = value;
      }
    } else {
      let groups = divChildrens.first();
      for (let p = 0; p < groups.length; p++) {
        let key = groups.eq(p).attr("href");
        let value = groups.eq(p).text();
        myClassI.groups[key] = value;
      }
    }

    /*
        добавляем полученный объект в массив всех пар группы
    */
    allStudies.push(myClassI);
  }
  /*
      заполняем другие категории
  */
  let listH3 = $res.find("h3");
  let listH4 = $res.find("h4");
  let lastStudyIndex = 0;
  let lastStudyIndexH4 = 0;
  /*
      заполняем дни недели
  */
  for (let i = 0; i < listH3.length; i++) {
    let day = listH3.eq(i).nextUntil("h3");
    let listStudyClass = day.filter(".study");
    // заполняем день недели
    for (
      let j = lastStudyIndex;
      j < lastStudyIndex + listStudyClass.length;
      j++
    ) {
      allStudies[j].day = listH3.eq(i).text();
    }
    lastStudyIndex = lastStudyIndex + listStudyClass.length;
  }
  /*
      заполняем время пары
  */
  for (let i = 0; i < listH4.length; i++) {
    let part = listH4.eq(i).nextUntil("h4").not("h3");
    // console.log(part.length);
    for (let j = lastStudyIndexH4; j < lastStudyIndexH4 + part.length; j++) {
      allStudies[j].numberOfClass = listH4.eq(i).text();
    }
    lastStudyIndexH4 = lastStudyIndexH4 + part.length;
  }
  console.log(allStudies);
};

const getFullRasp = (group) => {
  getRasp(group).then((res) => {
    const $ = cheerio.load(res.data);
    const $res = $(".result");
    // const $days = $(".result h3");
    const studies = $res.find(".study");
    /*const myClass = {
      day: "",
      numberOfClass: "",
      weekDirection: "",
      type: "",
      name: "",
      place: "",
      teacher: {},
      groups: {},
    };*/

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
      /*
          парсим div для назначения преподавателя и группы
      */
      let divChildrens = divI.children();
      if (divChildrens.length === 2) {
        let preps = divChildrens.first().children();
        let groups = divChildrens.last().children();
        for (let p = 0; p < preps.length; p++) {
          // console.log(preps.eq(p).attr("href"));
          let key = preps.eq(p).attr("href");
          let value = preps.eq(p).text();
          myClassI.teacher[key] = value;
        }
        for (let p = 0; p < groups.length; p++) {
          let key = groups.eq(p).attr("href");
          let value = groups.eq(p).text();
          myClassI.groups[key] = value;
        }
      } else {
        let groups = divChildrens.first();
        for (let p = 0; p < groups.length; p++) {
          let key = groups.eq(p).attr("href");
          let value = groups.eq(p).text();
          myClassI.groups[key] = value;
        }
      }

      /*
          добавляем полученный объект в массив всех пар группы
      */
      allStudies.push(myClassI);
    }
    /*
        заполняем другие категории
    */
    let listH3 = $res.find("h3");
    let listH4 = $res.find("h4");
    let lastStudyIndex = 0;
    let lastStudyIndexH4 = 0;
    /*
        заполняем дни недели
    */
    for (let i = 0; i < listH3.length; i++) {
      let day = listH3.eq(i).nextUntil("h3");
      let listStudyClass = day.filter(".study");
      // заполняем день недели
      for (
        let j = lastStudyIndex;
        j < lastStudyIndex + listStudyClass.length;
        j++
      ) {
        allStudies[j].day = listH3.eq(i).text();
      }
      lastStudyIndex = lastStudyIndex + listStudyClass.length;
    }
    /*
        заполняем время пары
    */
    for (let i = 0; i < listH4.length; i++) {
      let part = listH4.eq(i).nextUntil("h4").not("h3");
      // console.log(part.length);
      for (let j = lastStudyIndexH4; j < lastStudyIndexH4 + part.length; j++) {
        allStudies[j].numberOfClass = listH4.eq(i).text();
      }
      lastStudyIndexH4 = lastStudyIndexH4 + part.length;
    }
    console.log(allStudies);
  });
};

export { getFullRasp, raspProcess };
