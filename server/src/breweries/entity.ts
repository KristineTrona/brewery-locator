import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString, IsNumber} from '../../node_modules/class-validator';
import Beer from '../beers/entity'

@Entity()
export default class Brewery extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsString()
  @Column('text')
  address: string

  @IsString()
  @Column('text')
  city: string

  @IsString()
  @Column('text')
  zipcode: string

  @IsNumber()
  @Column('decimal')
  lat: number

  @IsNumber()
  @Column('decimal')
  lng: number

  @IsString()
  @Column('simple-array')
  open: string[]

  @OneToMany(_ => Beer, beer => beer.brewery, {eager: true})
  beers: Beer[]

}
