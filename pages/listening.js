export default ({ lightTheme }) => {
  const spotifyEmbedTheme = lightTheme ? '&theme=0' : '';
  return (
    <section>
      <p>Music plays an important role in my life and greatly influences my mood and personality. I am a selfish listener, completely devoid of loyalty. If I like a song, I'll listen to it until I hate it. I don't have to love an entire album because I liked a song. I don't love an artist because I love their song.</p>
      <p>I'm always open to music suggestions. This playlist is what I'm currently listening to, either for pleasure or to discover something different about a song or band I've heard before.</p>
      <iframe src={`https://open.spotify.com/embed/playlist/0mtYde8O1bL1Qdf9zWpw1v?utm_source=generator${spotifyEmbedTheme}`} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
  )
}