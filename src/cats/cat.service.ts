import { Injectable } from '@nestjs/common'
import { Cat } from 'cats/cat.interface'

@Injectable()
export class CatService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  finaAll(): Cat[] {
    return this.cats
  }
}