export default function handler(request, response) {
  response.status(200).json({
    test: 'hi ajc',
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}