import { Component} from '@angular/core';

@Component({
  'selector': 'report',
  'template': `<table border="1">
    <thead>
      <tr>
        <th>ID</th>
          <th>NOMBRE</th>
          <th>PRECIO</th>
          <th>AVATAR</th>
          <th>CREATED_AT</th>
          <th>UPDATED_AT</th>
      </tr>
    </thead>
    <tr *ngFor="let product of products">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td><img [src]="product.image"></td>
      <td>{{ product.created_at}}</td>
      <td>{{ product.updated_at }}</td>

    </tr>
  </table>`
})

export class ReportComponent {
  products:any = [{
    'id': 1,
    'name': 'Cornichons',
    'price': 58.61,
    'image' :'https://robohash.org/consequaturliberoquibusdam.png?size=300x300&set=set1 ',
    'created_at' : '2020-04-05T21:07:35.910Z',
    'updated_at' : '2020-04-05T21:07:35.910Z'
  }, {
    'id': 2,
    'name': 'Turnips',
    'price': 52.37,
    'image' :'https://robohash.org/explicaboexpeditamagni.png?size=300x300&set=set1',
    'created_at' : '2020-04-05T21:07:35.912Z',
    'updated_at' : '2020-04-05T21:07:35.912Z'
  },
  {
    'id': 3,
    'name': 'Dried Chinese Broccoli',
    'price': 86.27,
    'image' :'https://robohash.org/laboriosamcorporisrepellendus.png?size=300x300&set=set1',
    'created_at' : '2020-04-05T21:07:35.913Z',
    'updated_at' : '2020-04-05T21:07:35.913Z'
  },
  {
    'id': 4,
    'name': 'Jicama',
    'price': 19.64,
    'image' :'https://robohash.org/quisquamquodvoluptatem.png?size=300x300&set=set1',
    'created_at' : '2020-04-05T21:07:35.914Z',
    'updated_at' : '2020-04-05T21:07:35.914Z'
  },
  {
    'id': 5,
    'name': 'Iceberg lettuce',
    'price': 95.04,
    'image' :'https://robohash.org/doloremdeseruntqui.png?size=300x300&set=set1',
    'created_at' : '2020-04-05T21:07:35.915Z',
    'updated_at' : '2020-04-05T21:07:35.915Z'
  }];

} 