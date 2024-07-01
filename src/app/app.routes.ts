import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TorteuliComponent } from './torteuli/torteuli.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [

    {
        path:'',
        component:MainComponent,
        title:'ბავშვობის ტორტი'
    }
    ,
    {
        path:'main',
        component:MainComponent,
        title:'მთავარი გვერდი'
    }
    ,
    {
        path:'details/:id',
        component:DetailsComponent,
        title:'ტორტის დეტალები'
    }
    ,

    {
        path:'aboutus',
        component:AboutusComponent,
        title:'ჩვენს შესახებ'
    },
    {
        path:'torteuli',
        component:TorteuliComponent,
        title:'ტორტეული'
    }
,

{
    path:'faq',
    component:FaqComponent,
    title:'ხშირად დასმული კითხვები'
}
,
{
    path:'contact',
    component:ContactComponent,
    title:'საკონტაქტო ინფორმაცია'
}
,
{
    path:'cart',
    component:CartComponent,
    title:'კალათა'
}

];
