export default async function handler(request, response) {
  // await fetch('wikipedia.org').then(r => r.json()).then(r => console.log('r', r))
  response.status(200).json({
    test: 'hi ajc',
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}