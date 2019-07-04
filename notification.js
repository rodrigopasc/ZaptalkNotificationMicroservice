module.exports.handle = async (event) => {
  const { customerId } = JSON.parse(event.Records[0].Sns.Message)

  console.log(`Notification sent with generated invoice for customer ${customerId}.`)
  
  return customerId
}