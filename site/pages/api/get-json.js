import fs from 'fs'

/////////////////////////////////////////////////////////////////
//
// This call is for getting json data from the samples. It's
// called like:
//
//     /api/get-json?file_key=fetch-remote-json-data/data.json
//
// which returns the file:
//
//    ./pages/sandbox/fetch-remote-json-data/data.json
//
// The process does a basic check to make sure there isn't
// an attempt to crawl the filesystem by splitting the query
// param and making sure there are only two parts.
//
// If that split check passes the full path is assembled via
// the hard coded `./pages/sandbox/....` path
//
// Note that if the file doesn't exist the process hangs. It
// might time out at some point, but I haven't waited long
// enough to find out
//
/////////////////////////////////////////////////////////////////

export default function handler(req, res) {
  const { file_key } = req.query
  const file_parts = file_key.split('/')
  if (file_parts.length === 2) {
    // paths are hard coded
    const file_path = `./pages/sandbox/${file_key}`
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
