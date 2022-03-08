import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['{{', '}}'],
  // TODO это настройка интерполяции обьектов в html расзметку (по умолчанию {{обьект}})
  // template: `
  //   <div class="card">
  //     <h2>Card Component</h2>
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
  //       soluta iure est obcaecati nisi blanditiis autem placeat, facilis ipsa
  //       maxime perferendis optio cum error necessitatibus dolorem ipsam fuga
  //       minus tempore!
  //     </p>
  //   </div>
  // `,
  // styles: [
  //   `
  //     .card {
  //       padding: 0.5em 0.5em;
  //       border: 1 dashed #000000;
  //     }
  //     h2 {
  //       margin-top: 0.5em;
  //     }
  //   `,
  // ],
})

// TODO можно писать и через template + styles, но это менее удобно. Лучше использовать подключение html  и css через templateUrl и styleUrls.
export class CardComponent implements OnInit {
  @Input()
  card!: Card;
  @Input()
  index!: number;
  // title = 'My Card Title';
  // text =
  //   'My Card Text = Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta iure est obcaecati nisi blanditiis autem placeat, facilis ipsa maxime perferendis optio cum error necessitatibus dolorem ipsam fuga  minus tempore!';
  textColor = 'blue';
  number = 42;
  cardDate: Date = new Date();
  array = [1, 2, 3, 4, 5, 6];
  obj = { name: 'Nikita', age: 24 };
  disabled = false;

  imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  ngOnInit() {
    setTimeout(() => {
      this.imageUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png';
      this.disabled = true;
    }, 3000);
    console.log('oninit ');
  }
  getInfo() {
    return 'This is my info';
  }
  changeTitle() {
    this.card.title = 'Has been changed';
  }
  inputHandler(event: any) {
    const value = event.target.value;
    this.card.title = value;
  }
  inputHandlerTwo(value: any) {
    this.card.title = value;
  }
  changeHandler() {
    console.log('title', this.card.title);
  }
}
