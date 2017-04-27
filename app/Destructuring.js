export default const destructure = () => {
  let jsonObject = {
    firstnme: 'raja',
    secondname: 'ayyanababu',
    websites: {
      twitter: 'twitter.com',
      facebook: 'facebook.com'
    }
  }

  let { twitter: tweet, facebook: fb = "amazon.com" } = jsonObject.websites
  console.log(`Destructuring ${tweet} and ${fb} with alias names`)

}
