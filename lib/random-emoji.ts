export default function random_emoji() {
  const emojis = [
    "✌️", "🫰", "🤘", "👍", "👋", "🤟", "🫶", "👐", "🙌", "👏",
  ];

  return emojis[Math.floor(Math.random() * emojis.length)];
}