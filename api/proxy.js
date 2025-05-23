// 文件路径：/api/proxy.js
export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing id' });
  }

  const url = `https://api.claim.sophon.xyz/eligibility?id=${id}`;
  const response = await fetch(url, {
    headers: {
      'x-api-key': 'MG9788WsRg0TLyGnKMphIr'
    }
  });

  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
