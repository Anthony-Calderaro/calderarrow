export default ({ lightTheme }) => {
  const spotifyEmbedTheme = lightTheme ? '&theme=0' : '';
  return (
    <section>
      <p>Music plays an important role in my life and I think I have a wide range of musical interests, although I am a rather selfish listener, completely devoid of loyalty. If I like a song, I'll listen until I hate it. Loving a song doesn't mean I love the artist.</p>
      <p>This playlist is what I'm currently listening to, either for pleasure or to discover something different about a song or band I've heard before. It is highly transcient, and over time, I categorize songs into more permanent playlists to capture their lasting significance.</p>
      <p>I enjoy sharing music and discovering new artists. If you have a suggestion, shoot me an email.</p>
      <iframe src={`https://open.spotify.com/embed/playlist/0mtYde8O1bL1Qdf9zWpw1v?utm_source=generator${spotifyEmbedTheme}`} width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
  )
}