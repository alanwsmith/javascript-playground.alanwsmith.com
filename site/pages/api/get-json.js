import fs from 'fs'

export default function handler(req, res) {
  const { file_key } = req.query

  // Note this hangs if the file isn't there.
  // not worred about it,
  // but something to keep in minde for future reference
  //
  // make sure there is only one directly and one file
  const file_parts = file_key.split('/')
  if (file_parts.length === 2) {
    const file_path = `./pages/${file_key}`
    if (fs.existsSync(file_path)) {
      const file_data = fs.readFileSync(file_path, `utf-8`)
      res.status(200).json(file_data)
    } else {
      res.status(404)
    }
  } else {
    res.status(404)
  }
}
