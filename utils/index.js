exports.printMessage = function printMessage(data, { green }) {
  const message = `
# ${green('Project initialization finished!')}
# ========================
`
  console.log(message)
}
