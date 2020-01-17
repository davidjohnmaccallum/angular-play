exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      id: 1,
      first_name: "Hercule",
      last_name: "Klewer",
      email: "hklewer0@prlog.org",
      avatar:
        "https://robohash.org/omnisdelectusvoluptatem.png?size=50x50&set=set1"
    })
  });
};
