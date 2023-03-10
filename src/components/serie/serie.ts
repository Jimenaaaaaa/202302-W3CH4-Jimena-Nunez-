/* eslint-disable no-unused-vars */
import { SerieType } from '../../models/serie-model';
import { Component } from '../component/component';

export class Serie extends Component {
  constructor(
    public selector: string,
    public serie: SerieType,
    public deleteSerie: (id: SerieType['id']) => void,
    public updateSerie: (serie: SerieType) => void
  ) {
    super();
    this.serie = { ...serie };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector(`#d${this.serie.id}`)
      ?.addEventListener('click', () => {
        this.deleteSerie(this.serie.id); // Ver esto
      });
    document
      .querySelector(`#s${this.serie.id}`)
      ?.addEventListener('change', () => {
        this.serie.watched = true;
        this.updateSerie(this.serie); // Ver esto
      });
  }

  createTemplate() {
    return `
  <li class="serie">
              <img class="serie__poster"
                src="${this.serie.poster}"
                alt="${this.serie.name} poster" />
              <h4 class="serie__title">${this.serie.name}</h4>
              <p class="serie__info">${this.serie.creator}(${this.serie.year})</p>
              <ul class="score" id="s${this.serie.id}">
                <li class="score__star">
                  <i class="icon-score far fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete" id="d${this.serie.id}" title="6"></i>
            </li>
         `;
  }
}
