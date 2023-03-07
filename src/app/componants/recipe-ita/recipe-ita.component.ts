import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-ita',
  templateUrl: './recipe-ita.component.html',
  styleUrls: ['./recipe-ita.component.css'],
})
export class RecipeItaComponent implements OnInit {
  cards$ = [
    {
      title: 'Lasagna',
      desc: 'The ultimate Italian dish has to be this recipe of Lasagna. A secret to the best lasagna recipe lies in the perfectly made, home made bolognese sauce and this bacon and lamb lasagna boasts of a delicious one!',
      img: 'https://i.ndtvimg.com/i/2017-10/lasagna_620x350_81508846322.jpg',
    },
    {
      title: 'Tiramisu',
      desc: 'The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture. The word "tiramisu" in Italian means "pick-me-up". Owing to its caffeine kick it sure does!',
      img: 'https://i.ndtvimg.com/i/2017-09/tiramisu-the-pick-me-up-cake_625x350_81506418133.jpg',
    },
    {
      title: 'Pasta Con Pomodoro E Basilico',
      desc: ' easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kids tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine.',
      img: 'https://i.ndtvimg.com/i/2017-09/pasta-con-pomodoro-e-basilico_625x350_51506418092.jpg',
    },
    {
      title: 'Mushroom Risotto',
      desc: 'A plateful of buttery risotto with the goodness of mushrooms. A healthy bowl of mushroom risotto has benefits more than you can think. A great source of protein, powerful antioxidant and even has cancer-fighting properties.',
      img: 'https://i.ndtvimg.com/i/2017-09/risotto_625x350_81506418041.jpg',
    },
    {
      title: 'Margherita Pizza',
      desc: 'One of the most loved Italian dishes, it just takes a few simple ingredients and you get insanely delicious results! You just cant go wrong with that tomato, basil and fresh mozzarella combo.',
      img: 'https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg',
    },
    {
      title: 'Bruschetta',
      desc: 'An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic.',
      img: 'https://i.ndtvimg.com/i/2017-09/bruschetta_625x350_71506417841.jpg',
    },
  ];
  foods: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const cards$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.foods.getDish(params.get('id')!))
    );
  }
}
