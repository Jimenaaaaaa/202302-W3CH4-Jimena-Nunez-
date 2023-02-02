export class Tasks extends Component {
  public series: TaskStructure[];
  constructor(public selector: string, public repo: TaskStorageRepo) {
    super();
    this.series = this.repo.getTasks();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  addTask(serie: TaskStructure) {
    this.series = [...this.series, serie];
    this.render('afterbegin');
    this.repo.setTasks(this.series);
  }

  deleteTask(id: TaskStructure['id']) {
    this.series = this.series.filter((item) => item.id !== id);
    this.render('afterbegin');
    this.repo.setTasks(this.series);
  }

  updateTask(serie: TaskStructure) {
    this.series = this.series.map((item) => (item.id === serie.id ? serie : item));
    this.render('afterbegin');
    this.repo.setTasks(this.series);
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    new Add('.series', this.addTask.bind(this));
    this.series.forEach((item) => {
      new Card(
        '.series>ul',
        item,
        this.deleteTask.bind(this),
        this.updateTask.bind(this)
      );
    });
  }

  createTemplate() {
    return `<section class="series"><ul></ul></section>`;
  }
}
