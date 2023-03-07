import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-mah',
  templateUrl: './recipe-mah.component.html',
  styleUrls: ['./recipe-mah.component.css'],
})
export class RecipeMahComponent implements OnInit {
  cards$ = [
    {
      title: 'Kaju Kothimbir Vadi',
      desc: 'A classic Maharashtrian snack made of gram flour, spices and an addition of cashew nuts.',
      img: 'https://i.ndtvimg.com/i/2016-06/kajuvadi-625_625x350_81465887037.jpg',
    },
    {
      title: 'Pudachi Wadi',
      desc: 'Pudachi Wadi is a traditional preparation involving besan cases stuffed with a flavourful onion-coriander mixture infused with spices, poppy seeds and copra.',
      img: 'https://i.ndtvimg.com/i/2016-06/batata_625x350_41466058999.jpg',
    },
    {
      title: 'Zunka Bhakri      ',
      desc: 'Zunka Bhakri is traditionally made with chickpeas or besan paste which is further cooked with onions, curry leaves, ginger-garlic paste, cumin and mustard seeds.',
      img: 'https://c.ndtvimg.com/2019-12/o1l745m8_keema-matar_625x300_11_December_19.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
    },
    {
      title: 'Pav Bhaji',
      desc: 'The traditional hit of Maharashtra, the heart-throb of India, learn to cook the classic pav bhaji in the comfort of your kitchen space.',
      img: 'https://i.ndtvimg.com/i/2015-12/pav-bhaji_625x350_81449563929.jpg',
    },
    {
      title: 'Bharleli Vangi',
      desc: 'Beautiful aubergines are packed with the goodness of fresh coconut and tangy spices. Straight from a Maharashtrian kitchen, on to your plate!',
      img: 'https://i.ndtvimg.com/i/2016-08/brinjal_625x350_81472623768.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
    },
    {
      title: 'Misal Pav',
      desc: 'Cook up potatoes in a melange of hot masalas, team it up with bread to create a perfect, wholesome Maharashtrian meal. Misal pav is a meal that can be had at any time of the day.',
      img: 'https://i.ndtvimg.com/i/2016-06/misalpav_625x350_61465888599.jpg',
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
