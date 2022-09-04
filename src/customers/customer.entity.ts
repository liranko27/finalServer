import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    first_name: string
    @Column()
    last_name: string
    @Column()
    email: string
    @Column()
    city: string
    @Column()
    address: string
    @Column()
    phone: string
    @Column()
    password: string
    @Column()
    zip_code: number
}
