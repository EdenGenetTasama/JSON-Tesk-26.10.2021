let jsonUserInfo = JSON.stringify([
  {
    _id: "605acace4ab389d8ed54c496",
    age: 35,
    name: {
      last: "Hensley",
      first: "Dollie",
    },
    email: "dollie.hensley@undefined.org",
    index: 0,
    phone: "+1 (904) 421-3160",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceed1f0e1cfa1eee67",
    age: 21,
    name: {
      last: "Hunt",
      first: "Dolores",
    },
    email: "dolores.hunt@undefined.com",
    index: 1,
    phone: "+1 (967) 432-2905",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acacefedd0fe77874d78f",
    age: 28,
    name: {
      last: "Pennington",
      first: "Milagros",
    },
    email: "milagros.pennington@undefined.net",
    index: 2,
    phone: "+1 (922) 492-2085",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace6d3f84fc9b40849f",
    age: 32,
    name: {
      last: "Anderson",
      first: "Myrtle",
    },
    email: "myrtle.anderson@undefined.biz",
    index: 3,
    phone: "+1 (858) 404-3273",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace06d24518b6419d23",
    age: 29,
    name: {
      last: "York",
      first: "Terry",
    },
    email: "terry.york@undefined.co.uk",
    index: 4,
    phone: "+1 (816) 492-3475",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace46f0669738455d6b",
    age: 38,
    name: {
      last: "Bridges",
      first: "Effie",
    },
    email: "effie.bridges@undefined.info",
    index: 5,
    phone: "+1 (856) 423-3786",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace5ab5217354268532",
    age: 26,
    name: {
      last: "Walter",
      first: "Krista",
    },
    email: "krista.walter@undefined.me",
    index: 6,
    phone: "+1 (849) 513-2888",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaced68677a5dca08a9b",
    age: 20,
    name: {
      last: "Buchanan",
      first: "Gomez",
    },
    email: "gomez.buchanan@undefined.biz",
    index: 7,
    phone: "+1 (888) 494-2462",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceb7ece55cb38e546a",
    age: 20,
    name: {
      last: "Potter",
      first: "Caitlin",
    },
    email: "caitlin.potter@undefined.io",
    index: 8,
    phone: "+1 (801) 514-3055",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace98de45687c4c6279",
    age: 26,
    name: {
      last: "Dillon",
      first: "Guzman",
    },
    email: "guzman.dillon@undefined.ca",
    index: 9,
    phone: "+1 (857) 407-2403",
    picture: "http://placehold.it/32x32",
  },
]);

let emptyArray = JSON.stringify([]);

//!1.	צרו פונקצית פרומיס שממירה את ה JSON  לאובייקט ומחזירה מערך, במידה והוא תקין.
//!אם המערך ריק היא מחזירה אובייקט של שגיאה.

function checkIfEmpty(jsonList) {
  return new Promise((resolve, reject) => {
    let turnIntoObject = JSON.parse(jsonList);
    if (turnIntoObject.length > 0) {
      resolve({ message: "הצלחה" });
    }
    reject({ message: "ERROR" });
  });
}

async function asyncCheckIfEmpty() {
  try {
    return await checkIfEmpty(emptyArray);
  } catch (error) {
    return error;
  }
}

// asyncCheckIfEmpty().then((res)=>{console.log(res);}).catch((rej)=>{console.log(rej);}).finally(()=>{});

//!2.	צרו פונקצית פרומיס שמקבלת id של משתמש, הפונקציה ממירה את ה JSON  למערך ומחזירה את המשתמש המתאים, במידה והמשתמש קיים.
let searchByIDValue = document.getElementById("searchByID").value;

function getIdPromise(id) {
  return new Promise((resolve, reject) => {
    let objectPromise = JSON.parse(jsonUserInfo);
    for (const iterator of objectPromise) {
      if (iterator._id == id) {
        resolve(iterator);
      }
    }
    reject({ message: "ERROR" });
  });
}

