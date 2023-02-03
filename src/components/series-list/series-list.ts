/* eslint-disable no-unused-vars */
import { SerieType } from '../../models/serie-model';
import { Component } from '../component/component';
import { Serie } from '../serie/serie';

export class Seriess extends Component {
  constructor(public selector: string, public series: SerieType[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  // addSerie(serie: SerieType) {
  //   this.series = [...this.series];
  //   this.render('afterbegin');
  // }

  deleteSerie(id: SerieType['id']) {
    this.series = this.series.filter((item) => item.id !== id);
    this.render('afterbegin');
  }

  updateSerie(serie: SerieType) {
    this.series = this.series.map((item) =>
      item.id === serie.id ? serie : item
    );
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('.series-list--watched') as HTMLElement).innerHTML = '';
    super.render(place);

  //   new Add('.series-list--watched', this.addSerie.bind(this));
  //   this.series.forEach((item) => {
  //     new Serie(
  //       '.series-watched>ul',
  //       item,
  //       this.deleteSerie.bind(this),
  //       this.updateSerie.bind(this)
  //     );
  //   });
  }

  createTemplate() {
    return `<section class="series"><ul></ul></section>`;
  }
}
