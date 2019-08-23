require("isomorphic-fetch")

const client = require("./petStore.js")({
  endpoint: "http://localhost:3000",
  securityHandlers: {
    petstore_auth: () => {
      console.log("test auth")
      return "jwt"
    },
    api_key: () => "this is an api key"
  }
})

client.addPet({
  body: {
    name: "Mew",
    photoUrls: ["http://placekitten.com/200/300", "http://placekitten.com/500/500"]
  }
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error)
