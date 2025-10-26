// Mock data
import { podcasts } from "./data.js";
import { LitElement, html } from 'https://unpkg.com/lit@3/index.js?module';
// Need to call the component with this data to pass it into the parent


// Templates - call in the connected callback

// Create the webcomponent and styling structure for the new features working together
// Working from vanilla class components to React to continue learning vanilla and the reason for React (learning)
// Keep all the behaviour in the main component, other components for styling etc
class PodcastComponent extends HTMLElement {

    #podcastData = []; // Setting the podcast data to private in a empty array
    constructor () { // Builds the initial shadow dom wrapper
        super (); // Essentially when this is called the component can inherit normal dom workflow with shadow
        this.attachShadow({ mode: 'open' });

    }

    set data(podcasts) { // Called once the component has been created and if the data changes 
        this.#podcastData = podcasts.map(podcast => ({ ...podcast })); // Deep copy for mutations without affecting the main setter data
        this.render();
    }
    
    connectedCallBack () { // Runs when the component is attached to the DOM, runs once per cycle
        // Add the templates here
        // Run the first DOM render method here, adding the custom element to the dom
        // Add listners here as well as calls to methods like sort/search
        // Create/get children components, pass data to them, append them to the parent component
        const childPodcastRenderComponent = document.getElementById('render-component');
        childPodcastRenderComponent.podcasts = this.#podcastData;
        console.log(this.#podcastData);
        console.log(childPodcastRenderComponent);
    }

    render () {
        const childPodcastRenderComponent = document.getElementById('render-component');
        childPodcastRenderComponent.podcasts = this.#podcastData;
                console.log(this.#podcastData);
        console.log(childPodcastRenderComponent);
    }
}

// Define the component
customElements.define('podcast-preview', PodcastComponent);
const podcastsComponent = document.createElement('podcast-preview');
podcastsComponent.data = podcasts;// Setter

// Lit is only reactive to shallow property changes. Use proxy for full objects to avoid a new object/array being passed to lit each time
// Force a lit rerender from the proxy
class RenderComponent extends LitElement {
    static properties = {
        podcasts: {type: Array} // Reactive (Same as @propery) @property({ type: Array }) normalItems = [];
    };
    
    // Lit reactivity does not trigger a re-render for full objects/arrays, only single properties
    // Using a proxy wrapper to update the display works for full objects (intercepts changes(trap))
/*     constructor() {
        super();
        // Wrap items in a Proxy for deep reactivity
        this.itemsProxy = new Proxy(this.items, {
        set: (target, prop, value) => {
            target[prop] = value;
            this.requestUpdate(); // notify Lit to rerender
            return true;
        }
        });
    } This is not needed yet, only needed to replace/add/delete object data, changing the ref of the entire array will trigger Lit ref */

    // Return the reactive html
    render() {
        console.log(podcasts);
        return html`
            <div class="flex flex-col gap-4 bg-gray-200 p-4">
                <div class="flex flex-col gap-5 sm:grid sm:grid-cols-2 xl:grid-cols-4">
                    ${this.podcasts.map(
                        (podcast) => html`
                        <div class="flex flex-col gap-4 p-3.5 bg-white rounded h-full">
                            <img src="${podcast.image}" alt="${podcast.title}" />
                            <div class="flex-1">${podcast.title}</div>
                            <div>Seasons: ${podcast.seasons}</div>

                            <div class="flex flex-row justify-between">
                            ${podcast.genreNames.map(
                                (genreName) => html`
                                <div class="bg-gray-300 rounded shadow shadow-black p-1">
                                    ${genreName}
                                </div>
                                `
                            )}
                            </div>

                            <div>${podcast.updated}</div>
                        </div>
                        `
                    )}
                </div>
            </div> `;
    }

}
customElements.define('podcast-render', RenderComponent);

/* static get observedAttributes() { return ['title']; }
attributeChangedCallback(name, oldValue, newValue) {
  this.render();
}  This is used to update certian dom elements without the setter having to run again
  
Thinking of using subscribers but they are like React hooks, they communicate changes 
to multiple states/components that need to change if the data changes in the main setter
ie mutliple components depending on one component
vanilla js only really beats the frameworks/libraries if the framework is not optimized
and if there are very frequent changes real time for very few elements*/

/**
 * Subscribers are killing me
 * data.subscriber(callback) this means that the subscriber is called when the data changes
 * the callback is the function inside the (callback) which runs when the data changes
 * Subscribers are just like normal methods just grouped together to update all/certian state when needed
 * Vanilla js requires the setState to be called on event
 * Lit sets a reactive property/object and triggers a rernder(only the elements that changed) when the property/object is changed
 * React abtracts the subscriber and reactive nature (setters) into states and hooks (called explicitly)
 * The Setter is a property that the browser runs if it sees it in a object
 * Proxies are also things that can be used to update entire objects etc (property that the browser fires)
 * Proxy is like Lit but without the DOM diffing, still have to update the DOM manually like setters in vanilla
 * - but changes to the entire object can be detected/intercepted by proxy without having to attached each change/property to its own detection/listner 
 */
