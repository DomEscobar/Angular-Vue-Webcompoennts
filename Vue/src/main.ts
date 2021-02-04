import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createI18n } from 'vue-i18n'



class CustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    const locales = {
      de: {
        form: {
          firstname: 'Vorname',
          lastname: 'Nachname'
        }
      },
      en: {
        form: {
          firstname: 'Firstname',
          lastname: 'Lastname'
        }
      },
    }

    const i18n = createI18n({
      locale: 'de',
      fallbackLocale: 'en',
      locales
    })

    const options = App;
    const propsList: string[] = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});

    const props: { [index: string]: string } = {};
    // Validate, if all props are present
    for (const prop of propsList) {
      const propValue = this.attributes.getNamedItem(prop)?.value;

      if (!propValue) {
        console.error(`Missing attribute ${prop}`);
        return;
      }

      props[prop] = propValue;
    }
    const app = createApp(App, props);

    app
      .use(store)
      .use(i18n)
    //.use(router)

    const wrapper = document.createElement("div");
    app.mount(wrapper);

    this.appendChild(wrapper.children[0]);
  }
}

window.customElements.define("hucki-component", CustomElement);