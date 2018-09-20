import { Injectable } from '@nestjs/common'
import { Cat } from 'cats/cat.interface'

@Injectable()
export class CatService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
    return cat
  }

  findAll(): Cat[] {
    return this.cats
  }

  findOneById(id: number): Cat {
    return this.cats[0]
  }
}