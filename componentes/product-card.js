class productCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [
      'img',
      'titulo',
      'subtitulo',
      'descripcion',
      'precio',
      'tituloboton',
    ];
  }

  attributeChangedCallback(atributo, atributoViejo, atributoNuevo) {
    if (atributo === 'img') {
      (this.img = atributoNuevo);
    }

    if (atributo === 'titulo') {
      this.titulo = atributoNuevo;
    }

    if (atributo === 'subtitulo') {
      this.subtitulo = atributoNuevo;
    }

    if (atributo === 'descripcion') {
      this.descripcion = atributoNuevo;
    }

    if (atributo === 'precio') {
      this.precio = atributoNuevo;
    }

    if (atributo === 'tituloboton') {
      this.tituloboton = atributoNuevo;
    }
  }

  getTemplate() {
    const template = document.createElement('template');

    template.innerHTML = `
      <article class="card">
        <section class="card__container-img">
          <img src="${this.img}" alt="${this.titulo}" />
        </section>
        <section class="card__content">
          <div class="card__content-title">
            <h2>${this.titulo} <span>${this.subtitulo}</span></h2>            
          </div>
          <p class="card__description">${this.descripcion}</p>
          <div class="card__footer">
            <p>${this.precio}</p>
            <button>${this.tituloboton}</button>
          </div>
        </section>
      </article>
      ${this.getStyle()}
      `;

    return template;
  }

  getStyle() {
    return `
    <style>
      :host {
        --primary-background: #5a6cb2;       
      }


      .card {
        padding: 0 24px;
        min-width: 270px;
        max-width: 500px;
      }
      
      .card__container-img {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        background-color: var(--primary-background);
        height: 280px;
        width: 100%;
      }
      
      .card__container-img img {
        position: absolute;
        bottom: calc(50% - 180px);
        width: 250px;
      }
      
      .card__container-img:before {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 80px;
        font-weight: 800;
        color: #000;
        content: 'Nike';
        opacity: 0.1;
      }
      
      .card__content {
        background: #fff;
        padding: 40px 16px 32px;
      }
      
      .card__content-title {
        margin: 0 0 20px;
      }
      
      .card__content-title h2 {
        font-size: 30px;
        font-weight: bolder;
      }
      
      .card__content-title h2 span {
        font-size: 12px;
        color: gray;
        text-transform: uppercase;
      }
      
      .card__description {
        font-size: 15px;
        line-height: 22px;
        margin: 0 0 40px;
      }
      
      .card__footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
      }
      
      .card__footer p {
        font-size: 25px;
        font-weight: bolder;
        color: gray;
      }
      
      .card__footer button {
        padding: 10px 15px;
        border-radius: 30px;
        background: var(--primary-background);
        color: #fff;
        font-size: 12px;
        font-weight: bolder;
        text-transform: uppercase;
        border: none;
      }
      
      .card__footer button:hover {
        background: var(--background);
      }
      
      @media (min-width: 1024px) {
        .card {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 600px;
          max-width: 900px;
        }
        .card__container-img {
          height: initial;
          width: 50%;
        }
        .card__container-img img {
          position: relative;
          top: 100px;
          left: -50px;
          width: 720px;
          height: 450px;
          -webkit-transform: rotate(-30deg);
                  transform: rotate(-30deg);
        }
        .card__container-img:before {
          font-size: 100px;
        }
        .card__content {
          width: 50%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          padding: 40px;
        }
        .card__content-title {
          margin: 0 0 30px;
        }
        .card__content-title h2 {
          font-size: 40px;
          line-height: 35px;
        }
        .card__content-title h2 span {
          font-size: 20px;
        }
        .card .card__description {
          font-size: 15px;
          line-height: 22px;
          margin: 0 0 0 35px;
        }
        .card__footer {
          padding: 50px 0 0;
        }
        .card__footer p {
          font-size: 40px;
        }
        .card__footer button {
          padding: 20px 30px;
          border-radius: 30px;
          background: var(--primary-background);
          color: #fff;
          font-size: 15px;
          border: none;
        }
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  disconnetedCallBack() {
    console.log('Componente eliminado');
  }
}

customElements.define('product-card', productCard);