async function getIdAsync() {
  try {
    return await getIdPromise(searchByIDValue);
  } catch (error) {
    return error;
  }
}

// getIdAsync().then((res)=>{console.log(res);}).catch((rej)=>{console.log(rej);})

//!3.	צרו פונקצית פרומיס שמקבלת אימייל של משתמש, הפונקציה ממירה את ה JSON  למערך ומחזירה את המשתמש המתאים, במידה והמשתמש קיים.

function checkEmailExist(email) {
  return new Promise((resolve, reject) => {
    let arrayObject = JSON.parse(jsonUserInfo);
    for (const iterator of arrayObject) {
      if (iterator.email == email) {
        resolve(iterator);
      }
    }
    reject({ message: "ERROR" });
  });
}

async function checkEmailExistAsync() {
  try {
    return await checkEmailExist("terry.york@undefined.co.uk");
  } catch (error) {
    return error;
  }
}

// checkEmailExistAsync().then((res) => {console.log(res);}).catch((rej)=>{console.log(rej);});

//!4.	צרו פונקצית פרומיס שמחזירה מערך של משתמשים שהגיל שלהם גבוה ממספר שמתקבל מבחוץ, במידה וישנם משתמשים.

function getHigherAge(userAnswer) {
  return new Promise((resolve, reject) => {
    let arrayOfUsersOver = [];
    let objectArrayJson = JSON.parse(jsonUserInfo);
    for (const iterator of objectArrayJson) {
      if (iterator.age > userAnswer) {
        arrayOfUsersOver.push(iterator);
        resolve(arrayOfUsersOver);
      }
    }
    reject({ message: "Error" });
  });
}

async function getHigher() {
  try {
    return await getHigherAge(Number(prompt("Enter age:")));
  } catch (error) {
    return error;
  }
}

// getHigher()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

//!5.	צרו פונקצית פרומיס שמחזירה מערך של משתמשים שהשם הפרטי שלהם זהה לשם שמתקבל מבחוץ, במידה וישנם משתמשים.

function checkNameExist(userName) {
  return new Promise((resolve, reject) => {
    let arrayOfSameNames = [];
    let JSONObject = JSON.parse(jsonUserInfo);
    for (const iterator of JSONObject) {
      if (userName == iterator.name.first) {
        arrayOfSameNames.push(iterator);
        resolve(arrayOfSameNames);
      }
    }
    reject({ message: "THERE IS NO USERS UNDER THIS NAME" });
  });
}

async function checkNameExistAsync() {
  try {
    return await checkNameExist("Terry");
  } catch (error) {
    return error;
  }
}

// checkNameExistAsync().then((res)=>{
// console.log(res);
// }).catch((rej)=>{console.log(rej);})

//!6.	צרו טופס שמאפשר למשתמש לבצע חיפוש על פי פרמטרים, כלומר, תצוגה שמפעילה את הפונקציות למעלה ומציגה למסך את התוצאות.

//!FIRST TRY
// searchByID.onchange = () => {
//   getIdAsync()
//     .then((res) => {
//       for (const iterator of res) {
//         showResultIDSearch.innerHTML += `${iterator}`
//       }
//     console.log(res);
//       ;
//     })
//     .catch((rej) => {
//       showResultIDSearch.innerHTML += `${rej}`;
//     });
// };

//!SECOND TRY:

buttonID.onclick = () => {
  let selectValueID = selectValue.options.value;
  switch (selectValueID) {
    case "searchByID":
      getIdAsync()
        .then((res) => {
          console.log(res);
        })
        .catch((rej) => {
          console.log(rej);
        });
      break;
    case "searchByFName":
      checkNameExistAsync()
        .then((res) => {
          console.log(res);
        })
        .catch((rej) => {
          console.log(rej);
        });
      break;

    default:
      break;
  }
};
