import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cat } from '../graphql.schema';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';