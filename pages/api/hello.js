// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let nummy = 0;
export default function handler(req, res) {
  nummy += 1;
  res.status(200).json({ nummy })
}
