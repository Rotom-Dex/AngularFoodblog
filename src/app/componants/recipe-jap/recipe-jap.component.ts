import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-jap',
  templateUrl: './recipe-jap.component.html',
  styleUrls: ['./recipe-jap.component.css']
})
export class RecipeJapComponent {
  cards$ = [
    {
      title: 'Sushi',
      desc: 'If you’ve not heard of Sushi in your lifetime, then you might’ve been living on Mars your whole life. It is certainly one of the most famous foods that find its origin from Japan. ',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Sushi.jpg'
    },
    {
      title: 'Sashimi',
      desc: 'Before the people came with the technique of preservation of fish, they were consuming raw fish without the rice. But this food item is not just limited to the fish. ',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Sashimi.jpg'
    },
    {
      title: 'Tempura',
      desc: 'It is a dish made with battered and fried fish or seafood and also with vegetables. But the special flavor of the food is gotten through the impeccable style of cooking they adhere to.',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Tempura.jpg'
    },
    {
      title: 'Miso Soup',
      desc: 'Soup is the part of any traditional meal of Japan. But, Miso soup tops the list with its cooking which is simple and the flavor which is a delight for the taste buds. The ingredient is ‘dashi’ which is either fish or kelp.',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Miso-Soup.jpg'
    },
    {
      title: 'Udon',
      desc: ' It is a noodle made from wheat flour. The food enjoys mass popularity among the people of Japan. This is because of its delicious taste and the price of this food is considerably low.',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Udon.jpg'
    },
    {
      title: 'Ramen',
      desc: 'The dish is comprised of wheat noodles, which is served with soy sauce or miso soup. The dish also has a number of ingredients in it such as slices of pork, seaweed, green onion and egg.',
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Ramen.jpg'
    }];
  foods: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const cards$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.foods.getDish(params.get('id')!))
    );
  }
}
