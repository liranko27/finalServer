import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    customer_id: number
    @Column('date')
    order_date: Date
    @Column({ nullable: true })
    ship_date: Date
    @Column()
    ship_address: string
    @Column()
    ship_city: string
}
