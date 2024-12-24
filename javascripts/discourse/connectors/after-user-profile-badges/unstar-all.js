let unstarAllBtn = document.getElementById('unstarAllBtn');

unstarAllBtn.addEventListener('click', unstarAll);

async function unstarAll() {
  const user_name = require("discourse/models/user").default.current().username;
  const badges = await require("discourse/models/user-badge").default.findByUsername(user_name);
  const favorites = new Map();
  badges.filter((b)=>b.is_favorite).forEach((b)=>favorites.set(b.badge_id,b));
  favorites.forEach((b)=>b.favorite());
  // Reload page to take effect
  window.location.reload();
}
