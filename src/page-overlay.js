import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./search-bar";

class PageOverlay extends LitElement {
    static properties = {
      badgeTitle: {type: String, reflect: true},
      overlayTitle: {type: String, reflect: true },
      overlayParagraph: {type: String, reflect: true },
      overlayBadgeText: {type: String, reflect: true }
    };

    static styles = css`
    
    .overlay-container {
        background-color: white;
        justify-content: center;
        margin: 0 auto;
        padding: 0px 0px 10px 0px;
        border-radius: 0px 0px 5px 5px;
        width: 90%;
    }

    .top-title-box {
        color: white;
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
        font-size: 60px;
        font-weight: 60;
        text-align: left;
        padding-left: 50px;
        padding-top: 40px;
    }
    .top-text-box {
        background-color: white;
        color: black;
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
        font-size: 24px;
        font-weight: 1;
        text-align: left;
        padding-top: 20px;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: -4px;
    }

    .top-overlay-box {
        background-color: #273744;
        border-radius: 5px 5px 0px 0px;
        height: 160px;
        margin: auto;
    }

    .search-content-table {
        display: table;
    }

    .search-content {
        display: table-row;
    }

    .search-table-element {
        display: table-cell;
    }

    .topicon {
        --simple-icon-width: 100px;
        --simple-icon-height: 100px;
        --simple-icon-color: white;
    }
    `;

    constructor() {
        super();
        this.badgeTitle = "Amazon Cognito";
        this.overlayTitle = "Amazon Web Services Intro";
        this.overlayParagraph = "Here you will learn how to set up an account for AWS, how to create a root user, a I AM user account, set up MFA on your Root and I AM accounts, set up a user pool in Amazon Cognito, how to upload and use Amazon S3, and how to use Amazon Lambda.";
    }
    
    render() {
    return html`    
        <div class="overlay-container">
            <div class="top-overlay-box">
                <div class="search-content-table">
                    <div class="search-content">
                        <p class="top-title-box search-table-element">${this.overlayTitle}</p>
                        <simple-icon icon="maps:local-airport" class="topicon"></simple-icon>
                    </div>
                </div>
            </div>
            <p class="top-text-box">${this.overlayParagraph}</p>
            <slot name="searchBar"></slot>
            <slot name="badge"></slot>
        </div>
    `;
    }
}

customElements.define("page-overlay", PageOverlay);
    
