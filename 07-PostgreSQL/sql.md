tipo_produto:

```sql
create table tipo_produto(
    id serial primary key,
   	descricao varchar (60) not null
);
```

tipo_pagamento:

```sql
create table tipo_pagto(
id serial primary key,
descricao varchar (60) not null
);

```

pedidos:

```sql
create table pedido(
id serial primary key,
data date not null,
id_tipo_pagto int not null,
valor_total numeric (10,2) not null,
foreign key (id_tipo_pagto) references tipo_pagto(id)
);

```

produtos:

```sql
create table produto(
id serial primary key,
descricao varchar (60) not null,
valor numeric (10,2) not null,
id_tipo_produto int not null,
foreign key (id_tipo_produto) references tipo_produto(id)
);

```

pedidos_produtos:

```sql
create table pedidos_produto(
id serial primary key,
id_pedido int not null,
id_produto int not null,
qtde int not null,
valor_unit numeric (10,2) not null,
valor_total numeric (10,2) not null,
foreign key (id_pedido) references pedido(id),
foreign key (id_produto) references produto(id)
);

```

- Insert:

tipo_produto:

```sql
insert into Tipo_produto (descricao) values ('CONSUMO '), ('VENDA');
```

tipo_pagto:

```sql
insert into Tipo_pagto (descricao) values ('A VISTA'), ('A PRAZO');
```

pedido:

```sql
insert into Pedidos (data, id_tipo_pagto,valor_total)
values ('2020/07/27',1,16.00), ('2020/08/05', 2,27.00), ('2020/08/06', 1,13.50);
```

produto:

```sql
insert into produto (descricao.valor,id_tipo_produto)
values ('AMACIANTE 2 LT', 15.00,1), ('BATATA CONGELADA 400gm', 5.00,2),
('PIZZA', 10.00,2);
```

pedidos_produto:

```sql
insert into pedidos_produtos (id_pedido,id_produto,qtde,valor_unit.valor_total)
values (1,2,2,5.00,11.00) (1,6,1,5.00,4.00);
```

- deletar todas as tabelas:

```sql
delete from pedido_produto;
delete from pedido;
delete from produto;
delete from tipo_pagto;
delete from tipo_produto;

```
