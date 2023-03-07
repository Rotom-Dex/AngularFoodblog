import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-mex',
  templateUrl: './recipe-mex.component.html',
  styleUrls: ['./recipe-mex.component.css']
})
export class RecipeMexComponent implements OnInit{
  cards$ = [
    {
      title: 'Quesadillas',
      desc: 'Put beautiful summertime zucchini blossoms on display with this easy recipe! The bacon grease gives the quesadillas another level of tastiness plus they crisp up beautifully.',
      img: 'https://www.allrecipes.com/thmb/x7iWp7UaQusk_xW57r0qxW84iw0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Quesadillas-de-FLor-de-Calabaza-Zucchini-Blossom-Quesadillas-by-Buckwheat-Queen-2000-619090f4a8da4ffab500acaddf8b934a.jpg'
    },
    {
      title: 'Mexican Quinoa',
      desc: 'Corn and black beans bring beautiful color and flavorful to otherwise boring couscous',
      img: 'https://www.allrecipes.com/thmb/xyJEj6JrG1TqbRzdyFzmRHpfNPw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simple-Mexican-Quinoa-by-France-C-2000-7d20dcf9c03e4cd6988da9cb321afb69.jpg'
    },
    {
      title: 'Bean Burrito',
      desc: 'Refried beans, lettuce, avocado, and pico de gallo are served on a whole-wheat tortilla for a nutritious and filling meal. ',
      img: 'https://www.allrecipes.com/thmb/l6yhScj3yCXdpbTtdK83Rf3XsPE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Ricks-Big-Bad-Bean-Burrito-by-Baking-Nana-2000-edd65547590c4eec8d67cfabd0629f42.jpg'
    },
    {
      title: 'Grilled Shrimp Sonora',
      desc: 'This recipe was given to me by an Aunt that lives in Guaymas, a famous fishing town in the state of Sonora, Mexico," says recipe creator BajaValle. "It is a great family favorite at barbecues.',
      img: 'https://www.allrecipes.com/thmb/zXjSCKcdlynB79KNUJjedgbKlwE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Delias-Grilled-Shrimp-Sonora-by-hungryallweighs-2000-e8348a92bbbe460aa15b9877840c215a.jpg'
    },
    {
      title: 'Papas con Chorizo',
      desc: 'The bold, delicious flavors of this traditional Mexican dish are sure to become your new favorite breakfast. Top with a fried or poached egg, or serve inside corn tortillas. ',
      img: 'https://www.allrecipes.com/thmb/Um9465ZPXgCWi1KXlfLW9cbjEro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Papas-con-Chorizo-Mexican-Chorizo-and-Potatoes-by-France-C-2000-161df52db0664deeb03136e42075065e.jpg'
    },
    {
      title: 'Chorizo Street Tacos',
      desc: 'This simple scramble stars pan-crisped chorizo, pepper jack cheese, and tortilla strips. This chilaquiles-inspired tortilla chorizo scramble is a great way to dress up high-fiber, whole wheat tortillas.',
      img: 'https://www.allrecipes.com/thmb/9whEhVLzNuPhTcKIUBRR68bWfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Easy-Chorizo-Street-Tacos-by-Allrecipes-Magazine-2000-defee40a5f96469499c369a9a3b77e80.jpg'
    }
  ];
  foods: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const cards$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.foods.getDish(params.get('id')!))
    );
  }
}
