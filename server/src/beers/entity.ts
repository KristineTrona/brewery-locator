import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { IsString, IsNumber} from '../../node_modules/class-validator';
import Brewery from '../breweries/entity'

@Entity()
export default class Beer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsNumber()
  @Column('numeric')
  alcohol: number

  @IsString()
  @Column('text')
  keg: string

  @IsString()
  @Column('text')
  style: string

  @IsNumber()
  @Column('integer')
  volume: number

  @ManyToOne(_ => Brewery, brewery => brewery.beers)
  brewery: Brewery
}
