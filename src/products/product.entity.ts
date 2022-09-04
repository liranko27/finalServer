import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    product_name: string
    @Column()
    category_id: number
    @Column()
    unit_price: number
    @Column()
    unit_in_stock: number
    @Column()
    description: string
    @Column('date')
    published: Date
    @Column()
    brand: string

}
