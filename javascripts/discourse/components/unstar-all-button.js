import Component from "@glimmer/component";
import DButton from "discourse/components/d-button";
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class UnstarAllButton extends Component {
  @action
  async unstarAll() {
    const user_name = require("discourse/models/user").default.current().username;
    const badges = await require("discourse/models/user-badge").default.findByUsername(user_name);
    const favorites = new Map();
    badges.filter((b)=>b.is_favorite).forEach((b)=>favorites.set(b.badge_id,b));
    favorites.forEach((b)=>b.favorite());
    window.location.reload();
  }

}
