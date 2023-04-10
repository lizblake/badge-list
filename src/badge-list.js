import { LitElement, html, css } from 'lit';
import "./search-bar";
import "./badge-element";

class BadgeList extends LitElement {
  static properties = {
    badges: { type: Array },
    badgeTitle: { type: String },
    badgeCount: { 
      attribute: "badge-count",
      type: String },
  }

  static styles = css`
  .bottom-overlay-text {
    color: black;
    font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
    font-size: 28px;
    font-weight: lighter;
    text-align: left;
    margin-top: 10px;
    margin-left: 30px;
  }
  `;

  constructor() {
    super();
    this.badges = [];
    this.getSearchResults().then((results) => {
      this.badges = results;
    });
    this.badgeCount = "Badges (0)";
  }

  async getSearchResults(value = '') {
    const address = `/api/badgeRoster?search=${value}`;
    const results = await fetch(address).then((response) => { 
      if (response.ok) {
        return response.json()
      }
      return [];
     })
      .then((data) => {
        return data;
      });

      return results;
  }

  async handleSearchEvent(e) {
    const term = e.detail.value; //this is the search term
    this.badges = await this.getSearchResults(term);
  }

  updated(){
    this.badgeCount = "Badges (" + this.badges.length + ")";
  }
  
  render() {
    return html`

    <search-bar @value-changed="${this.handleSearchEvent}"></search-bar>
    <div class="bottom-overlay-text">${this.badgeCount}</div>
    <div class="wrapper">
      ${this.badges.map(badge => html`
        <div class="item">
          <badge-element badgeTitle="${badge.badgeTitle}" badgeIcon="${badge.badgeIcon}" badgeIconColor="${badge.badgeIconColor}" badgeDescription="${badge.badgeDescription}"></badge-element>
        </div>
      `)}
    </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);