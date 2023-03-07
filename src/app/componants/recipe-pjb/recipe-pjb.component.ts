import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-pjb',
  templateUrl: './recipe-pjb.component.html',
  styleUrls: ['./recipe-pjb.component.css']
})
export class RecipePjbComponent implements OnInit{
  cards$ = [
    {
      title: 'Butter Chicken',
      desc: 'Presenting, the classic butter chicken that is unknown to none. Juicy chicken pieces bathed in a creamy gravy bursting with authentic flavours.',
      img: 'https://i.ndtvimg.com/i/2015-01/chicken-butter-625_625x350_51420696582.jpg'
    },
    {
      title: 'Sarson Ka Saag & roti',
      desc: 'Palak, bathua and sarso saag come together to create a sensation with hearty makke ki roti. Simple, savoury and full of rustic flavours.',
      img: 'https://i.ndtvimg.com/i/2015-01/saag_625x350_51420779118.jpg'
    },
    {
      title: 'Chole Bhature',
      desc: 'Talk about Punjabi food and the popular chole bhature can never be given a skip. The dish has become one of the favourites with people across the country and is also one of the must try Indian delicacies.',
      img: 'https://i.ndtvimg.com/i/2015-01/625-chole-bhature_625x350_41420696838.jpg'
    },
    {
      title: 'Dal Makhani',
      desc: 'From the local highway dhabas to some of the most sophisticated five star hotels - Dal makhni finds its dedicated space on menus across eating joints and restaurants and beyond all cultural division. Master the art of cooking the queen of all dal preparations.',
      img: 'https://i.ndtvimg.com/i/2015-01/dal-makhni-625_625x350_61420697068.jpg'
    },
    {
      title: 'Machchli Amritsari',
      desc: 'A treat for all fish lovers. Beautiful pieces of fish, coated in a spicy batter and deep fried to a golden perfection. Garnished with a sprinkling of garam masala and a dash of lemon juice for that extra zing.',
      img: 'https://i.ndtvimg.com/i/2017-03/fish-tikka_725x483_51488522042.jpg'
    },
    {
      title: 'Murgh Malaiwala',
      desc: 'Here"s a perfect Punjabi recipe that will add stars to your dinner party. This is a no oil, no ghee recipe including chicken pieces cooked in a blend of masalas, milk and cream',
      img: 'https://i.ndtvimg.com/i/2015-01/murgh-malai-625_625x350_51420697474.jpg'
    }
    ]
  foods: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const cards$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.foods.getDish(params.get('id')!))
    );
  }
}
