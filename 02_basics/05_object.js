const course = {
    courseName : "JavaScript cohost",
    price : "999",
    courseInstreactor : "sanket"
}

//console.log(course.courseInstreactor); // now every time to get value of courseInstreactor we need to use object name and dot, insted of this we store that value in new varibale and we use that variable when we want that value eg

//const {courseInstreactor} = course //{keyname} = objectName
//console.log(courseInstreactor);

const {courseInstreactor : intrector} = course  // here we 1st gets value using key from cource object and the store that into intrector variable, reson is if we want short varibale name then we can do this, this is called object destrictor. {keyName : varibaleName } = objectName

console.log(intrector);

/* this is how we get API responce from Backend.
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Nelli",
          "last": "Seppala"
        },
        "location": {
          "street": {
            "number": 7357,
            "name": "Pispalan Valtatie"
          },
          "city": "Sund",
          "state": "Päijät-Häme",
          "country": "Finland",
          "postcode": 81216,
          "coordinates": {
            "latitude": "-22.8504",
            "longitude": "49.2197"
          },
          "timezone": {
            "offset": "+9:00",
            "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
          }
        },
        "email": "nelli.seppala@example.com",
        "login": {
          "uuid": "bd0eb9d9-cab3-4fd2-beec-882c5b1c478c",
          "username": "smallleopard552",
          "password": "tang",
          "salt": "NQo92j04",
          "md5": "749dac48cd8bb40bf35cc3007407fd1a",
          "sha1": "82eaab1b0e6212c4b3bc26dc530528efa63ff5b5",
          "sha256": "ced870357ebb99614df8e7695c33efa4446f07551cb9b2b856045ac10e26ca82"
        },
        "dob": {
          "date": "1953-05-27T22:47:39.544Z",
          "age": 71
        },
        "registered": {
          "date": "2017-12-29T01:16:53.830Z",
          "age": 6
        },
        "phone": "07-072-457",
        "cell": "040-147-20-46",
        "id": {
          "name": "HETU",
          "value": "NaNNA392undefined"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/31.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
        },
        "nat": "FI"
      }
    ],
    "info": {
      "seed": "66eaac11614dd8ca",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
*/

