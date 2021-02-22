import {Entity, Column, Generated, Index, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'


@Entity()
export class User {
   @Index()
   @Generated()
   @PrimaryColumn()
        id: number
    
   @Column({nullable:true})
        name: string;
    
    
   @Column({nullable:true})
        nin: string 

    @Column({nullable:true})    
        email:string

}
